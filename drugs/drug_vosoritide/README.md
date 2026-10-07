<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M05B&quot;,&quot;href&quot;:&quot;atc/M05B.md&quot;},{&quot;label&quot;:&quot;vosoritide&quot;}]"></div>

# vosoritide

- **generic name:** vosoritide
- **ATC codes:** `M05BX07`
- **DrugBank:** [DB11928](https://go.drugbank.com/drugs/DB11928) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Vosoritide is a peptide drug used to treat achondroplasia, a condition affecting bone growth. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q21098976](https://www.wikidata.org/wiki/Q21098976) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| vosoritide | parent | 4102.78 | C176H290N56O51S3 | PubChem | [119058036](https://pubchem.ncbi.nlm.nih.gov/compound/119058036) | Qi_2024 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:24 | 1:12 | 0/2/0 | 1/0/0 | 0/0/0 | 93,480/11,578 | einfracz / qwen3.8-27b | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Qi_2024_median](drugs/drug_vosoritide/Vosoritide_Qi2024_median.md) | — | 1-compartment (no model) | 4 (+2 cov.) | Qi Y et al., Development of a Weight-Band Dosing App…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01371-6](https://doi.org/10.1007/s40262-024-01371-6) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Qi_2024_typical_value](drugs/drug_vosoritide/Vosoritide_Qi2024_typical_value.md) | — | 1-compartment (no model) | 4 (+2 cov.) | Qi Y et al., Development of a Weight-Band Dosing App…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01371-6](https://doi.org/10.1007/s40262-024-01371-6) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2022_CXM](drugs/drug_vosoritide/pd_Chan_2022_CXM.md) | mean CXM ← vosoritide · direct sigmoid Emax (Hill) effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2022_DBP](drugs/drug_vosoritide/pd_Chan_2022_DBP.md) | maximum decrease from predose diastolic blood pressure ← vosoritide · direct linear effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2022_HR](drugs/drug_vosoritide/pd_Chan_2022_HR.md) | maximum increase from predose heart rate ← vosoritide · direct linear effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2022_SBP](drugs/drug_vosoritide/pd_Chan_2022_SBP.md) | maximum decrease from predose systolic blood pressure ← vosoritide · direct linear effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2022_cGMP](drugs/drug_vosoritide/pd_Chan_2022_cGMP.md) | maximum increase in urine cGMP/Cr ← vosoritide · direct sigmoid Emax (Hill) effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Chan_2022_cGMP_2](drugs/drug_vosoritide/pd_Chan_2022_cGMP_2.md) | maximum increase in urine cGMP/Cr ← vosoritide · direct Emax (saturable) effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Chan_2022_AGV](drugs/drug_vosoritide/pd_Chan_2022_AGV.md) | annualized growth velocity ← vosoritide · direct sigmoid Emax (Hill) effect | — | Chan ML et al., Pharmacokinetics and Exposure-Response…, Clinical pharmacokinetics (2022) | [10.1007/s40262-021-01059-1](https://doi.org/10.1007/s40262-021-01059-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=vosoritide) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: NPR2 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 5 matched, 5 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_1 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Galetaki_2026.pdf` | Galetaki D et al., Phase 2 Trial of Vosoritide Use in Pati…, Hormone research in paediat… (2026) | popPK | 5 | [10.1159/000542102](https://doi.org/10.1159/000542102) | [39427650](https://pubmed.ncbi.nlm.nih.gov/39427650) | The paper is a PK/PD analysis but reports qualitative comparisons ("similar to those previously reported") and correlation coefficients rather than specific quantitative PK disposition parameters like CL, V, or half-life values in the provided text. |

<sub>queue written 2026-10-07T03:23:30.785792+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Galetaki_2026 | irrelevant | 5 | 1 | The paper is a PK/PD analysis but reports qualitative comparisons ("similar to those previously reported") and correlation coefficients rather than specific quantitative PK disposition parameters like CL, V, or half-life values in the provided text. |
| popPK | Reincke_2026 | irrelevant | 0 | 0 | The study evaluates muscle function and growth outcomes, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:23 UTC</sub>
