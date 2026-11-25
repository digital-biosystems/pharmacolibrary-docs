<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01F&quot;,&quot;href&quot;:&quot;atc/L01F.md&quot;},{&quot;label&quot;:&quot;inotuzumab ozogamicin&quot;}]"></div>

# inotuzumab ozogamicin

- **generic name:** inotuzumab ozogamicin
- **ATC codes:** `L01FB01`
- **DrugBank:** [DB05889](https://go.drugbank.com/drugs/DB05889) · **PubChem:** none
- **groups:** approved, investigational

## About

It is given by intravenous infusion as a reconstituted solution. It is authorised in the European Union for use in precursor cell lymphoblastic leukemia.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3799041](https://www.wikidata.org/wiki/Q3799041), [Wikipedia](https://en.wikipedia.org/wiki/Inotuzumab_ozogamicin?oldid=1374857916) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Wu_2024 · V1</text><circle cx="474.3" cy="30.0" r="4" fill="#ef6c00"><title>Wu_2024 · V1: 6.49 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Garrett_2019 · V1</text><circle cx="479.1" cy="46.0" r="4" fill="#ef6c00"><title>Garrett_2019 · V1: 6.7 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C1_half_life_beta failed (ratio 0.2622)</sub> | [Garrett_2019_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Garrett2019_reference.md) | — | 2-compartment (no model) | 4 | Garrett M et al., Population pharmacokinetics of inotuzum…, Journal of pharmacokinetics… (2019) | [10.1007/s10928-018-9614-9](https://doi.org/10.1007/s10928-018-9614-9) |
| <span class="pk-rf" hidden data-species="human" data-age="mixed" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Wu_2024_reference](drugs/drug_inotuzumab_ozogamicin/InotuzumabOzogamicin_Wu2024_reference.md) | — | 2-compartment (no model) | 4 | Wu JH et al., Population Pharmacokinetics of Inotuzum…, Clinical pharmacokinetics (2024) | [10.1007/s40262-024-01386-z](https://doi.org/10.1007/s40262-024-01386-z) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Luu_2016_platelet](drugs/drug_inotuzumab_ozogamicin/pd_Luu_2016_platelet.md) | platelet ← inotuzumab ozogamicin · indirect response — drug inhibits the production of platelet | — | Luu KT et al., A method for optimizing dosage regimens…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-3118-3](https://doi.org/10.1007/s00280-016-3118-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Luu_2016_tumor_size](drugs/drug_inotuzumab_ozogamicin/pd_Luu_2016_tumor_size.md) | tumor size ← inotuzumab ozogamicin · inhibition effect | — | Luu KT et al., A method for optimizing dosage regimens…, Cancer chemotherapy and pha… (2016) | [10.1007/s00280-016-3118-3](https://doi.org/10.1007/s00280-016-3118-3) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Hibma_2019_QTcF](drugs/drug_inotuzumab_ozogamicin/pd_Hibma_2019_QTcF.md) | QT interval corrected using Fridericia's formula (QTcF) ← inotuzumab_ozogamicin · direct linear effect | — | Hibma JE et al., Effect of inotuzumab ozogamicin on the…, British journal of clinical… (2019) | [10.1111/bcp.13832](https://doi.org/10.1111/bcp.13832) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Hibma_2019_QTcS](drugs/drug_inotuzumab_ozogamicin/pd_Hibma_2019_QTcS.md) | QT interval corrected using population-specific formula (QTcS) ← inotuzumab_ozogamicin · direct linear effect | — | Hibma JE et al., Effect of inotuzumab ozogamicin on the…, British journal of clinical… (2019) | [10.1111/bcp.13832](https://doi.org/10.1111/bcp.13832) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 22:30 | 0:29 | 2/0/0 | 2/2/0 | 0/0/0 | 6,136/1,899 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Luu_2016.pdf` | Luu KT et al., A method for optimizing dosage regimens…, Cancer chemotherapy and pha… (2016) | popPK | 7 | [10.1007/s00280-016-3118-3](https://doi.org/10.1007/s00280-016-3118-3) | [27491482](https://pubmed.ncbi.nlm.nih.gov/27491482) | The paper describes a two-compartment PK model for inotuzumab ozogamicin in humans and aims to optimize dosing, but the specific quantitative parameter values (CL, V, etc.) are not provided in the extracted text. |

<sub>queue written 2026-11-23 22:29 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Betts_2016 | relevant | 8 | 1 | The paper describes a PK/PD model for inotuzumab ozogamicin but does not contain explicit numeric parameter values (CL, V, etc.) in the provided evidence, which only summarizes the model structure and conclusions. |
| PGx | Betts_2016 | not_relevant | 0 | 0 | The paper describes a preclinical-to-clinical PK/PD modeling study but does not report any pharmacogenomic analysis or gene variant effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hedrich_2018 | irrelevant | 0 | 0 | The paper is a review article discussing general antibody-drug conjugate pharmacokinetics and does not report specific quantitative disposition parameters for inotuzumab ozogamicin. |
| PGx | Hedrich_2018 | not_relevant | 0 | 0 | The paper is a general review of antibody-drug conjugate PK/PD modeling and does not discuss pharmacogenomic variants or their effects on inotuzumab ozogamicin. |
| popPK | Hibma_2019 | irrelevant | 2 | 2 | The study is a QTc-concentration exposure-response analysis, not a population PK parameter estimation study (no CL, V, ka, or t1/2 reported). |
| PGx | Hibma_2019 | not_relevant | 0 | 0 | The study characterizes the concentration-QTc relationship for inotuzumab ozogamicin but does not investigate gene variants or genotypes. |
| popPK | Kantarjian_2018 | irrelevant | 0 | 0 | The paper reports patient-reported outcomes and quality of life data, not pharmacokinetic parameters. |
| PGx | Kantarjian_2018 | not_relevant | 0 | 0 | The paper reports patient-reported outcomes (quality of life) and does not discuss gene variants or pharmacokinetic/pharmacodynamic parameters. |
| popPK | Luu_2016 | relevant | 7 | 2 | The paper describes a two-compartment PK model for inotuzumab ozogamicin in humans and aims to optimize dosing, but the specific quantitative parameter values (CL, V, etc.) are not provided in the extracted text. |
| PGx | Luu_2016 | not_relevant | 0 | 0 | The paper focuses on pharmacokinetic modeling and dose optimization based on safety/efficacy, with no mention of genetic variants or pharmacogenomic effects. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Binotuzumab_ozogamicin%5D&body=Drug%3A%20inotuzumab_ozogamicin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_inotuzumab_ozogamicin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 12:44 UTC</sub>
