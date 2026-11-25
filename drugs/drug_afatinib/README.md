<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01E&quot;,&quot;href&quot;:&quot;atc/L01E.md&quot;},{&quot;label&quot;:&quot;afatinib&quot;}]"></div>

# afatinib

- **generic name:** afatinib
- **ATC codes:** `L01EB03`, `L01XE13`
- **DrugBank:** [DB08916](https://go.drugbank.com/drugs/DB08916) · **PubChem:** [CID 10184653](https://pubchem.ncbi.nlm.nih.gov/compound/10184653)
- **molar mass:** 485.938 g/mol (C24H25ClFN5O3) — DrugBank
- **groups:** approved, investigational

## About

Afatinib is a tyrosine kinase inhibitor used for non-small cell lung cancer. It is administered orally as tablets. It is authorised in the European Union and included in the World Health Organization essential medicines list.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q4688818](https://www.wikidata.org/wiki/Q4688818), [Wikipedia](https://en.wikipedia.org/wiki/Afatinib?oldid=1378182608) (CC BY-SA 4.0), DrugBank's routes and dosage forms, the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| afatinib | parent | 485.938 | C24H25ClFN5O3 | DrugBank | [10184653](https://pubchem.ncbi.nlm.nih.gov/compound/10184653) | Freiwald_2014, Nakao_2019 |

## Parameters across studies

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Nakao_2019 · CL</text><circle cx="295.4" cy="30.0" r="4" fill="#ef6c00"><title>Nakao_2019 · CL: 20 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Freiwald_2014 · CL</text><circle cx="415.3" cy="46.0" r="4" fill="#ef6c00"><title>Freiwald_2014 · CL: 44.04 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">100</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Nakao_2019 · V</text><circle cx="347.6" cy="30.0" r="4" fill="#ef6c00"><title>Nakao_2019 · V: 795.8 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Freiwald_2014 · V</text><circle cx="430.6" cy="46.0" r="4" fill="#ef6c00"><title>Freiwald_2014 · V: 2370 L</title></circle></svg></div>

<sub>One dot per record, coloured by status; values converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: C6_cl_magnitude failed (ratio None)</sub> | [Freiwald_2014_reference](drugs/drug_afatinib/Afatinib_Freiwald2014_reference.md) | — | 1-compartment (no model) | 2 | Freiwald M et al., Population pharmacokinetics of afatinib…, Cancer chemotherapy and pha… (2014) | [10.1007/s00280-014-2403-2](https://doi.org/10.1007/s00280-014-2403-2) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub><br><sub>blocking: model_quarantined: Cl, Vd, Tlag left at base-class defaults</sub> | [Nakao_2019_reference](drugs/drug_afatinib/Afatinib_Nakao2019_reference.md) | held back | 1-compartment, oral | 3 | Nakao K et al., Population pharmacokinetics of afatinib…, Scientific reports (2019) | [10.1038/s41598-019-54804-9](https://doi.org/10.1038/s41598-019-54804-9) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Zhang_2017_pEGFR](drugs/drug_afatinib/pd_Zhang_2017_pEGFR.md) | expression of pEGFR (Tyr1068) in brain tumor foci biomarker turnover ← afatinib | — | Zhang SR et al., Efficacy of afatinib, an irreversible E…, Acta pharmacologica Sinica (2017) | [10.1038/aps.2016.107](https://doi.org/10.1038/aps.2016.107) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Yokota_2023_dose_reduction_or_withdrawal](drugs/drug_afatinib/pd_Yokota_2023_dose_reduction_or_withdrawal.md) | dose reduction or withdrawal ← afatinib AUC0-24 · categorical (graded) response model | — | Yokota H et al., Effects of polymorphisms in pregnane X…, Cancer chemotherapy and pha… (2023) | [10.1007/s00280-023-04569-w](https://doi.org/10.1007/s00280-023-04569-w) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-23 17:19 | 0:03 | 2/0/0 | 2/0/0 | 0/0/0 | 3,681/175 | einfracz / qwen3.8-27b | 7 | 2/5 | 6/1 | 0 |

## Coverage

- **PubMed hits:** 12 matched, 12 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 2  ·  extracted 0  ·  needs review 2  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Yong_2025.pdf` | Yong L et al., Modeling exposure-driven adverse events…, Acta pharmacologica Sinica (2025) | popPK | 7 | [10.1038/s41401-025-01573-z](https://doi.org/10.1038/s41401-025-01573-z) | [40481213](https://pubmed.ncbi.nlm.nih.gov/40481213) | The study constructs PopPK models for afatinib (along with other EGFR TKIs) in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract/evidence and are likely in the main text or supplementary materials. |

<sub>queue written 2026-11-23 17:19 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | DCunha_2019 | not_relevant | 0 | 10 | The study investigates drug-drug interactions (nilotinib's effect on afatinib PK) mediated by transporter inhibition, not the effect of a genetic variant/genotype/phenotype on pharmacokinetics or pharmacodynamics. |
| PGx | Freiwald_2014 | not_relevant | 0 | 0 | The paper investigates demographic and clinical covariates (weight, organ function, etc.) but does not report any genetic variants or pharmacogenomic effects on afatinib pharmacokinetics. |
| popPK | Haaland_2014 | irrelevant | 0 | 0 | This is a clinical efficacy meta-analysis focusing on survival and response rates, containing no pharmacokinetic disposition parameters (CL, V, ka) for afatinib. |
| PGx | Haaland_2014 | not_relevant | 0 | 0 | The paper is a meta-analysis of clinical efficacy outcomes (PFS, ORR) and does not report pharmacogenomic associations with PK/PD parameters. |
| popPK | Hotta_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of edoxaban, while afatinib is only a co-administered comparator. |
| PGx | Hotta_2021 | not_relevant | 0 | 0 | The paper investigates the drug-drug interaction between edoxaban and EGFR-TKIs (including afatinib) on edoxaban's PK, but does not report any pharmacogenomic effect (gene variant/genotype) on afatinib's PK or PD parameters. |
| popPK | Niebecker_2019 | irrelevant | 1 | 0 | This is an exposure–adverse-event model, not a disposition-PK analysis, and afatinib PK parameters are not reported in the provided evidence. |
| popPK | Solca_2012 | irrelevant | 0 | 0 | The paper reports in-vitro target binding and cellular activity, not pharmacokinetic parameters. |
| PGx | Solca_2012 | not_relevant | 0 | 0 | The paper describes in vitro binding properties and cellular activity of afatinib, but does not report pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters in humans. |
| popPK | Yokota_2023 | irrelevant | 0 | 0 | no_text gate: only 199 chars of text extracted (&lt; 400) |
| PGx | Yokota_2023 | not_relevant | 10 | 0 | The provided text only lists a supplementary figure title regarding ROC curves for afatinib AUC, with no data, genotype information, or effect sizes present in the snippet. |
| popPK | Yong_2025 | relevant | 7 | 2 | The study constructs PopPK models for afatinib (along with other EGFR TKIs) in humans, but specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract/evidence and are likely in the main text or supplementary materials. |
| PGx | Yong_2025 | not_relevant | 0 | 0 | The paper focuses on exposure-driven adverse events and population PK modeling but does not report pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Zhang_2017 | not_relevant | 0 | 0 | The study investigates pharmacokinetics and pharmacodynamics of afatinib in a mouse model but does not analyze the impact of genetic variants or genotypes on these parameters. |
| popPK | van_2020 | relevant | 8 | 1 | Human PET compartmental modelling of afatinib is reported, but numeric Ki estimates appear only in figures not provided. |
| popPK | van_2022 | irrelevant | 3 | 5 | This is a human PET-tracer comparison, not a study of afatinib disposition as a therapeutic drug; a literature-derived afatinib volume of distribution (2370 L) is stated, while other PKPD values are in supplementary material. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bafatinib%5D&body=Drug%3A%20afatinib%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_afatinib/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-23 17:15 UTC</sub>
