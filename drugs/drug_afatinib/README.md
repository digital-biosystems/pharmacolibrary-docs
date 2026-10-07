<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;afatinib&quot;}]"></div>

# afatinib

- **generic name:** afatinib
- **ATC codes:** `L01EB03`, `L01XE13`
- **DrugBank:** [DB08916](https://go.drugbank.com/drugs/DB08916) · **PubChem:** [CID 10184653](https://pubchem.ncbi.nlm.nih.gov/compound/10184653)
- **molar mass:** 485.938 g/mol (C24H25ClFN5O3) — DrugBank
- **groups:** approved, investigational

## About

Afatinib is a protein kinase inhibitor used to treat non-small-cell lung cancer. It is authorised in the European Union for this indication.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q4688818](https://www.wikidata.org/wiki/Q4688818) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| afatinib | parent | 485.938 | C24H25ClFN5O3 | DrugBank | [10184653](https://pubchem.ncbi.nlm.nih.gov/compound/10184653) | Freiwald_2014, Nakao_2019 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:13 | 7:50 | 1/0/1 | 0/0/2 | 0/0/0 | 184,112/37,343 | openai / gpt-6-luna | 7 | 2/5 | 6/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Nakao_2019_reference](drugs/drug_afatinib/Afatinib_Nakao2019_reference.md) | held back | 1-compartment, oral | 3 | Nakao K et al., Population pharmacokinetics of afatinib…, Scientific reports (2019) | [10.1038/s41598-019-54804-9](https://doi.org/10.1038/s41598-019-54804-9) |
| <span class="pk-badge pk-badge--orange">needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Freiwald_2014_reference](drugs/drug_afatinib/Afatinib_Freiwald2014_reference.md) | — | 1-compartment (no model) | 1 | Freiwald M et al., Population pharmacokinetics of afatinib…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2403-2](https://doi.org/10.1007/s00280-014-2403-2) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> | [Yokota_2023_dose_reduction_or_withdrawal](drugs/drug_afatinib/pd_Yokota_2023_dose_reduction_or_withdrawal.md) | dose reduction or withdrawal ← afatinib · categorical (graded) response model | — | Yokota H et al., Effects of polymorphisms in pregnane X…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04569-w](https://doi.org/10.1007/s00280-023-04569-w) |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Zhang_2017_pEGFR](drugs/drug_afatinib/pd_Zhang_2017_pEGFR.md) | expression of pEGFR (Tyr1068) ← afatinib · direct Emax (saturable) effect | model (no simulator) | Zhang SR et al., Efficacy of afatinib, an irreversible E…, Acta pharmacologica Sinica (2017) | [10.1038/aps.2016.107](https://doi.org/10.1038/aps.2016.107) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=afatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: EGFR (inhibitor), ERBB2 (inhibitor), ERBB4 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 1  ·  needs_review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `DCunha_2019.pdf` | D'Cunha RR et al., Nilotinib Alters the Efflux Transporter…, Journal of pharmaceutical s… (2019) | popPK | 10 | [10.1016/j.xphs.2019.05.028](https://doi.org/10.1016/j.xphs.2019.05.028) | [31163185](https://pubmed.ncbi.nlm.nih.gov/31163185) | Afatinib clearance and exposure values are reported numerically for mice. |
| `Freiwald_2014.pdf` | Freiwald M et al., Population pharmacokinetics of afatinib…, Cancer chemotherapy and pha… (2014) | popPK | 10 | [10.1007/s00280-014-2403-2](https://doi.org/10.1007/s00280-014-2403-2) | [24522402](https://pubmed.ncbi.nlm.nih.gov/24522402) | Human population-PK model reports numeric afatinib clearance and distribution volume in the evidence. |
| `Yong_2025.pdf` | Yong L et al., Modeling exposure-driven adverse events…, Acta pharmacologica Sinica (2025) | popPK | 9 | [10.1038/s41401-025-01573-z](https://doi.org/10.1038/s41401-025-01573-z) | [40481213](https://pubmed.ncbi.nlm.nih.gov/40481213) | Afatinib PopPK models were constructed in patients, but no numeric PK parameter values are provided in the evidence. |

<sub>queue written 2026-10-06T21:07:10.199680+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Haaland_2014 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis, not a PK study, and it reports no afatinib disposition parameters. |
| popPK | Hotta_2021 | irrelevant | 0 | 0 | Edoxaban is the subject of the PK analysis; afatinib is only co-administered and has no reported PK values. |
| popPK | Niebecker_2019 | irrelevant | 1 | 0 | This is an exposure–adverse-event model, not a disposition-PK analysis, and afatinib PK parameters are not reported in the provided evidence. |
| popPK | Solca_2012 | irrelevant | 0 | 0 | This is an in-vitro binding and cellular activity study with no afatinib disposition parameters. |
| popPK | Yokota_2023 | irrelevant | 0 | 0 | no_text gate: only 199 chars of text extracted (&lt; 400) |
| popPK | Yong_2025 | relevant | 9 | 0 | Afatinib PopPK models were constructed in patients, but no numeric PK parameter values are provided in the evidence. |
| popPK | Zhang_2017 | irrelevant | 3 | 6 | Numeric AUC and half-life are reported, but no clearance, volume, or compartmental/population-PK model parameters are provided. |
| popPK | van_2020 | relevant | 8 | 1 | Human PET compartmental modelling of afatinib is reported, but numeric Ki estimates appear only in figures not provided. |
| popPK | van_2022 | irrelevant | 3 | 5 | This is a human PET-tracer comparison, not a study of afatinib disposition as a therapeutic drug; a literature-derived afatinib volume of distribution (2370 L) is stated, while other PKPD values are in supplementary material. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:07 UTC</sub>
