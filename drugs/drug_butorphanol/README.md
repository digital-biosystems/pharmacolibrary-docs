<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02A&quot;,&quot;href&quot;:&quot;atc/N02A.md&quot;},{&quot;label&quot;:&quot;butorphanol&quot;}]"></div>

# butorphanol

- **generic name:** butorphanol
- **ATC codes:** `N02AF01`
- **DrugBank:** [DB00611](https://go.drugbank.com/drugs/DB00611) · **PubChem:** [CID 6916249](https://pubchem.ncbi.nlm.nih.gov/compound/6916249)
- **molar mass:** 327.4605 g/mol (C21H29NO2) — DrugBank
- **groups:** approved, illicit, investigational, vet_approved

## About

Butorphanol is an opioid painkiller used to treat pain, including migraine, and can also act as a cough suppressant. It is an approved medicine in human and veterinary use, though not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1185089](https://www.wikidata.org/wiki/Q1185089) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| butorphanol | parent | 327.461 | C21H29NO2 | DrugBank | [6916249](https://pubchem.ncbi.nlm.nih.gov/compound/6916249) | Knych_2024, Saeed_2026 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Groenendaal_2008_reference](drugs/drug_butorphanol/Butorphanol_Groenendaal2008_reference.md) | — | 1-compartment (no model) | 0 | Groenendaal D et al., Pharmacokinetic/pharmacodynamic modelli…, European journal of pharmac… (2008) | [10.1016/j.ejps.2008.03.003](https://doi.org/10.1016/j.ejps.2008.03.003) |
| <span class="pk-rf" hidden data-species="horse" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub> | [Knych_2024_reference](drugs/drug_butorphanol/Butorphanol_Knych2024_reference.md) | — | 2-compartment (no model) | 6 | Knych HK et al., Population pharmacokinetics of butorpha…, Journal of veterinary pharm… (2024) | [10.1111/jvp.13450](https://doi.org/10.1111/jvp.13450) |
| <span class="pk-rf" hidden data-species="cat" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">cat</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Pypendop_2021_reference](drugs/drug_butorphanol/Butorphanol_Pypendop2021_reference.md) | — | 1-compartment (no model) | 0 | Pypendop BH et al., Pharmacokinetics of butorphanol in male…, Journal of veterinary pharm… (2021) | [10.1111/jvp.13014](https://doi.org/10.1111/jvp.13014) |
| <span class="pk-rf" hidden data-species="horse" data-age="mixed" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--species" title="Animal study (horse), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">horse</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Saeed_2026_reference](drugs/drug_butorphanol/Butorphanol_Saeed2026_reference.md) | — | 1-compartment (no model) | 3 (+1 cov.) | Saeed AM et al., Butorphanol Pharmacokinetics Across Spe…, CPT: pharmacometrics & syst… (2026) | [10.1002/psp4.70293](https://doi.org/10.1002/psp4.70293) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Vandeputte_2020_arr2](drugs/drug_butorphanol/pd_Vandeputte_2020_arr2.md) | β-arrestin 2 (βarr2) recruitment ← butorphanol · direct Emax (saturable) effect | — | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Vandeputte_2020_mini_Gi](drugs/drug_butorphanol/pd_Vandeputte_2020_mini_Gi.md) | mini-Gi (G protein) recruitment ← butorphanol · direct Emax (saturable) effect | — | Vandeputte MM et al., In vitro functional characterization of…, Archives of toxicology (2020) | [10.1007/s00204-020-02855-7](https://doi.org/10.1007/s00204-020-02855-7) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">dog</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Nelson_2025](drugs/drug_butorphanol/pgx_Nelson_2025_ABCB1_Q100.md) | Nelson TS et al., Case Report: Adverse reaction to butorp…, Frontiers in veterinary sci… (2025) | [10.3389/fvets.2025.1603375](https://doi.org/10.3389/fvets.2025.1603375) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>(empty cell)</code></td><td>Not recorded; not equivalent to zero. A column empty in every row is not shown.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:55 | 1:59 | 0/4/0 | 1/0/0 | 0/0/1 | 191,593/11,212 | einfracz / qwen3.8-27b | 9 | 4/5 | 8/1 | 0 |

## Coverage

- **PubMed hits:** 27 matched, 25 returned
- **screened:** 7  ·  **relevant:** 7
- **records:** 4  ·  extracted 0  ·  needs_review 0  ·  rejected 4  ·  stale 2
- **scholar-agent fallback query used:** not captured

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Portnoy_1992.pdf` | Portnoy LG et al., Pharmacokinetics of butorphanol tartrat…, American journal of veterin… (1992) | popPK | 10 | not captured | [1586025](https://pubmed.ncbi.nlm.nih.gov/1586025) | The study reports quantitative pharmacokinetic parameters (half-life) for butorphanol in rabbits. |
| `Riggs_2008.pdf` | Riggs SM et al., Pharmacokinetics of butorphanol tartrat…, American journal of veterin… (2008) | popPK | 10 | [10.2460/ajvr.69.5.596](https://doi.org/10.2460/ajvr.69.5.596) | [18447789](https://pubmed.ncbi.nlm.nih.gov/18447789) | The study reports quantitative pharmacokinetic parameters (half-life, bioavailability, model types) for butorphanol in birds, with values present in the abstract. |
| `Singh_2011.pdf` | Singh PM et al., Pharmacokinetics of butorphanol in broi…, The Veterinary record (2011) | popPK | 10 | [10.1136/vr.d1191](https://doi.org/10.1136/vr.d1191) | [21628341](https://pubmed.ncbi.nlm.nih.gov/21628341) | The paper reports quantitative pharmacokinetic parameters (clearance, volume, half-life, rate constants) for butorphanol in broiler chickens with all numeric values present in the abstract. |
| `Groenendaal_2008.pdf` | Groenendaal D et al., Pharmacokinetic/pharmacodynamic modelli…, European journal of pharmac… (2008) | popPK | 5 | [10.1016/j.ejps.2008.03.003](https://doi.org/10.1016/j.ejps.2008.03.003) | [18467078](https://pubmed.ncbi.nlm.nih.gov/18467078) | The study reports population PK/PD parameters (biophase distribution rate constants k1e and keo) for butorphanol, though it focuses on the PD effect (EEG) rather than traditional disposition parameters like CL or V. |

<sub>queue written 2026-10-07T04:53:37.755192+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anderson_2011 | not_relevant | 0 | 0 | The paper is a general review of pharmacokinetics and pharmacodynamics of systemic opioids and does not report pharmacogenomic effects or gene variant-specific changes in PK/PD parameters. |
| popPK | Basler_2026 | irrelevant | 0 | 0 | The study evaluates ventilation distribution using electrical impedance tomography in alpacas; butorphanol is used only as a sedative agent, and no pharmacokinetic parameters (e.g., clearance, volume, half-life) for butorphanol are reported. |
| popPK | Best_2024 | irrelevant | 0 | 0 | The study evaluates sedation scores and butorphanol is a co-administered sedative, not the subject of a pharmacokinetic analysis. |
| PGx | Cook_2000 | not_relevant | 0 | 0 | The paper investigates sex differences in opioid sensitivity, not the effect of a specific gene variant/genotype on the pharmacokinetics or pharmacodynamics of butorphanol. |
| popPK | Emmerson_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of opioid receptor binding and G-protein activation in C6 glioma cells, reporting binding affinities and functional EC50s rather than pharmacokinetic disposition parameters for butorphanol. |
| popPK | Gittel_2021 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of l-methadone, with butorphanol used only as a sedative agent for induction and not as the subject of PK analysis. |
| popPK | Grechko_2017 | irrelevant | 0 | 0 | The study assesses pharmacodynamic effects (respiratory depression, GI transit) rather than pharmacokinetic parameters (CL, Vd, half-life). |
| popPK | Groenendaal_2005 | irrelevant | 1 | 0 | The paper describes the development of an analytical method for quantifying butorphanol but does not report any pharmacokinetic parameters. |
| popPK | Guo_2023 | irrelevant | 0 | 0 | The study is a clinical trial evaluating the efficacy and safety of propofol combined with butorphanol for sedation, focusing on propofol's EC50 and adverse events, without reporting any pharmacokinetic parameters (e.g., clearance, volume, half-life) for butorphanol. |
| popPK | Manneveau_2018 | irrelevant | 0 | 0 | This is a study on the physiological effects of sedation protocols on the pharynx and larynx in horses, containing no pharmacokinetic parameters for butorphanol. |
| popPK | Su_2026 | irrelevant | 0 | 0 | The study measures the median effective concentration (EC50) of ropivacaine for nerve block, not pharmacokinetic parameters (clearance, volume, half-life) of butorphanol. |
| PGx | Terner_2003 | not_relevant | 1 | 0 | The study examines sex and rat strain differences in antinociception (a functional behavioral PD endpoint) rather than a specific gene variant altering the PK or PD of butorphanol. |
| popPK | Vandeputte_2020 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study reporting receptor potency (EC50) and efficacy, not pharmacokinetic disposition parameters. |
| popPK | VonVoigtlander_1983 | irrelevant | 0 | 0 | The study investigates pharmacodynamic physical dependence (withdrawal hyperalgesia) in mice and does not report any pharmacokinetic parameters for butorphanol. |
| PGx | Wen_2015 | not_relevant | 0 | 0 | The paper investigates the interaction between butorphanol and the ABCB1 transporter in leukemia cells to reverse multidrug resistance, but it does not report any pharmacogenomic effects (gene variants changing PK/PD) for butorphanol itself. |
| popPK | Yabaluri_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor down-regulation and G-protein coupling, reporting no pharmacokinetic disposition parameters (CL, V, t1/2) for butorphanol. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-07 04:53 UTC</sub>
