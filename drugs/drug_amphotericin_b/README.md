<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A01A&quot;,&quot;href&quot;:&quot;atc/A01A.md&quot;},{&quot;label&quot;:&quot;amphotericin B&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;AmphotericinB_Stott2022_reference&quot;,&quot;label&quot;:&quot;Stott_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# amphotericin B

- **generic name:** amphotericin B
- **ATC codes:** `A01AB04`, `A07AA07`, `G01AA03`, `J02AA01`
- **DrugBank:** [DB00681](https://go.drugbank.com/drugs/DB00681) · **PubChem:** [CID 5280965](https://pubchem.ncbi.nlm.nih.gov/compound/5280965)
- **molar mass:** 924.079 g/mol (C47H73NO17) — DrugBank
- **groups:** approved, investigational

## About

Amphotericin B is an antifungal antibiotic used to treat serious fungal infections such as aspergillosis, candidiasis, cryptococcosis, histoplasmosis, and blastomycosis, as well as visceral leishmaniasis. It is widely used and appears on the WHO list of essential medicines, given systemically and also locally in oral, intestinal, and gynecological preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412223](https://www.wikidata.org/wiki/Q412223) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| amphotericin_b (liposomal amphotericin B) | metabolite | 924.079 | C47H73NO17 | DrugBank | [5280965](https://pubchem.ncbi.nlm.nih.gov/compound/5280965) | Stott_2018, Stott_2022 |

## Start here

> **Stott_2022_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> adults with HIV-associated cryptococcal meningoencephalitis. [Run it in the simulator](drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md?tab=Simulation) · [record](drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.416 | L/h | 0.416 L/h | adults with HIV-associated cryptococcal meningoencephalitis |  | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Stott_2022_reference](drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md) |
| CL | CL | 1.8 | L/h | 30 ml/min | adults with disseminated histoplasmosis | 2 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Atkinson_1978_reference](drugs/drug_amphotericin_b/AmphotericinB_Atkinson1978_reference.md) |
| V | V | 4.566 | L | 4.566 L | adults with HIV-associated cryptococcal meningoencephalitis |  | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Stott_2022_reference](drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md) |
| V | V | — | L | 80 % of the total distribution volume of 4 liters/kg | adults with disseminated histoplasmosis | 2 | human | <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span> | [Atkinson_1978_reference](drugs/drug_amphotericin_b/AmphotericinB_Atkinson1978_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. — the reported unit did not convert; the value is listed as reported. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="365.0" y1="18" x2="365.0" y2="58" stroke="#ddd"/><text x="365.0" y="72" font-size="10" text-anchor="middle">1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10</text><text x="184" y="34.0" font-size="11" text-anchor="end">Stott_2022 · CL</text><circle cx="298.3" cy="30.0" r="4" fill="#78909c"><title>Stott_2022 · CL: 0.416 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Atkinson_1978 · CL</text><circle cx="409.7" cy="46.0" r="4" fill="#ef6c00"><title>Atkinson_1978 · CL: 1.8 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Stott_2022_reference](drugs/drug_amphotericin_b/AmphotericinB_Stott2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Stott KE et al., Population pharmacokinetics of liposoma…, The Journal of antimicrobia… (2022) | [10.1093/jac/dkac389](https://doi.org/10.1093/jac/dkac389) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Needs review</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q61 — no SI value to build from</sub> | [Atkinson_1978_reference](drugs/drug_amphotericin_b/AmphotericinB_Atkinson1978_reference.md) | — | 1-compartment (no model) | 3 | Atkinson AJ et al., Amphotericin B pharmacokinetics in huma…, Antimicrobial agents and ch… (1978) | [10.1128/AAC.13.2.271](https://doi.org/10.1128/AAC.13.2.271) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Stott_2018_reference](drugs/drug_amphotericin_b/AmphotericinB_Stott2018_reference.md) | — | 1-compartment (no model) | 3 | Stott KE et al., Population Pharmacokinetic Model and Me…, Antimicrobial agents and ch… (2018) | [10.1128/AAC.02526-17](https://doi.org/10.1128/AAC.02526-17) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-03 23:39 | 3:01 | 1/1/1 | 0/0/0 | 0/0/0 | 40,071/8,287 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 151 matched, 20 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 3
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Han_2026.pdf` | Han S et al., Pharmacokinetic Equivalence of Amphosom, Clinical therapeutics (2026) | popPK | 10 | [10.1016/j.clinthera.2025.12.009](https://doi.org/10.1016/j.clinthera.2025.12.009) | [41513548](https://pubmed.ncbi.nlm.nih.gov/41513548) | The study reports a population PK model for amphotericin B, but specific numeric parameter values (CL, V, Q) are not present in the provided abstract text. |
| `Lestner_2016.pdf` | Lestner JM et al., Population Pharmacokinetics of Liposoma…, Antimicrobial agents and ch… (2016) | popPK | 10 | [10.1128/AAC.01427-16](https://doi.org/10.1128/AAC.01427-16) | [27697762](https://pubmed.ncbi.nlm.nih.gov/27697762) | The paper describes a population PK model for liposomal amphotericin B in children, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided abstract text. |
| `Smith_2024.pdf` | Smith JS et al., Pharmacokinetics of intraarticular lipo…, Journal of veterinary pharm… (2024) | popPK | 10 | [10.1111/jvp.13442](https://doi.org/10.1111/jvp.13442) | [38557931](https://pubmed.ncbi.nlm.nih.gov/38557931) | The study reports quantitative non-compartmental PK parameters (Cmax, tmax, t1/2, MRT, Vd, AUC) for amphotericin B in goats. |
| `Stott_2018.pdf` | Stott KE et al., Population Pharmacokinetic Model and Me…, Antimicrobial agents and ch… (2018) | popPK | 10 | [10.1128/AAC.02526-17](https://doi.org/10.1128/AAC.02526-17) | [29735567](https://pubmed.ncbi.nlm.nih.gov/29735567) | The paper reports a population PK model for amphotericin B deoxycholate with explicit numeric values for clearance, volume, and intercompartmental rate constants in the abstract. |
| `Stott_2022.pdf` | Stott KE et al., Population pharmacokinetics of liposoma…, The Journal of antimicrobia… (2022) | popPK | 10 | [10.1093/jac/dkac389](https://doi.org/10.1093/jac/dkac389) | [36411251](https://pubmed.ncbi.nlm.nih.gov/36411251) | The paper reports a population PK model for liposomal amphotericin B with explicit numeric values for clearance, volume of distribution, and intercompartmental clearances in the abstract. |

<sub>queue written 2026-10-03T23:37:07.594286+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Dallalzadeh_2024 | irrelevant | 0 | 0 | The study is a clinical outcome analysis of a treatment regimen and does not report any pharmacokinetic parameters for amphotericin B. |
| popPK | Han_2026 | relevant | 10 | 2 | The study reports a population PK model for amphotericin B, but specific numeric parameter values (CL, V, Q) are not present in the provided abstract text. |
| popPK | Heidari-Kharaji_2024 | irrelevant | 0 | 0 | The study evaluates the anti-leishmanial efficacy of amphotericin B nanoparticles in vitro and in mice, reporting IC50/EC50 and immune markers, but does not report any pharmacokinetic parameters (CL, V, t1/2, etc.). |
| popPK | Leroux_2021 | irrelevant | 2 | 0 | This is a review article summarizing existing studies and does not report original quantitative pharmacokinetic parameter values for amphotericin B. |
| popPK | Lestner_2016 | relevant | 10 | 2 | The paper describes a population PK model for liposomal amphotericin B in children, but the specific numeric parameter estimates (CL, V, etc.) are not present in the provided abstract text. |
| popPK | Scott_2020 | irrelevant | 2 | 0 | This is a review article summarizing pharmacokinetic data for antifungal agents in neonates, but it does not provide original quantitative disposition parameters or specific numeric values for amphotericin B in the provided evidence. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-03 23:37 UTC</sub>
