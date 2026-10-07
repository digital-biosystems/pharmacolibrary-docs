<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;asciminib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Asciminib_Darstein2025_reference&quot;,&quot;label&quot;:&quot;Darstein_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_asciminib/Asciminib_Darstein2025_reference.md&quot;,&quot;status&quot;:&quot;extracted&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# asciminib

- **generic name:** asciminib
- **ATC codes:** `L01EA06`
- **DrugBank:** [DB12597](https://go.drugbank.com/drugs/DB12597) · **PubChem:** [CID 72165228](https://pubchem.ncbi.nlm.nih.gov/compound/72165228)
- **molar mass:** 449.84 g/mol (C20H18ClF2N5O3) — DrugBank
- **groups:** approved, investigational

## About

Asciminib is a BCR-ABL tyrosine kinase inhibitor used to treat chronic myeloid leukemia. It is authorised in the European Union for BCR-ABL positive chronic myelogenous leukemia.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27074535](https://www.wikidata.org/wiki/Q27074535) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| asciminib | parent | 449.84 | C20H18ClF2N5O3 | DrugBank | [72165228](https://pubchem.ncbi.nlm.nih.gov/compound/72165228) | Darstein_2025 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 21:32 | 1:43 | 1/0/0 | 1/0/0 | 0/0/0 | 33,413/8,256 | openai / gpt-6-luna | 2 | 1/1 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Darstein_2025_reference](drugs/drug_asciminib/Asciminib_Darstein2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Darstein C et al., Population pharmacokinetic modeling of…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04755-y](https://doi.org/10.1007/s00280-025-04755-y) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Sy_2025_MMR](drugs/drug_asciminib/pd_Sy_2025_MMR.md) | week-48 major molecular response ← asciminib · direct linear effect | — | Sy SKB et al., Exposure-response analysis of asciminib…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04806-4](https://doi.org/10.1007/s00280-025-04806-4) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Sy_2025_worsening_event_for_grade_3_lipase_increase](drugs/drug_asciminib/pd_Sy_2025_worsening_event_for_grade_3_lipase_increase.md) | worsening event for grade ≥ 3 lipase increase ← asciminib · direct linear effect | — | Sy SKB et al., Exposure-response analysis of asciminib…, Cancer chemotherapy and pha… (2025) | [10.1007/s00280-025-04806-4](https://doi.org/10.1007/s00280-025-04806-4) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=asciminib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate, `ABCG2` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | `UGT2B7` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C9` inhibitor, `CYP3A4` inhibitor/substrate, `SLC22A1` inhibitor, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor, `UGT1A1` inhibitor, `UGT2B17` substrate, `UGT2B7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor, `UGT2B17` substrate, `UGT2B7` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: ABL1 (allosteric modulator), ABL1 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 8 matched, 8 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 1  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Darstein_2025.pdf` | Darstein C et al., Population pharmacokinetic modeling of…, Cancer chemotherapy and pha… (2025) | popPK | 10 | [10.1007/s00280-025-04755-y](https://doi.org/10.1007/s00280-025-04755-y) | [40019625](https://pubmed.ncbi.nlm.nih.gov/40019625) | The human popPK model reports numeric apparent clearance and steady-state volume of distribution for asciminib. |
| `Li_2022.pdf` | Li YF et al., Population Pharmacokinetics of Ascimini…, Clinical pharmacokinetics (2022) | popPK | 10 | [10.1007/s40262-022-01148-9](https://doi.org/10.1007/s40262-022-01148-9) | [35764773](https://pubmed.ncbi.nlm.nih.gov/35764773) | This is a human asciminib population-PK study, but numeric disposition parameter values are not present in the evidence. |

<sub>queue written 2026-10-06T21:31:26.300469+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Combes_2022 | irrelevant | 2 | 0 | The model describes leukemic cell populations and exposure-efficacy, with no asciminib disposition parameters or numeric values reported. |
| popPK | Combes_2024 | relevant | 9 | 2 | Human PopPK analysis reports AUC and relative Cmax/Cmin, but detailed disposition-model values are referred to a prior publication. |
| popPK | Li_2022 | relevant | 10 | 0 | This is a human asciminib population-PK study, but numeric disposition parameter values are not present in the evidence. |
| popPK | Li_2022_2 | relevant | 9 | 1 | The evidence indicates a population-PK model with CL and ka, but provides no numeric parameter values. |
| popPK | Sy_2025 | irrelevant | 2 | 0 | The study reports exposure-response relationships but no numeric disposition parameters for asciminib. |
| popPK | Sy_2025_2 | irrelevant | 0 | 0 | The study models nilotinib, and reports no quantitative pharmacokinetic parameters for asciminib. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 21:31 UTC</sub>
