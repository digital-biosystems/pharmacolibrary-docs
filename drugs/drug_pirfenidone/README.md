<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;pirfenidone&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Pirfenidone_Braim2008_reference&quot;,&quot;label&quot;:&quot;Braim_2008_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md&quot;,&quot;status&quot;:&quot;Reproduces paper&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# pirfenidone

- **generic name:** pirfenidone
- **ATC codes:** `L04AX05`
- **DrugBank:** [DB04951](https://go.drugbank.com/drugs/DB04951) · **PubChem:** [CID 40632](https://pubchem.ncbi.nlm.nih.gov/compound/40632)
- **molar mass:** 185.2218 g/mol (C12H11NO) — DrugBank
- **groups:** approved, investigational

## About

Pirfenidone is used to treat idiopathic pulmonary fibrosis, a form of interstitial lung disease. It is authorised in the European Union and is also being investigated for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2060696](https://www.wikidata.org/wiki/Q2060696) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| pirfenidone | parent | 185.222 | C12H11NO | DrugBank | [40632](https://pubchem.ncbi.nlm.nih.gov/compound/40632) | Barranco-Garduño_2020, Braim_2008, Kaminskas_2019 |

## Start here

> **Braim_2008_reference** — <span class="pk-badge pk-badge--green">Reproduces paper</span> adult horses, n = 6. [Run it in the simulator](drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md?tab=Simulation) · [record](drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 27.47 ‡ | L/h | 6.54 mL/kg/min | adult horses | 6 | horse | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Braim_2008_reference](drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md) |
| t½ | t1/2z | 1.433 | h | 86.0 minutes | adult horses | 6 | horse | <span class="pk-badge pk-badge--green">Reproduces paper</span> | [Braim_2008_reference](drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Reproduces paper" data-sim="yes"></span><span class="pk-badge pk-badge--green">Reproduces paper</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Braim_2008_reference](drugs/drug_pirfenidone/Pirfenidone_Braim2008_reference.md) | ▶ model + simulator | 1-compartment, IV | 3 | Braim AE et al., Pharmacokinetics and clinical effects o…, American journal of veterin… (2008) | [10.2460/ajvr.69.7.952](https://doi.org/10.2460/ajvr.69.7.952) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Barranco-Garduño_2020_reference](drugs/drug_pirfenidone/Pirfenidone_BarrancoGarduo2020_reference.md) | — | 1-compartment (no model) | 1 | Barranco-Garduño LM et al., Pharmacokinetic evaluation of two pirfe…, Heliyon (2020) | [10.1016/j.heliyon.2020.e05279](https://doi.org/10.1016/j.heliyon.2020.e05279) |
| <span class="pk-rf" hidden data-species="sheep" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (sheep), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">sheep</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Kaminskas_2019_reference](drugs/drug_pirfenidone/Pirfenidone_Kaminskas2019_reference.md) | — | 2-compartment (no model) | 3 | Kaminskas LM et al., Aerosol Pirfenidone Pharmacokinetics af…, Pharmaceutical research (2019) | [10.1007/s11095-019-2732-2](https://doi.org/10.1007/s11095-019-2732-2) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 00:11 | 2:09 | 1/2/0 | 0/0/0 | 0/0/0 | 126,708/8,911 | einfracz / qwen3.8-27b | 7 | 3/4 | 6/1 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 14 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_3 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Braim_2008.pdf` | Braim AE et al., Pharmacokinetics and clinical effects o…, American journal of veterin… (2008) | popPK | 10 | [10.2460/ajvr.69.7.952](https://doi.org/10.2460/ajvr.69.7.952) | [18593250](https://pubmed.ncbi.nlm.nih.gov/18593250) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life) for pirfenidone in horses directly in the abstract. |
| `Park_2026.pdf` | Park S et al., Evidence-Based Exploration of Exposure-…, Clinical therapeutics (2026) | popPK | 10 | [10.1016/j.clinthera.2026.05.013](https://doi.org/10.1016/j.clinthera.2026.05.013) | [42303552](https://pubmed.ncbi.nlm.nih.gov/42303552) | The study describes a population PK model for pirfenidone but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| `Mirkovic_2002.pdf` | Mirkovic S et al., Attenuation of cardiac fibrosis by pirf…, British journal of pharmaco… (2002) | popPK | 8 | [10.1038/sj.bjp.0704539](https://doi.org/10.1038/sj.bjp.0704539) | [11861324](https://pubmed.ncbi.nlm.nih.gov/11861324) | The study reports specific pharmacokinetic parameters (half-life and bioavailability) for pirfenidone in rats, though it is a preclinical study focused on fibrosis with PK data as secondary. |

<sub>queue written 2026-10-07T00:10:04.322277+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Delameillieure_2022 | irrelevant | 0 | 0 | The study assesses medication adherence and lung function outcomes in IPF patients, reporting no pharmacokinetic parameters (CL, V, Ka, t1/2). |
| popPK | Khanna_2025 | irrelevant | 0 | 0 | The paper is a clinical efficacy trial (Scleroderma Lung Study III) assessing lung function outcomes (FVC-%) and does not report any pharmacokinetic parameters (CL, V, t1/2, etc.) for pirfenidone. |
| popPK | Kim_2024 | irrelevant | 0 | 0 | The study reports clinical efficacy outcomes (FVC decline) rather than pharmacokinetic disposition parameters. |
| popPK | Lalla_2025 | irrelevant | 0 | 0 | This is a clinical efficacy and tolerability cohort study comparing nintedanib and pirfenidone in IPF patients, containing no pharmacokinetic parameters or models. |
| popPK | Park_2026 | relevant | 10 | 3 | The study describes a population PK model for pirfenidone but the specific numeric parameter values (CL, V, etc.) are not explicitly listed in the provided abstract text. |
| popPK | Ramos-Mondragón_2012 | irrelevant | 0 | 0 | The study investigates electrophysiological effects on cardiac ion channels (mechanistic) and does not report pharmacokinetic parameters. |
| popPK | Wang_2023 | relevant | 9 | 0 | The paper describes a population pharmacokinetic model for pirfenidone with specific structural details (1-compartment, lag time, food effect) and OFV values, but does not provide the final numeric parameter estimates (CL, V, ka, etc.) in the provided evidence, which likely reside in the main text tables or figures not included here. |
| popPK | Xie_2026 | irrelevant | 0 | 0 | The study focuses on the mechanistic pharmacodynamics (bronchodilation and anti-inflammatory effects) of pirfenidone in ex vivo lung slices and in vivo mouse models, without reporting any quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Yuan_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting lung function outcomes (FVC, DLCO) rather than pharmacokinetic parameters (CL, V, ka, etc.). |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 00:10 UTC</sub>
