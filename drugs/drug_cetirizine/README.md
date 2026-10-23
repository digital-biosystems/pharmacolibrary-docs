<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R06A&quot;,&quot;href&quot;:&quot;atc/R06A.md&quot;},{&quot;label&quot;:&quot;cetirizine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Cetirizine_Melander2025_reference&quot;,&quot;label&quot;:&quot;Melander_2025_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_cetirizine/Cetirizine_Melander2025_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# cetirizine

- **generic name:** cetirizine
- **ATC codes:** `R06AE07`, `S01GX12`
- **DrugBank:** [DB00341](https://go.drugbank.com/drugs/DB00341) · **PubChem:** [CID 2678](https://pubchem.ncbi.nlm.nih.gov/compound/2678)
- **molar mass:** 388.888 g/mol (C21H25ClN2O3) — DrugBank
- **groups:** approved, investigational

## About

Cetirizine is a non-sedating antihistamine used to treat allergic conditions such as allergic rhinitis, urticaria, and sinus problems. It is an approved medicine, widely used as an oral antihistamine and also available as an eye drop for allergic eye conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q423075](https://www.wikidata.org/wiki/Q423075) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cetirizine | parent | 388.888 | C21H25ClN2O3 | DrugBank | [2678](https://pubchem.ncbi.nlm.nih.gov/compound/2678) | Gupta_2006, Hussein_2005, Melander_2025, Pitsiu_2004, Urien_1999 |
| levocetirizine | metabolite | 388.892 | C21H25ClN2O3 | PubChem | [1549000](https://pubchem.ncbi.nlm.nih.gov/compound/1549000) | Hussein_2005 |

## Start here

> **Melander_2025_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> breastfeeding women, n = &gt;=35. [Run it in the simulator](drugs/drug_cetirizine/Cetirizine_Melander2025_reference.md?tab=Simulation) · [record](drugs/drug_cetirizine/Cetirizine_Melander2025_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## Parameters across studies

| parameter | as named | value | unit | as reported | population | n | species | status | record |
|---|---|---|---|---|---|---|---|---|---|
| ka | kabs | 0.095 | 1/h | 0.095 h−1 | breastfeeding women | &gt;=35 | human | <span class="pk-badge pk-badge--orange">Needs review</span> | [Melander_2025_reference](drugs/drug_cetirizine/Cetirizine_Melander2025_reference.md) |

<sub>Values are converted from the record's SI value to one unit per parameter. Rejected records are left out.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: T1_cmax</sub> | [Melander_2025_reference](drugs/drug_cetirizine/Cetirizine_Melander2025_reference.md) | ▶ model + simulator | 1-compartment, oral | 5 | Melander E et al., Population pharmacokinetic modelling of…, Basic & clinical pharmacolo… (2025) | [10.1111/bcpt.14100](https://doi.org/10.1111/bcpt.14100) |
| <span class="pk-rf" hidden data-species="pig" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span><br><sub>blocking: C9 clearance/volume outside physiological window (implausible magnitude — unit/…</sub> | [Gupta_2006_reference](drugs/drug_cetirizine/Cetirizine_Gupta2006_reference.md) | — | 1-compartment (no model) | 2 | Gupta A et al., Stereoselective pharmacokinetics of cet…, Biopharmaceutics & drug dis… (2006) | [10.1002/bdd.509](https://doi.org/10.1002/bdd.509) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C7 apparent-parameter coherence violated (double correction)</sub> | [Hussein_2005_reference](drugs/drug_cetirizine/Cetirizine_Hussein2005_reference.md) | — | 1-compartment (no model) | 4 | Hussein Z et al., Retrospective population pharmacokineti…, British journal of clinical… (2005) | [10.1111/j.1365-2125.2005.02242.x](https://doi.org/10.1111/j.1365-2125.2005.02242.x) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Pitsiu_2004_reference](drugs/drug_cetirizine/Cetirizine_Pitsiu2004_reference.md) | — | 1-compartment (no model) | 2 | Pitsiu M et al., Retrospective population pharmacokineti…, British journal of clinical… (2004) | [10.1046/j.1365-2125.2003.02017.x](https://doi.org/10.1046/j.1365-2125.2003.02017.x) |
| <span class="pk-rf" hidden data-species="human" data-age="paediatric" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Simons_2005_reference](drugs/drug_cetirizine/Cetirizine_Simons2005_reference.md) | — | 1-compartment (no model) | 0 | Simons FE, Population pharmacokinetics of levoceti…, Pediatric allergy and immun… (2005) | [10.1111/j.1399-3038.2005.00240.x](https://doi.org/10.1111/j.1399-3038.2005.00240.x) |
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Urien_1999_reference](drugs/drug_cetirizine/Cetirizine_Urien1999_reference.md) | — | 1-compartment (no model) | 0 | Urien S et al., A pharmacokinetic-pharmacodynamic model…, International journal of cl… (1999) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">horse</span> | [Olsén_2008_wheal_formation](drugs/drug_cetirizine/pd_Ols_n_2008_wheal_formation.md) | histamine-induced cutaneous wheal formation ← cetirizine · direct Emax (saturable) effect | model (no simulator) | Olsén L et al., Cetirizine in horses: pharmacokinetics…, Veterinary journal (London,… (2008) | [10.1016/j.tvjl.2007.03.026](https://doi.org/10.1016/j.tvjl.2007.03.026) |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Urien_1999_flare](drugs/drug_cetirizine/pd_Urien_1999_flare.md) | flare ← cetirizine · indirect response — drug inhibits the production of flare | model (no simulator) | Urien S et al., A pharmacokinetic-pharmacodynamic model…, International journal of cl… (1999) | — |
| <span class="pk-badge pk-badge--orange">Needs review</span> | [Urien_1999_wheal](drugs/drug_cetirizine/pd_Urien_1999_wheal.md) | wheal ← cetirizine · indirect response — drug inhibits the production of wheal | model (no simulator) | Urien S et al., A pharmacokinetic-pharmacodynamic model…, International journal of cl… (1999) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cetirizine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| distribution | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| excretion | liver | `ABCB1` inhibitor/substrate | DrugBank actor |

<sub>Actors without a tissue in the table: HRH1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 22:51 | 6:41 | 1/5/0 | 2/0/0 | 0/0/0 | 155,884/14,652 | ollama / qwen3.8:27b-mtp-q8_0 | 4 | 0/4 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 14 matched, 14 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 6  ·  extracted 0  ·  needs review 1  ·  rejected 5  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_8 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gupta_2006.pdf` | Gupta A et al., Stereoselective pharmacokinetics of cet…, Biopharmaceutics & drug dis… (2006) | popPK | 10 | [10.1002/bdd.509](https://doi.org/10.1002/bdd.509) | [16791848](https://pubmed.ncbi.nlm.nih.gov/16791848) | The study reports quantitative compartmental PK parameters (CL, Vss) for cetirizine enantiomers in guinea pigs with values explicitly listed in the abstract. |
| `Hussein_2005.pdf` | Hussein Z et al., Retrospective population pharmacokineti…, British journal of clinical… (2005) | popPK | 10 | [10.1111/j.1365-2125.2005.02242.x](https://doi.org/10.1111/j.1365-2125.2005.02242.x) | [15606437](https://pubmed.ncbi.nlm.nih.gov/15606437) | The study reports quantitative population PK parameters (CL/F, V/F) for levocetirizine, the active enantiomer of cetirizine, in children. |
| `Paine_2022.pdf` | Paine SW et al., Plasma and urine pharmacokinetics of hy…, Journal of veterinary pharm… (2022) | popPK | 10 | [10.1111/jvp.13010](https://doi.org/10.1111/jvp.13010) | [34469007](https://pubmed.ncbi.nlm.nih.gov/34469007) | The study reports a population PK model for cetirizine in horses, but the specific numeric parameter values are not present in the provided evidence. |
| `Pitsiu_2004.pdf` | Pitsiu M et al., Retrospective population pharmacokineti…, British journal of clinical… (2004) | popPK | 10 | [10.1046/j.1365-2125.2003.02017.x](https://doi.org/10.1046/j.1365-2125.2003.02017.x) | [15025737](https://pubmed.ncbi.nlm.nih.gov/15025737) | The paper reports a population pharmacokinetic model for cetirizine in children with specific numeric values for clearance (CL/F), volume of distribution (V/F), and variability provided in the abstract. |
| `Simons_2005.pdf` | Simons FE, Population pharmacokinetics of levoceti…, Pediatric allergy and immun… (2005) | popPK | 10 | [10.1111/j.1399-3038.2005.00240.x](https://doi.org/10.1111/j.1399-3038.2005.00240.x) | [15787865](https://pubmed.ncbi.nlm.nih.gov/15787865) | The paper reports a population PK model for levocetirizine (the active enantiomer of cetirizine) in children, with specific numeric values for the slope of clearance and volume of distribution relative to body weight provided in the text. |
| `Urien_1999.pdf` | Urien S et al., A pharmacokinetic-pharmacodynamic model…, International journal of cl… (1999) | popPK | 10 |  | [10543317](https://pubmed.ncbi.nlm.nih.gov/10543317) | The abstract explicitly reports quantitative PK parameters (Ka, alpha, beta, half-life, clearance) for cetirizine in a two-compartment model. |
| `Olsén_2008.pdf` | Olsén L et al., Cetirizine in horses: pharmacokinetics…, Veterinary journal (London,… (2008) | popPK | 8 | [10.1016/j.tvjl.2007.03.026](https://doi.org/10.1016/j.tvjl.2007.03.026) | [17581764](https://pubmed.ncbi.nlm.nih.gov/17581764) | The study reports PK parameters for cetirizine in horses, but only provides half-life and trough concentrations, lacking explicit clearance, volume, or rate constants. |
| `Xu_2009.pdf` | Xu FG et al., Pharmacokinetics and bioequivalence stu…, Arzneimittel-Forschung (2009) | popPK | 8 | [10.1055/s-0031-1296422](https://doi.org/10.1055/s-0031-1296422) | [19856790](https://pubmed.ncbi.nlm.nih.gov/19856790) | The study reports quantitative non-compartmental pharmacokinetic parameters (Cmax, AUC, t1/2, MRT) for cetirizine in humans, with specific numeric values provided in the text. |

<sub>queue written 2026-10-07 22:45 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Desager_1995 | irrelevant | 2 | 0 | This is a review article summarizing PK-PD relationships for multiple antihistamines, including cetirizine, but it does not report original quantitative disposition parameters (CL, V, etc.) for cetirizine in the provided text. |
| popPK | Gera_2013 | irrelevant | 0 | 0 | The study is a mechanistic in vitro investigation of a cetirizine conjugate's receptor binding and vascular effects, reporting no pharmacokinetic disposition parameters for cetirizine. |
| popPK | Ino_2014 | relevant | 4 | 5 | The study reports non-compartmental PK parameters (Cmax, AUC, t1/2) for levocetirizine (the active enantiomer of cetirizine) in humans, but lacks compartmental model parameters (CL, V, Q) and focuses on bioequivalence rather than population PK modeling. |
| popPK | Liu_2024 | relevant | 10 | 2 | The study develops a population PK model for cetirizine in children, but the specific numeric parameter estimates (CL, V, Ka) are located in Supplementary Table S1, which is not included in the provided evidence. |
| popPK | Olsén_2008 | relevant | 8 | 3 | The study reports PK parameters for cetirizine in horses, but only provides half-life and trough concentrations, lacking explicit clearance, volume, or rate constants. |
| popPK | Paine_2022 | relevant | 10 | 0 | The study reports a population PK model for cetirizine in horses, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Zhang_2020 | irrelevant | 0 | 0 | The study is a pharmacodynamic evaluation of allergic rhinitis in rats where cetirizine is used only as a positive control, with no pharmacokinetic parameters reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcetirizine%5D&body=Drug%3A%20cetirizine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_cetirizine/%0ABuild%3A%20v26.09%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary v26.09 · newest extraction 2026-10-07 22:46 UTC</sub>
