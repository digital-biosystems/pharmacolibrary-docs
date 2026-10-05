<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B01A&quot;,&quot;href&quot;:&quot;atc/B01A.md&quot;},{&quot;label&quot;:&quot;dalteparin&quot;}]"></div>

# dalteparin

- **generic name:** dalteparin
- **ATC codes:** `B01AB04`
- **DrugBank:** [DB06779](https://go.drugbank.com/drugs/DB06779) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Dalteparin is a low molecular weight heparin anticoagulant used to treat and prevent blood clots, including in myocardial infarction, unstable angina, pulmonary embolism, thrombophlebitis, and after surgery. It is an approved medicine and is widely used as an antithrombotic agent.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1851701](https://www.wikidata.org/wiki/Q1851701) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-05 18:03 | 39:18 | 0/2/0 | 0/0/0 | 0/0/0 | 58,824/9,348 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/3 | 3/3 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Damle_2021_reference](drugs/drug_dalteparin/Dalteparin_Damle2021_reference.md) | — | 2-compartment (no model) | 4 | Damle B et al., Population Pharmacokinetic Analysis of…, Journal of clinical pharmac… (2021) | [10.1002/jcph.1716](https://doi.org/10.1002/jcph.1716) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [van_2022_reference](drugs/drug_dalteparin/Dalteparin_van2022_reference.md) | — | general linear (no model) | 0 | van der Heijden CDCC et al., Effects of dalteparin on anti-Xa activi…, British journal of clinical… (2022) | [10.1111/bcp.15208](https://doi.org/10.1111/bcp.15208) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dalteparin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | skin | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HPSE (substrate), SELP (inhibitor), SERPINC1 (potentiator), VEGFA (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Abe_2013.pdf` | Abe S et al., Low-molecular-weight heparin pharmacoki…, International journal of cl… (2013) | popPK | 10 | [10.5414/CP201858](https://doi.org/10.5414/CP201858) | [23587152](https://pubmed.ncbi.nlm.nih.gov/23587152) | The paper describes a population PK model for dalteparin, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided abstract text. |
| `Yu_2018.pdf` | Yu L et al., Pharmacodynamic properties and bioequiv…, Xenobiotica; the fate of fo… (2018) | pd | 4 | [10.1080/00498254.2017.1316021](https://doi.org/10.1080/00498254.2017.1316021) | [28375032](https://www.ncbi.nlm.nih.gov/pubmed/28375032) | metadata signals extractable PD data (Emax) |
| `Risselada_2013.pdf` | Risselada AJ et al., [Pulmonary embolism due to interaction…, Nederlands tijdschrift voor… (2013) | pgx | 7 | not captured | [24382036](https://www.ncbi.nlm.nih.gov/pubmed/24382036) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-06T16:28:41.133841+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abe_2013 | relevant | 10 | 2 | The paper describes a population PK model for dalteparin, but the specific numeric parameter values (CL, V, Q, ka) are not present in the provided abstract text. |
| popPK | Bergqvist_2004 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of melagatran/ximelagatran, with dalteparin serving only as a comparator agent for which no PK parameters are reported. |
| PGx | Mälarstig_2006 | not_relevant | 2 | 5 | The paper reports a genetic association with a biomarker (sCD40L) and its prognostic value, but does not report a pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of dalteparin itself. |
| PGx | Mälarstig_2008 | not_relevant | 0 | 0 | The paper investigates the association between IL-10 gene variants and IL-10 plasma levels/outcomes in ACS patients, not the pharmacokinetics or pharmacodynamics of dalteparin. |
| popPK | Nylander_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of platelet activation and does not report pharmacokinetic parameters for dalteparin. |
| PGx | Risselada_2013 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (carbamazepine and rivaroxaban) and does not report any pharmacogenomic effects on dalteparin. |
| popPK | Schoemaker_1996 | relevant | 9 | 0 | The paper describes a population PK study for dalteparin, but the provided evidence contains only the abstract/methodology description without any numeric parameter values. |
| popPK | Schwarzwald_2002 | relevant | 8 | 0 | The paper is a pharmacokinetic study of dalteparin in horses reporting a 1-compartment model, but the specific numeric parameter values (CL, V, t1/2) are not present in the provided evidence text. |
| PGx | Verso_2021 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions with anticancer agents, not pharmacogenomic effects of gene variants on dalteparin PK/PD. |
| popPK | Yu_2018 | irrelevant | 2 | 2 | The study reports pharmacodynamic parameters (Anti-Xa/IIa activity) and bioequivalence ratios, not pharmacokinetic disposition parameters (CL, V, Q) for dalteparin itself. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-05 18:02 UTC</sub>
