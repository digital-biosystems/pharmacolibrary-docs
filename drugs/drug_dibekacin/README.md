<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01G&quot;,&quot;href&quot;:&quot;atc/J01G.md&quot;},{&quot;label&quot;:&quot;dibekacin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Dibekacin_Arancibia1995_reference&quot;,&quot;label&quot;:&quot;Arancibia_1995_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# dibekacin

- **generic name:** dibekacin
- **ATC codes:** `J01GB09`, `S01AA29`
- **DrugBank:** [DB13270](https://go.drugbank.com/drugs/DB13270) · **PubChem:** not captured
- **molar mass:** 451.521 g/mol (C18H37N5O8) — DrugBank
- **groups:** approved

## About

Dibekacin is an aminoglycoside antibiotic, related to kanamycin, used to treat bacterial infections. It is an approved medicine and is used mainly in Japan and some other Asian countries, given by injection or as eye drops.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q3706873](https://www.wikidata.org/wiki/Q3706873) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dibekacin | parent | 451.521 | C18H37N5O8 | DrugBank | — | Arancibia_1987, Arancibia_1995 |

## Start here

> **Arancibia_1995_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> healthy volunteers and patients with renal failure, n = 13. [Run it in the simulator](drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md?tab=Simulation) · [record](drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 0.87 | L/h | 0.87 L/h | healthy volunteers and patients with renal failure | &gt;= 3000: The content exceeds the maximum length limit. | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Arancibia_1987_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1987_reference.md) |
| CL | CL | 0.882 | L/h | 0.882 L/h | healthy volunteers and patients with renal failure | 13 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Arancibia_1995_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md) |
| V | V | 11.34 ‡ | L | 0.162 l/kg | healthy volunteers and patients with renal failure | 13 | human | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Arancibia_1995_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">0.1</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">1</text><text x="184" y="34.0" font-size="11" text-anchor="end">Arancibia_1987 · CL</text><circle cx="518.8" cy="30.0" r="4" fill="#ef6c00"><title>Arancibia_1987 · CL: 0.87 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Arancibia_1995 · CL</text><circle cx="520.9" cy="46.0" r="4" fill="#2e7d32"><title>Arancibia_1995 · CL: 0.882 L/h</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> | [Arancibia_1995_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1995_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Arancibia A et al., Disposition kinetics of dibekacin in pa…, International journal of cl… (1995) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Arancibia_1987_reference](drugs/drug_dibekacin/Dibekacin_Arancibia1987_reference.md) | — | 1-compartment (no model) | 3 | Arancibia A et al., Disposition kinetics of dibekacin in no…, International journal of cl… (1987) | — |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Campillo_1980_reference](drugs/drug_dibekacin/Dibekacin_Campillo1980_reference.md) | — | 1-compartment (no model) | 0 | Campillo JA et al., Disposition of Dibekacin in patients un…, European journal of clinica… (1980) | [10.1007/BF00561393](https://doi.org/10.1007/BF00561393) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 11:29 | 0:39 | 1/1/1 | 0/0/0 | 0/0/0 | 38,307/3,928 | einfracz / qwen3.8-27b | 6 | 1/0 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 6 matched, 6 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 1  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arancibia_1987.pdf` | Arancibia A et al., Disposition kinetics of dibekacin in no…, International journal of cl… (1987) | popPK | 10 | not captured | [3557728](https://pubmed.ncbi.nlm.nih.gov/3557728) | The abstract explicitly reports quantitative two-compartment PK parameters including clearance, half-life, and rate constants for dibekacin in humans, though specific volume values are not listed. |
| `Arancibia_1995.pdf` | Arancibia A et al., Disposition kinetics of dibekacin in pa…, International journal of cl… (1995) | popPK | 10 | not captured | [8688988](https://pubmed.ncbi.nlm.nih.gov/8688988) | The text explicitly reports quantitative PK parameters (Cl, Vd, t1/2, k10) for dibekacin in humans, including values for normal and anephric subjects. |
| `Campillo_1980.pdf` | Campillo JA et al., Disposition of Dibekacin in patients un…, European journal of clinica… (1980) | popPK | 9 | [10.1007/BF00561393](https://doi.org/10.1007/BF00561393) | [7439256](https://pubmed.ncbi.nlm.nih.gov/7439256) | The study reports PK parameters for dibekacin in humans, but specific numeric values for clearance and volume are not explicitly listed in the text (only half-life is provided), suggesting the full parameter set is in the main text/tables not fully reproduced here. |
| `Motohiro_1985.pdf` | Motohiro T et al., [Fundamental and clinical studies on in…, The Japanese journal of ant… (1985) | popPK | 7 | not captured | [4079001](https://pubmed.ncbi.nlm.nih.gov/4079001) | The study reports AUC and half-life values for dibekacin in humans, but specific clearance (CL) and volume (V) parameters are not explicitly listed in the provided text. |

<sub>queue written 2026-10-07T11:29:18.962354+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Okubo_2002 | irrelevant | 2 | 0 | The study is in-vitro (MICs) and PK/PD index calculation only, not an in-vivo PK study reporting clearance/volume/half-life for dibekacin. |
| popPK | Tanigawara_2006_2 | irrelevant | 2 | 2 | The study reports population pharmacokinetic parameters for arbekacin, which is a derivative of dibekacin, not dibekacin itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 11:29 UTC</sub>
