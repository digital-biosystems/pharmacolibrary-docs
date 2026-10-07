<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;G03G&quot;,&quot;href&quot;:&quot;atc/G03G.md&quot;},{&quot;label&quot;:&quot;chorionic gonadotrophin&quot;}]"></div>

# chorionic gonadotrophin

- **generic name:** chorionic gonadotrophin
- **ATC codes:** `G03GA01`
- **DrugBank:** [DB09126](https://go.drugbank.com/drugs/DB09126) · **PubChem:** not captured
- **groups:** approved, investigational, vet_approved

## About

Chorionic gonadotrophin is a human hormone used to treat infertility, acting as a gonadotropin that stimulates ovulation. It is an approved medicine and also approved for veterinary use, with some investigational applications.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407172](https://www.wikidata.org/wiki/Q407172) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 08:50 | 1:30 | 0/0/0 | 0/0/0 | 0/0/0 | 132,411/2,891 | einfracz / qwen3.8-27b | 6 | 0/6 | 6/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=chorionic_gonadotrophin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: LHCGR (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 47 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `You_2010.pdf` | You B et al., Predictive values of hCG clearance for…, Annals of oncology : offici… (2010) | popPK | 9 | [10.1093/annonc/mdq033](https://doi.org/10.1093/annonc/mdq033) | [20154304](https://pubmed.ncbi.nlm.nih.gov/20154304) | The study explicitly models hCG clearance using a population PK approach and provides quantitative values for hCG clearance (CL) and the elimination rate constant derived from the monoexponential fit. |
| `Stitely_2014.pdf` | Stitely ML et al., Log-linear human chorionic gonadotropin…, Archives of gynecology and… (2014) | popPK | 8 | [10.1007/s00404-013-2950-5](https://doi.org/10.1007/s00404-013-2950-5) | [23843154](https://pubmed.ncbi.nlm.nih.gov/23843154) | The study reports a quantitative half-life (146.3 h) for hCG elimination in a specific clinical population, consistent with a two-compartment model. |
| `Trinchard-Lugan_2002.pdf` | Trinchard-Lugan I et al., Pharmacokinetics and pharmacodynamics o…, Reproductive biomedicine on… (2002) | popPK | 5 | [10.1016/s1472-6483(10)61927-x](https://doi.org/10.1016/s1472-6483(10)61927-x) | [12470572](https://pubmed.ncbi.nlm.nih.gov/12470572) | The abstract describes PK models (bi-exponential, one-compartment) and qualitative findings (bioavailability %, fold-change) but does not list specific numeric parameter values (CL, V, T1/2) in the provided evidence. |

<sub>queue written 2026-10-07T08:49:29.151188+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Barnhart_2016 | irrelevant | 0 | 0 | The study analyzes clinical diagnostic trends and variability in hCG rise for pregnancy viability, not pharmacokinetic disposition parameters (CL, V, etc.) following exogenous drug administration. |
| popPK | Bobdiwala_2019 | irrelevant | 0 | 0 | This is a diagnostic review focusing on the use of hCG levels for predicting ectopic pregnancy, not a pharmacokinetic study characterizing the disposition of chorionic gonadotrophin as a drug. |
| popPK | Butts_2013 | irrelevant | 1 | 1 | The study analyzes serial hCG declines in a clinical context to diagnose pregnancy outcomes, rather than performing a pharmacokinetic study of exogenous chorionic gonadotrophin administration to derive parameters like clearance or volume. |
| popPK | Byambaragchaa_2021 | irrelevant | 0 | 0 | The study investigates the structure-activity relationship of eCG glycosylation sites in vitro (cellular biology), not pharmacokinetic parameters like clearance or volume of distribution. |
| popPK | Byambaragchaa_2022 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of receptor signal transduction (cAMP response) using recombinant eCG, reporting no pharmacokinetic disposition parameters (CL, V, t1/2) for the drug. |
| popPK | Byambaragchaa_2024 | irrelevant | 0 | 0 | The paper describes the production and in-vitro biological activity of recombinant eel LH/FSH analogs using a chorionic gonadotropin peptide as a linker, but does not report pharmacokinetic disposition parameters (CL, V, t1/2) for chorionic gonadotropin itself. |
| popPK | Byambaragchaa_2024_2 | irrelevant | 0 | 0 | The study focuses on the in vitro production and biological activity (cAMP/ERK signaling) of a recombinant eel FSH analog, not the pharmacokinetics of chorionic gonadotrophin. |
| popPK | Clift_2026 | irrelevant | 0 | 0 | The study evaluates the clinical safety and quality of life outcomes of testosterone therapy (with hCG as an adjunct) in men, but does not report any pharmacokinetic parameters (such as clearance, volume, or half-life) for chorionic gonadotrophin. |
| popPK | Hermsteiner_1999 | irrelevant | 0 | 0 | The study examines the pharmacodynamic effect (vasodilation) of hCG in rat arteries, not its pharmacokinetic disposition parameters. |
| popPK | Hermsteiner_2002 | irrelevant | 0 | 0 | The study investigates the vascular physiological effects of hCG in rat arteries, not its pharmacokinetic disposition parameters. |
| popPK | Latif_2015 | irrelevant | 0 | 0 | The study focuses on small molecule agonists for the thyrotropin receptor (MS437/MS438) and does not report pharmacokinetic parameters for chorionic gonadotropin, which is only mentioned as a comparator receptor. |
| popPK | Richert_1977 | irrelevant | 0 | 0 | The paper describes in-vitro receptor binding of hCG to bacteria, which is a mechanistic/biochemical study, not a pharmacokinetic disposition study with quantitative PK parameters like clearance or volume. |
| popPK | Rossignolo_2023 | irrelevant | 0 | 0 | The study evaluates reproductive outcomes (conception, pregnancy rates) in beef cattle after hCG administration, not pharmacokinetic disposition parameters (CL, V, t1/2). |
| popPK | Trinchard-Lugan_2002 | irrelevant | 5 | 0 | The abstract describes PK models (bi-exponential, one-compartment) and qualitative findings (bioavailability %, fold-change) but does not list specific numeric parameter values (CL, V, T1/2) in the provided evidence. |
| popPK | Weber_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of hCG's effect on glucose oxidation in porcine granulosa cells, not a pharmacokinetic study of drug disposition. |
| popPK | You_2010_2 | irrelevant | 0 | 0 | The paper models the pharmacokinetic decline of hCG as a tumor marker (biomarker) for disease response, not the disposition of chorionic gonadotrophin as a therapeutic drug administered for clinical effect. |
| popPK | de_2024 | irrelevant | 0 | 0 | The paper models longitudinal biomarker levels (beta-HCG) for miscarriage prediction, not the pharmacokinetic disposition parameters (CL, V, ka) of the drug chorionic gonadotrophin after administration. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
