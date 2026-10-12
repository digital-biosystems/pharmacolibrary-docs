<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J05A&quot;,&quot;href&quot;:&quot;atc/J05A.md&quot;},{&quot;label&quot;:&quot;molnupiravir&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Molnupiravir_Bihorel2023_reference&quot;,&quot;label&quot;:&quot;Bihorel_2023_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Gouda2022_reference&quot;,&quot;label&quot;:&quot;Gouda_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Molnupiravir_Lv2025_reference&quot;,&quot;label&quot;:&quot;Lv_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# molnupiravir

- **generic name:** molnupiravir
- **ATC codes:** `J05AB18`
- **DrugBank:** [DB15661](https://go.drugbank.com/drugs/DB15661) · **PubChem:** not captured
- **molar mass:** 329.309 g/mol (C13H19N3O7) — DrugBank
- **groups:** investigational

## About

Molnupiravir is an antiviral drug that was developed for the treatment of COVID-19 infection. Its marketing authorisation application in the European Union was withdrawn, and it remains investigational rather than an approved medicine.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q96376832](https://www.wikidata.org/wiki/Q96376832) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| molnupiravir | parent | 329.309 | C13H19N3O7 | DrugBank | — | Gouda_2022 |
| molnupiravir (MK-4482, EIDD-2801) | metabolite | 329.31 | — | the paper | — | Bihorel_2023 |
| NHC | metabolite | 259.2 | — | the paper | — | Bihorel_2023, Gouda_2022 |
| NHC (β-D-N4-hydroxycytidine) | metabolite | 259.2 | — | the paper | — | Bihorel_2023 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 17:19 | 6:09 | 3/0/0 | 0/1/0 | 0/0/0 | 300,657/20,288 | ollama / glm-5.3-flash | 10 | 0/10 | 10/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.367). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Bihorel_2023_reference](drugs/drug_molnupiravir/Molnupiravir_Bihorel2023_reference.md) | ▶ model + simulator | 2-compartment, oral | 8 (+5 cov.) | Bihorel S et al., Population pharmacokinetics of molnupir…, CPT: pharmacometrics & syst… (2023) | [10.1002/psp4.13031](https://doi.org/10.1002/psp4.13031) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.556). Primary extraction retained.">cross-check: disputed</span> | [Gouda_2022_reference](drugs/drug_molnupiravir/Molnupiravir_Gouda2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Gouda AS et al., A validated LC-MS/MS method for determi…, Journal of chromatography.… (2022) | [10.1016/j.jchromb.2022.123363](https://doi.org/10.1016/j.jchromb.2022.123363) |
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.833). Primary extraction retained.">cross-check: disputed</span> | [Lv_2025_reference](drugs/drug_molnupiravir/Molnupiravir_Lv2025_reference.md) | ▶ model + simulator | 2-compartment, IV | 4 | Lv D et al., Population Pharmacokinetic Modeling Ana…, Drug design, development an… (2025) | [10.2147/DDDT.S517282](https://doi.org/10.2147/DDDT.S517282) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). Primary extraction retained.">cross-check: disputed</span> | [Chawla_2023_hospitalization](drugs/drug_molnupiravir/pd_Chawla_2023_hospitalization.md) | hospitalization (COVID-19 clinical outcome) ← β-D-N4-hydroxycytidine (NHC) · direct Emax (saturable) effect | — | Chawla A et al., Factors Influencing COVID-19 Risk: Insi…, Clinical pharmacology and t… (2023) | [10.1002/cpt.2895](https://doi.org/10.1002/cpt.2895) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 13 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 3  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Chawla_2023 | irrelevant | 3 | 2 | Exposure-response analysis using PK exposures but no disposition parameters (CL, V, ka, half-life) are reported; AUC50 is a pharmacodynamic parameter, not a PK parameter. |
| popPK | Chen_2024 | irrelevant | 0 | 0 | Molnupiravir is only a comparator in an antiviral drug-discovery study; no PK parameters for molnupiravir are reported. |
| popPK | Chi_2026 | irrelevant | 1 | 0 | In-vitro antiviral efficacy study (EC50, viral titres) with no PK disposition parameters for molnupiravir. |
| popPK | Gidari_2022 | irrelevant | 1 | 2 | In-vitro antiviral potency study (EC50/EC90) with only literature-derived Cmax ratios; no PK disposition parameters for molnupiravir. |
| popPK | Jade_2023 | irrelevant | 0 | 0 | Computational docking/virtual screening study; molnupiravir only a comparator with EC50 values, no PK disposition parameters. |
| popPK | Li_2022 | irrelevant | 1 | 1 | This is an in vitro/in vivo antiviral efficacy study; no PK disposition parameters (CL, V, ka, half-life, model) are reported, and the only PK mention (Cmax) refers to a figure not included. |
| popPK | Liu_2025 | irrelevant | 0 | 0 | This is an in-vitro/in-vivo efficacy study of molnupiravir against influenza; no PK disposition parameters (CL, V, ka, half-life, or PK model) for molnupiravir are reported. |
| popPK | Malune_2025 | irrelevant | 0 | 0 | In silico drug-discovery study of RdRp inhibitors; molnupiravir is only mentioned as an approved comparator, with no PK parameters. |
| popPK | Wang_2023 | irrelevant | 0 | 0 | In-vitro antiviral drug-combination study; molnupiravir is only a co-tested antiviral, no PK disposition parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 17:14 UTC</sub>
