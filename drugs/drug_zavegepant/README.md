<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;zavegepant&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Zavegepant_Shahin2025_reference&quot;,&quot;label&quot;:&quot;Shahin_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md&quot;,&quot;status&quot;:&quot;extracted \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# zavegepant

- **generic name:** zavegepant
- **ATC codes:** `N02CD08`
- **DrugBank:** [DB15688](https://go.drugbank.com/drugs/DB15688) · **PubChem:** not captured
- **molar mass:** 638.817 g/mol (C36H46N8O3) — DrugBank
- **groups:** approved, investigational

## About

Zavegepant is a CGRP antagonist used as an antimigraine medicine for the acute treatment of migraine attacks. It is an approved active ingredient, though it is not authorised in the European Union and appears to be used mainly in the United States.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q99388898](https://www.wikidata.org/wiki/Q99388898) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:44 | 0:11 | 1/1/0 | 0/0/0 | 0/0/0 | 17,313/815 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.818). The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: extracted</sub><br><sub>route_to: `engineer_replication`</sub> | [Shahin_2025_reference](drugs/drug_zavegepant/Zavegepant_Shahin2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Shahin MH et al., A Pharmacokinetic Study of Zavegepant N…, Clinical and translational… (2025) | [10.1111/cts.70199](https://doi.org/10.1111/cts.70199) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.286). The first reading is what the record holds.">cross-check: disputed</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Comisar_2025_reference](drugs/drug_zavegepant/Zavegepant_Comisar2025_reference.md) | — | 1-compartment (no model) | 0 | Comisar CM et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2025) | [10.1002/psp4.13257](https://doi.org/10.1002/psp4.13257) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=zavegepant) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate, `CYP3A4` substrate, `SLC10A1` substrate, `SLCO1B3` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | `SLC47A1` substrate, `SLC47A2` unknown | DrugBank actor |
| excretion | liver | `SLC47A1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALCRL (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 10 matched, 10 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Comisar_2025.pdf` | Comisar CM et al., Population pharmacokinetic modeling of…, CPT: pharmacometrics & syst… (2025) | popPK | 10 | [10.1002/psp4.13257](https://doi.org/10.1002/psp4.13257) | [39492601](https://pubmed.ncbi.nlm.nih.gov/39492601) | The abstract provides specific quantitative parameters including bioavailability (5.1% intranasal, 0.65% oral) and absorption rate constants (5.8 and 0.8 h-1), though central PK values like CL and V are not explicitly listed in the text. |
| `Bhardwaj_2024.pdf` | Bhardwaj R et al., Deconvoluting zavegepant drug-drug inte…, Clinical and translational… (2024) | pgx | 7 | [10.1111/cts.70048](https://doi.org/10.1111/cts.70048) | [39602316](https://www.ncbi.nlm.nih.gov/pubmed/39602316) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T06:44:36.932593+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bhardwaj_2024 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic (PK) parameters (AUC, Cmax) and safety data; it does not report any pharmacodynamic (PD) or exposure-response relationship. |
| PGx | Bhardwaj_2024_2 | not_relevant | 0 | 0 | The study evaluates drug-drug interactions (effects of rifampin and itraconazole) on pharmacokinetics, but does not investigate the impact of genetic variants, genotypes, or pharmacogenomic factors. |
| popPK | Hughes_2024 | irrelevant | 2 | 0 | The study focuses on cardiac safety (QTc) and concentration-QTc modeling; while PK was measured, no quantitative disposition parameters (CL, V, t1/2, etc.) for zavegepant are reported in the evidence. |
| PGx | Lipton_2026 | not_relevant | 0 | 0 | The text is a general clinical review of gepants for migraine and does not report specific pharmacogenomic effects on the PK/PD of zavegepant. |
| PGx | Takizawa_2023 | not_relevant | 1 | 2 | The paper is a narrative review discussing drug-drug interactions (specifically CYP3A4 inhibition by Paxlovid) and general toxicological considerations, not pharmacogenomic effects of genetic variants on zavegepant PK/PD. |
| PD | unknown_2023 | not_relevant | 1 | 0 | The text is a title or brief mention of "Drugs for migraine" without providing any specific data, models, or numeric parameters for zavegepant. |
| PD | unknown_2023_2 | not_relevant | 0 | 0 | The provided text is only a title and does not contain any data, analysis, or numeric parameters regarding pharmacodynamics or exposure-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:44 UTC</sub>
