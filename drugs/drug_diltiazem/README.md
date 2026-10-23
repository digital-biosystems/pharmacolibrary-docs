<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;diltiazem&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diltiazem_Guan2018_reference&quot;,&quot;label&quot;:&quot;Guan_2018_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diltiazem/Diltiazem_Guan2018_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Diltiazem_Klle1983_reference&quot;,&quot;label&quot;:&quot;K\u00f6lle_1983_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_diltiazem/Diltiazem_Klle1983_reference.md&quot;,&quot;status&quot;:&quot;Not simulated \u00b7 stale&quot;,&quot;css&quot;:&quot;pk-badge--neutral&quot;,&quot;here&quot;:false}]"></div>

# diltiazem

- **generic name:** diltiazem
- **ATC codes:** `C05AE03`, `C08DB01`
- **DrugBank:** [DB00343](https://go.drugbank.com/drugs/DB00343) · **PubChem:** [CID 39186](https://pubchem.ncbi.nlm.nih.gov/compound/39186)
- **molar mass:** 414.518 g/mol (C22H26N2O4S) — DrugBank
- **groups:** approved, investigational

## About

Diltiazem is a calcium channel blocker used to treat high blood pressure, angina, and certain heart rhythm problems such as atrial fibrillation and supraventricular tachycardia. It is an approved medicine and is widely used for these cardiovascular conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422229](https://www.wikidata.org/wiki/Q422229) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| diltiazem | parent | 414.518 | C22H26N2O4S | DrugBank | [39186](https://pubchem.ncbi.nlm.nih.gov/compound/39186) | Fu_1987, Guan_2018, Höglund_1989, Kölle_1983, Murata_1989 |
| deacetyldiltiazem | metabolite | 372.483 | C20H24N2O3S | PubChem | [91638](https://pubchem.ncbi.nlm.nih.gov/compound/91638) | Höglund_1989 |
| N-demethyldeacetyldiltiazem | metabolite | — (mass units only) | — | — | — | — |
| N-demethyldiltiazem | metabolite | 400.493 | C21H24N2O4S | PubChem | [107891](https://pubchem.ncbi.nlm.nih.gov/compound/107891) | Höglund_1989 |

## Start here

> **Kölle_1983_reference** — <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> healthy subjects, n = &gt;=6. [Run it in the simulator](drugs/drug_diltiazem/Diltiazem_Klle1983_reference.md?tab=Simulation) · [record](drugs/drug_diltiazem/Diltiazem_Klle1983_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| CL | CL | 48.3 ‡ | L/h | 11.5 ml/min/kg | healthy subjects | &gt;=6 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Kölle_1983_reference](drugs/drug_diltiazem/Diltiazem_Klle1983_reference.md) |
| CL | CL/F | 92.4 | L/h | 92.4 L/h | Chinese renal transplant recipients |  | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Guan_2018_reference](drugs/drug_diltiazem/Diltiazem_Guan2018_reference.md) |
| V | V | 63 ‡ | L | 0.9 l/kg | healthy subjects | &gt;=6 | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Kölle_1983_reference](drugs/drug_diltiazem/Diltiazem_Klle1983_reference.md) |
| V | V/F | 3550 | L | 3550 L | Chinese renal transplant recipients |  | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Guan_2018_reference](drugs/drug_diltiazem/Diltiazem_Guan2018_reference.md) |
| ka | kabs | 1.96 | 1/h | 1.96 /h | Chinese renal transplant recipients |  | human | <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span> | [Guan_2018_reference](drugs/drug_diltiazem/Diltiazem_Guan2018_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. ‡ given per kg in the paper; shown for a 70 kg adult. Rejected records are left out.</sub>

<div class="pk-forest-row"><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="CL across studies"><text x="190" y="14" font-size="12" font-weight="600">CL (L/h, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">100</text><text x="184" y="34.0" font-size="11" text-anchor="end">Kölle_1983 · CL ·/kg</text><circle cx="429.4" cy="30.0" r="4" fill="#78909c"><title>Kölle_1983 · CL ·/kg: 48.3 L/h</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Guan_2018 · CL/F</text><circle cx="528.0" cy="46.0" r="4" fill="#78909c"><title>Guan_2018 · CL/F: 92.4 L/h</title></circle></svg><svg class="pk-forest" xmlns="http://www.w3.org/2000/svg" width="560" height="80" viewBox="0 0 560 80" role="img" aria-label="V across studies"><text x="190" y="14" font-size="12" font-weight="600">V (L, log scale)</text><line x1="190.0" y1="18" x2="190.0" y2="58" stroke="#ddd"/><text x="190.0" y="72" font-size="10" text-anchor="middle">10</text><line x1="306.7" y1="18" x2="306.7" y2="58" stroke="#ddd"/><text x="306.7" y="72" font-size="10" text-anchor="middle">100</text><line x1="423.3" y1="18" x2="423.3" y2="58" stroke="#ddd"/><text x="423.3" y="72" font-size="10" text-anchor="middle">1000</text><line x1="540.0" y1="18" x2="540.0" y2="58" stroke="#ddd"/><text x="540.0" y="72" font-size="10" text-anchor="middle">10000</text><text x="184" y="34.0" font-size="11" text-anchor="end">Kölle_1983 · V ·/kg</text><circle cx="283.3" cy="30.0" r="4" fill="#78909c"><title>Kölle_1983 · V ·/kg: 63 L</title></circle><text x="184" y="50.0" font-size="11" text-anchor="end">Guan_2018 · V/F</text><circle cx="487.5" cy="46.0" r="4" fill="#78909c"><title>Guan_2018 · V/F: 3550 L</title></circle></svg></div>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Guan_2018_reference](drugs/drug_diltiazem/Diltiazem_Guan2018_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 | Guan XF et al., Population Pharmacokinetic Modeling of…, European journal of drug me… (2018) | [10.1007/s13318-017-0425-y](https://doi.org/10.1007/s13318-017-0425-y) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Not simulated" data-sim="yes"></span><span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Not simulated</sub> | [Kölle_1983_reference](drugs/drug_diltiazem/Diltiazem_Klle1983_reference.md) | ▶ model + simulator | 1-compartment, IV | 7 | Kölle EU et al., Pharmacokinetic model of diltiazem, Arzneimittel-Forschung (1983) | — |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Fu_1987_reference](drugs/drug_diltiazem/Diltiazem_Fu1987_reference.md) | — | 1-compartment (no model) | 2 | Fu M et al., Pharmacokinetics and pharmacodynamic ef…, Journal of clinical pharmac… (1987) | [10.1002/j.1552-4604.1987.tb02169.x](https://doi.org/10.1002/j.1552-4604.1987.tb02169.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Höglund_1989_reference](drugs/drug_diltiazem/Diltiazem_Hglund1989_reference.md) | — | general linear (no model) | 2 | Höglund P et al., Pharmacokinetics of diltiazem and its m…, Therapeutic drug monitoring (1989) | — |
| <span class="pk-rf" hidden data-species="human + animal" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">human + animal</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub> | [Murata_1989_reference](drugs/drug_diltiazem/Diltiazem_Murata1989_reference.md) | — | 1-compartment (no model) | 1 | Murata K et al., Pharmacokinetics of an oral sustained-r…, Journal of pharmaceutical s… (1989) | [10.1002/jps.2600781116](https://doi.org/10.1002/jps.2600781116) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tsui_1998_DBP](drugs/drug_diltiazem/pd_Tsui_1998_DBP.md) | diastolic blood pressure ← diltiazem · direct Emax (saturable) effect | model (no simulator) | Tsui BC et al., Pharmacokinetics and haemodynamic effec…, The Journal of pharmacy and… (1998) | [10.1111/j.2042-7158.1998.tb06174.x](https://doi.org/10.1111/j.2042-7158.1998.tb06174.x) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Tsui_1998_HR](drugs/drug_diltiazem/pd_Tsui_1998_HR.md) | heart rate ← diltiazem · direct Emax (saturable) effect | model (no simulator) | Tsui BC et al., Pharmacokinetics and haemodynamic effec…, The Journal of pharmacy and… (1998) | [10.1111/j.2042-7158.1998.tb06174.x](https://doi.org/10.1111/j.2042-7158.1998.tb06174.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q27` · CL/F | metabolism | [Uluturk_2023](drugs/drug_diltiazem/pgx_Uluturk_2023_CYP2D6_Q27.md) | Uluturk M et al., Diltiazem efficacy and CYP2D6 gene poly…, The Egyptian heart journal… (2023) | [10.1186/s43044-023-00375-0](https://doi.org/10.1186/s43044-023-00375-0) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> | **CYP2D6** | `Q22` · CL | metabolism | [Zheng_2013](drugs/drug_diltiazem/pgx_Zheng_2013_CYP2D6_Q22.md) | Zheng T et al., Effects of CYP3A5 and CYP2D6 genetic po…, Die Pharmazie (2013) | — |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=diltiazem).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` metabolism/substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2D6` metabolism/substrate, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate, `CYP3A7` inhibitor/substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor/substrate | DrugBank actor |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (blocker), CACNA2D1 (blocker), CACNG1 (blocker).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:45 | 11:51 | 2/3/0 | 1/0/0 | 0/0/2 | 167,429/36,089 | ollama / qwen3.8:27b-mtp-q8_0 | 17 | 6/11 | 15/2 | 0 |

## Coverage

- **PubMed hits:** 532 matched, 79 returned
- **screened:** 17  ·  **relevant:** 5
- **records:** 5  ·  extracted 2  ·  needs review 0  ·  rejected 3  ·  stale 5
- **scholar-agent fallback query used:** not captured

## Full-text requests

_28 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Fu_1987.pdf` | Fu M et al., Pharmacokinetics and pharmacodynamic ef…, Journal of clinical pharmac… (1987) | popPK | 10 | [10.1002/j.1552-4604.1987.tb02169.x](https://doi.org/10.1002/j.1552-4604.1987.tb02169.x) | [3680561](https://pubmed.ncbi.nlm.nih.gov/3680561) | The abstract provides quantitative pharmacokinetic parameters (half-lives, Cmax, Tmax, AUC) for diltiazem in humans, though specific clearance and volume values are not explicitly listed. |
| `Guan_2018.pdf` | Guan XF et al., Population Pharmacokinetic Modeling of…, European journal of drug me… (2018) | popPK | 10 | [10.1007/s13318-017-0425-y](https://doi.org/10.1007/s13318-017-0425-y) | [28646274](https://pubmed.ncbi.nlm.nih.gov/28646274) | The paper reports a population pharmacokinetic model for diltiazem with explicit numeric values for Ka, V/F, and CL/F in the abstract. |
| `Höglund_1989.pdf` | Höglund P et al., Pharmacokinetics of diltiazem and its m…, Therapeutic drug monitoring (1989) | popPK | 10 |  | [2815231](https://pubmed.ncbi.nlm.nih.gov/2815231) | The study reports quantitative pharmacokinetic parameters (half-lives, AUC trends, excretion data) for diltiazem in humans, though specific clearance and volume values are not explicitly listed in the provided text. |
| `Kölle_1983.pdf` | Kölle EU et al., Pharmacokinetic model of diltiazem, Arzneimittel-Forschung (1983) | popPK | 10 |  | [6684932](https://pubmed.ncbi.nlm.nih.gov/6684932) | The paper reports a compartmental PK model for diltiazem in humans with explicit numeric values for clearance, volume, and half-lives. |
| `Murata_1989.pdf` | Murata K et al., Pharmacokinetics of an oral sustained-r…, Journal of pharmaceutical s… (1989) | popPK | 10 | [10.1002/jps.2600781116](https://doi.org/10.1002/jps.2600781116) | [2621582](https://pubmed.ncbi.nlm.nih.gov/2621582) | The study reports quantitative pharmacokinetic parameters (absorption rate constants, lag times, and component amounts) for diltiazem in both dogs and humans, with specific numeric values provided in the text. |
| `Bertera_2007.pdf` | Bertera FM et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of pharmacological… (2007) | popPK | 9 | [10.1016/j.vascn.2007.04.001](https://doi.org/10.1016/j.vascn.2007.04.001) | [17560132](https://pubmed.ncbi.nlm.nih.gov/17560132) | The study reports PK parameters (Vd, CL) for diltiazem in rats, but the specific numeric values are not present in the provided text. |
| `Murata_1993.pdf` | Murata K et al., Pharmacokinetic analysis of an oral sus…, Pharmaceutical research (1993) | popPK | 9 | [10.1023/a:1018976203610](https://doi.org/10.1023/a:1018976203610) | [8321842](https://pubmed.ncbi.nlm.nih.gov/8321842) | The paper describes a population pharmacokinetic analysis of diltiazem, but the specific numeric parameter values are not present in the provided evidence text. |
| `Tsui_1998.pdf` | Tsui BC et al., Pharmacokinetics and haemodynamic effec…, The Journal of pharmacy and… (1998) | popPK | 8 | [10.1111/j.2042-7158.1998.tb06174.x](https://doi.org/10.1111/j.2042-7158.1998.tb06174.x) | [9530986](https://pubmed.ncbi.nlm.nih.gov/9530986) | The study reports pharmacokinetics of diltiazem in rats, but the provided evidence only contains haemodynamic parameters (Emax, EC50) and qualitative statements about plasma concentrations, lacking specific PK values like CL, V, or t1/2. |
| `Yeung_1998.pdf` | Yeung PK et al., Pharmacokinetics and haemodynamic effec…, Biopharmaceutics & drug dis… (1998) | pd | 5 | [10.1002/(sici)1099-081x(199803)19:2&lt;109::aid-bdd84&gt;3.0.co;2-v](https://doi.org/10.1002/(sici)1099-081x(199803)19:2<109::aid-bdd84>3.0.co;2-v) | [9533111](https://www.ncbi.nlm.nih.gov/pubmed/9533111) | metadata signals extractable PD data (Emax) |
| `Zimmerman_2004.pdf` | Zimmerman JJ, Exposure-response relationships and dru…, The AAPS journal (2004) | pd | 5 | [10.1208/aapsj060428](https://doi.org/10.1208/aapsj060428) | [15760093](https://www.ncbi.nlm.nih.gov/pubmed/15760093) | metadata signals extractable PD data (Exposure-response) |
| `Burke_1999.pdf` | Burke TJ et al., Hemolysate-mediated renal vasoconstrict…, Renal failure (1999) | pd | 4 | [10.3109/08860229909066967](https://doi.org/10.3109/08860229909066967) | [10048115](https://www.ncbi.nlm.nih.gov/pubmed/10048115) | metadata signals extractable PD data (EC50) |
| `Dogan_2012.pdf` | Dogan M et al., Magnesium and diltiazem relaxes phenyle…, Interactive cardiovascular… (2012) | pd | 4 | [10.1093/icvts/ivs051](https://doi.org/10.1093/icvts/ivs051) | [22523136](https://www.ncbi.nlm.nih.gov/pubmed/22523136) | metadata signals extractable PD data (EC50) |
| `Li_2021.pdf` | Li L et al., Dose tailoring of tacrolimus based on a…, International immunopharmac… (2021) | pgx | 8 | [10.1016/j.intimp.2021.107827](https://doi.org/10.1016/j.intimp.2021.107827) | [34284341](https://www.ncbi.nlm.nih.gov/pubmed/34284341) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Shen_2018.pdf` | Shen H et al., Further Studies to Support the Use of C…, Drug metabolism and disposi… (2018) | pgx | 8 | [10.1124/dmd.118.081125](https://doi.org/10.1124/dmd.118.081125) | [29777022](https://www.ncbi.nlm.nih.gov/pubmed/29777022) | metadata signals extractable PGX data (SLCO1B1, PK/PD-context) |
| `Yamamoto_2005.pdf` | Yamamoto T et al., Effects of the CYP3A5 genetic polymorph…, Clinica chimica acta; inter… (2005) | pgx | 8 | [10.1016/j.cccn.2005.06.013](https://doi.org/10.1016/j.cccn.2005.06.013) | [16024008](https://www.ncbi.nlm.nih.gov/pubmed/16024008) | metadata signals extractable PGX data (CYP3A5, PK/PD-context) |
| `Djebli_2021.pdf` | Djebli N et al., Physiologically-Based Pharmacokinetic M…, European journal of drug me… (2021) | pgx | 7 | [10.1007/s13318-021-00714-z](https://doi.org/10.1007/s13318-021-00714-z) | [34495458](https://www.ncbi.nlm.nih.gov/pubmed/34495458) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Girardin_2005.pdf` | Girardin F et al., [Antihypertensive therapy and drug-drug…, Revue medicale suisse (2005) | pgx | 7 |  | [16238231](https://www.ncbi.nlm.nih.gov/pubmed/16238231) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Grymonprez_2023.pdf` | Grymonprez M et al., Impact of P-glycoprotein and CYP3A4-int…, European heart journal. Car… (2023) | pgx | 7 | [10.1093/ehjcvp/pvad070](https://doi.org/10.1093/ehjcvp/pvad070) | [37791408](https://www.ncbi.nlm.nih.gov/pubmed/37791408) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hong_2011.pdf` | Hong SP et al., Effects of lovastatin on the pharmacoki…, The Journal of pharmacy and… (2011) | pgx | 7 | [10.1111/j.2042-7158.2010.01160.x](https://doi.org/10.1111/j.2042-7158.2010.01160.x) | [21189658](https://www.ncbi.nlm.nih.gov/pubmed/21189658) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Jerling_2005.pdf` | Jerling M et al., Studies to investigate the pharmacokine…, Journal of clinical pharmac… (2005) | pgx | 7 | [10.1177/0091270004273992](https://doi.org/10.1177/0091270004273992) | [15778423](https://www.ncbi.nlm.nih.gov/pubmed/15778423) | metadata signals extractable PGX data (CYP3A, PK/PD-context) |
| `Kollipara_2023.pdf` | Kollipara S et al., Physiologically based pharmacokinetic m…, Xenobiotica; the fate of fo… (2023) | pgx | 7 | [10.1080/00498254.2023.2250856](https://doi.org/10.1080/00498254.2023.2250856) | [37609899](https://www.ncbi.nlm.nih.gov/pubmed/37609899) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Liu_2021.pdf` | Liu S et al., Analyzing Potential Intestinal Transpor…, Pharmaceutical research (2021) | pgx | 7 | [10.1007/s11095-021-03105-w](https://doi.org/10.1007/s11095-021-03105-w) | [34729703](https://www.ncbi.nlm.nih.gov/pubmed/34729703) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Molden_2007.pdf` | Molden E et al., [Interaction risk with statin switch], Tidsskrift for den Norske l… (2007) | pgx | 7 |  | [17304269](https://www.ncbi.nlm.nih.gov/pubmed/17304269) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Neuvonen_2006.pdf` | Neuvonen PJ et al., Drug interactions with lipid-lowering d…, Clinical pharmacology and t… (2006) | pgx | 7 | [10.1016/j.clpt.2006.09.003](https://doi.org/10.1016/j.clpt.2006.09.003) | [17178259](https://www.ncbi.nlm.nih.gov/pubmed/17178259) | metadata signals extractable PGX data (CYP2C8, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Pham_2020.pdf` | Pham P et al., Association of Oral Anticoagulants and…, JAMA network open (2020) | pgx | 7 | [10.1001/jamanetworkopen.2020.3593](https://doi.org/10.1001/jamanetworkopen.2020.3593) | [32329770](https://www.ncbi.nlm.nih.gov/pubmed/32329770) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Suroowan_2019.pdf` | Suroowan S et al., Herbal Medicine of the 21st Century: A…, Current topics in medicinal… (2019) | pgx | 7 | [10.2174/1568026619666191112121330](https://doi.org/10.2174/1568026619666191112121330) | [31721714](https://www.ncbi.nlm.nih.gov/pubmed/31721714) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Terkeltaub_2011.pdf` | Terkeltaub RA et al., Novel evidence-based colchicine dose-re…, Arthritis and rheumatism (2011) | pgx | 7 | [10.1002/art.30389](https://doi.org/10.1002/art.30389) | [21480191](https://www.ncbi.nlm.nih.gov/pubmed/21480191) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-06 22:34 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Argevani_2021 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (phenoconversion) involving diltiazem as an inhibitor of tacrolimus, not a pharmacogenomic effect of diltiazem itself. |
| PGx | Benacerraf_1982 | not_relevant | 0 | 0 | The paper is a clinical study on coronary spasm and does not report any pharmacogenomic effects on diltiazem PK or PD parameters. |
| popPK | Bertera_2007 | relevant | 9 | 2 | The study reports PK parameters (Vd, CL) for diltiazem in rats, but the specific numeric values are not present in the provided text. |
| PGx | Boof_2019 | not_relevant | 0 | 0 | The text only provides the molecular formula and molar mass of a compound, with no information on pharmacogenomics, diltiazem, or PK/PD parameters. |
| popPK | Booker_2002 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of methylprednisolone, and while diltiazem is co-administered, no quantitative disposition parameters (CL, V, etc.) for diltiazem itself are reported in the evidence. |
| popPK | Bui_2024 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of finerenone, with diltiazem serving only as a co-administered CYP3A4 inhibitor/comparator, and no PK parameters for diltiazem itself are reported. |
| PGx | Bui_2024 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (finerenone with diltiazem) in rats, not the effect of a gene variant or genotype on diltiazem's PK/PD parameters. |
| popPK | Burke_1999 | irrelevant | 0 | 0 | no_text gate: only 65 chars of text extracted (&lt; 400) |
| PD | Burke_1999 | not_relevant | 0 | 0 | The paper focuses on hemolysate-mediated renal vasoconstriction and does not report any pharmacodynamic or exposure-response data for diltiazem. |
| PGx | Busti_2004 | not_relevant | 0 | 0 | The paper discusses atazanavir and mentions diltiazem only as a drug interaction, without reporting any pharmacogenomic effects on diltiazem's PK or PD parameters. |
| PGx | Chaccour_2020 | not_relevant | 0 | 0 | The paper is a clinical trial protocol for ivermectin in COVID-19 and does not report pharmacogenomic effects on diltiazem PK/PD parameters. |
| PGx | Chen_2013 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of tacrolimus, not diltiazem. |
| PGx | Ciftci_2013 | not_relevant | 0 | 0 | The paper investigates the effect of MDR1 polymorphisms on tacrolimus pharmacokinetics, not diltiazem. |
| popPK | Dixit_1999 | irrelevant | 2 | 0 | The study is a drug-drug interaction trial where diltiazem is a co-administered agent, and no specific quantitative PK parameter values (CL, V, etc.) for diltiazem are provided in the evidence. |
| PGx | Djebli_2021 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of entrectinib and does not report pharmacogenomic effects on diltiazem. |
| popPK | Dogan_2012 | irrelevant | 0 | 0 | no_text gate: only 76 chars of text extracted (&lt; 400) |
| PGx | Donneyong_2023 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (statins and CYP3A4 inhibitors) and discontinuation probabilities, not pharmacogenomic effects of gene variants on diltiazem PK/PD. |
| popPK | Eichelbaum_1984 | irrelevant | 2 | 0 | The paper is a critical review discussing general pharmacokinetic properties of calcium antagonists without providing specific quantitative parameter values for diltiazem in the provided text. |
| PD | Eichelbaum_1984 | not_relevant | 2 | 0 | The text is a qualitative review discussing the concepts of PK/PD modeling (hysteresis, Emax vs log-linear) for calcium antagonists but does not report specific numeric PD parameters or extractable concentration-effect data for diltiazem. |
| PGx | Figueredo_2026 | not_relevant | 0 | 0 | The paper is a case report on SIADH management and mentions diltiazem only as a CYP3A4 inhibitor causing a drug-drug interaction, not as a subject of pharmacogenomic analysis. |
| PGx | Follath_1989 | not_relevant | 0 | 0 | The paper is a clinical review of calcium antagonists in ischemic heart disease and does not discuss pharmacogenomics or genetic variants affecting diltiazem PK/PD. |
| PGx | Frampton_1992 | not_relevant | 0 | 0 | The paper is a review of nicorandil's pharmacology and efficacy, with no mention of diltiazem pharmacogenomics or genetic variants affecting PK/PD. |
| PGx | Girardin_2005 | not_relevant | 0 | 0 | The paper discusses general drug-drug interactions involving CYP3A4 inhibition by diltiazem, but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Gosselin_2023 | not_relevant | 0 | 0 | The study investigates the association between concomitant use of antiarrhythmics (including diltiazem) and bleeding risk in patients on DOACs, but does not report any pharmacogenomic effects on diltiazem's PK or PD parameters. |
| PGx | Grymonprez_2023 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (P-gp/CYP3A4 inhibitors) affecting NOACs, not pharmacogenomic effects on diltiazem PK/PD. |
| PGx | Guan_2018 | not_relevant | 0 | 0 | The study genotyped CYP3A4, CYP3A5, and MDR1, but the results indicate that only total bilirubin influenced the PK parameters, with no reported effect of the genetic variants on diltiazem pharmacokinetics. |
| PGx | Hahn_2023 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A inhibition) affecting encorafenib PK, not the impact of a gene variant on diltiazem PK/PD. |
| PGx | Hong_2011 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (lovastatin) in rats, not a pharmacogenomic effect of a gene variant on diltiazem PK/PD. |
| PGx | Hopewell_2020 | not_relevant | 0 | 0 | The paper focuses on simvastatin-related myopathy and risk factors, not the pharmacokinetics or pharmacodynamics of diltiazem. |
| PGx | Huang_2020 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus, not diltiazem. |
| PGx | Jerling_2005 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (ranolazine with diltiazem), not the effect of a gene variant on diltiazem's pharmacokinetics or pharmacodynamics. |
| PGx | Jing_2022 | not_relevant | 0 | 0 | The paper focuses on a PBPK model for ipatasertib and its drug-drug interactions; it does not report pharmacogenomic effects on diltiazem PK/PD. |
| PGx | Kalow_1989 | not_relevant | 0 | 0 | The text discusses debrisoquine and mephenytoin polymorphisms and lists substrates, but does not report any pharmacogenomic effects on the PK or PD of diltiazem. |
| PGx | Kazierad_1989 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (diltiazem inhibiting encainide metabolism) rather than a pharmacogenomic effect on diltiazem's own PK/PD parameters. |
| PGx | Kollipara_2023 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) involving diltiazem as a perpetrator for encorafenib, not on pharmacogenomic effects of diltiazem itself. |
| PGx | Levin_2010 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (diltiazem inhibiting CYP3A4 affecting fentanyl) rather than a pharmacogenomic effect of a gene variant on diltiazem's PK/PD. |
| PGx | Li_2021 | not_relevant | 0 | 0 | The study investigates the pharmacokinetics of tacrolimus, not diltiazem; diltiazem is only included as a covariate affecting tacrolimus clearance. |
| PGx | Liu_2021 | not_relevant | 0 | 0 | The paper analyzes drug-drug interactions involving diltiazem as an inhibitor of ticagrelor, not the pharmacogenomics of diltiazem itself. |
| popPK | Luckow_1997 | irrelevant | 2 | 0 | The study reports bioequivalence ratios and PK/PD hysteresis analysis rather than absolute quantitative disposition parameters (CL, V, ka) for diltiazem. |
| PD | Luckow_1997 | not_relevant | 4 | 3 | The paper describes a PK/PD relationship (hysteresis) and reports bioequivalence ratios for PD parameters (AUEC, Emax, MRTE), but it does not provide the specific numeric values for the concentration-effect curve parameters (like absolute Emax, EC50, or slope) or the raw data needed to derive them, focusing instead on the qualitative shape of the hysteresis loop and bioinequivalence conclusions. |
| PGx | Molden_2007 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions (statins with diltiazem/warfarin) and does not report any pharmacogenomic effects (gene variants) on diltiazem PK/PD. |
| popPK | Murata_1993 | relevant | 9 | 0 | The paper describes a population pharmacokinetic analysis of diltiazem, but the specific numeric parameter values are not present in the provided evidence text. |
| PGx | Neuvonen_2006 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions involving diltiazem as a CYP3A4 inhibitor affecting statins, but does not report pharmacogenomic effects on diltiazem's own PK or PD parameters. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper describes a general framework for predicting CYP3A4 drug-drug interactions and does not report any pharmacogenomic effects (gene variants) on diltiazem PK/PD. |
| PGx | Onoda_1989 | not_relevant | 0 | 0 | The paper investigates the antitumor efficacy of calcium channel blockers (including diltiazem) in combination with cisplatin in a murine model, but does not report any pharmacogenomic effects on the PK or PD parameters of diltiazem. |
| PGx | Panfili_2012 | not_relevant | 0 | 0 | The paper reports a pharmacodynamic adverse effect of ranolazine and mentions diltiazem only as a potential CYP3A4 inhibitor affecting ranolazine levels, without reporting a pharmacogenomic effect on diltiazem's PK or PD parameters. |
| PGx | Patel_2011 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (saxagliptin and diltiazem) in healthy subjects, not a pharmacogenomic effect based on gene variants or genotypes. |
| PGx | Pham_2020 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (diltiazem/verapamil with DOACs) and reports clinical bleeding outcomes, not a pharmacogenomic effect on diltiazem's PK or PD parameters. |
| PGx | Posada_2020 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (CYP3A4 modulators) and PBPK modeling for abemaciclib, not pharmacogenomic effects on diltiazem. |
| PGx | Saedder_2019 | not_relevant | 2 | 1 | The paper is a case report on a fatal drug-drug interaction involving verapamil and metoprolol; while it mentions CYP2D6 status as a potential vulnerability factor, it does not report quantitative pharmacokinetic or pharmacodynamic data for diltiazem. |
| PGx | Schroeder_1980 | not_relevant | 0 | 0 | The paper reports clinical efficacy of diltiazem in Prinzmetal's angina but contains no information on gene variants or pharmacogenomic effects on PK/PD parameters. |
| PGx | Sennesael_2018 | not_relevant | 0 | 0 | The paper focuses on rivaroxaban pharmacogenomics (ABCB1), not diltiazem. |
| PGx | Shen_2018 | not_relevant | 0 | 0 | The paper investigates diltiazem only as a negative control for OATP1B inhibition using coproporphyrin biomarkers, rather than reporting pharmacogenomic effects on diltiazem's own PK/PD parameters. |
| PGx | Staack_2007 | not_relevant | 2 | 0 | The paper discusses diltiazem only as a potential CYP2D6 inhibitor causing a drug-drug interaction affecting mCPP metabolism, not as the primary drug with a pharmacogenomic effect on its own PK/PD. |
| PGx | Suroowan_2019 | not_relevant | 0 | 0 | The paper discusses herbal-drug interactions (specifically protein binding displacement) but does not report any pharmacogenomic effects (gene variants) on diltiazem PK/PD. |
| PGx | Süsal_2025 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of tacrolimus (CYP3A5), not diltiazem. |
| PGx | Talbert_1983 | not_relevant | 0 | 0 | The paper is a general review of calcium-channel blockers and does not report any pharmacogenomic effects or gene-variant associations for diltiazem. |
| PGx | Terkeltaub_2011 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (diltiazem affecting colchicine PK), not a pharmacogenomic effect (gene variant affecting diltiazem PK/PD). |
| popPK | Tsui_1998 | relevant | 8 | 2 | The study reports pharmacokinetics of diltiazem in rats, but the provided evidence only contains haemodynamic parameters (Emax, EC50) and qualitative statements about plasma concentrations, lacking specific PK values like CL, V, or t1/2. |
| PGx | Upton_1991 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions affecting theophylline clearance, not the pharmacogenomics of diltiazem. |
| PGx | Wang_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions between statins and calcium channel blockers, not the effect of a specific gene variant on diltiazem pharmacokinetics or pharmacodynamics. |
| popPK | Wu_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and biological evaluation of a new vasodilator (compound D1), using diltiazem only as a mechanistic comparator to block L-type calcium channels, with no PK parameters reported for diltiazem. |
| PD | Wu_2022 | not_relevant | 0 | 0 | The paper reports PD parameters (Emax, EC50) for a novel compound (D1), not for diltiazem; diltiazem is only mentioned as a tool compound to inhibit D1's effect. |
| PGx | Yamamoto_2005 | not_relevant | 5 | 10 | The study reports a pharmacogenomic association with diltiazem clearance, but the results were not statistically significant, indicating no confirmed effect. |
| popPK | Yeung_1998 | irrelevant | 0 | 0 | no_text gate: only 120 chars of text extracted (&lt; 400) |
| popPK | Yukawa_2001 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for digoxin, not diltiazem, which is only mentioned as a co-administered drug affecting digoxin clearance. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of tacrolimus, with diltiazem mentioned only as a co-administered drug affecting tacrolimus clearance. |
| PGx | Zhang_2025 | not_relevant | 0 | 0 | The paper reports pharmacokinetics for tacrolimus, not diltiazem. |
| popPK | Zimmerman_2004 | irrelevant | 0 | 0 | no_text gate: only 66 chars of text extracted (&lt; 400) |
| PD | Zimmerman_2004 | not_relevant | 0 | 0 | The paper focuses on sirolimus, not diltiazem. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bdiltiazem%5D&body=Drug%3A%20diltiazem%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_diltiazem/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-06 22:35 UTC</sub>
