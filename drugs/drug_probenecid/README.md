<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;M04A&quot;,&quot;href&quot;:&quot;atc/M04A.md&quot;},{&quot;label&quot;:&quot;probenecid&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Probenecid_Ahmad2021_reference&quot;,&quot;label&quot;:&quot;Ahmad_2021_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_probenecid/Probenecid_Ahmad2021_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;Probenecid_Stocker2012_reference&quot;,&quot;label&quot;:&quot;Stocker_2012_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_probenecid/Probenecid_Stocker2012_reference.md&quot;,&quot;status&quot;:&quot;Rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# probenecid

- **generic name:** probenecid
- **ATC codes:** `M04AB01`, `M04AC51`
- **DrugBank:** [DB01032](https://go.drugbank.com/drugs/DB01032) · **PubChem:** [CID 4911](https://pubchem.ncbi.nlm.nih.gov/compound/4911)
- **molar mass:** 285.359 g/mol (C13H19NO4S) — DrugBank
- **groups:** approved, investigational

## About

Probenecid is a medication used to treat gout, hyperuricemia, and gonorrhea. It is given orally in tablet or capsule form. It is approved for use in various regions.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q900898](https://www.wikidata.org/wiki/Q900898), [Wikipedia](https://en.wikipedia.org/wiki/Probenecid?oldid=1361384214) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Ahmad_2021_reference](drugs/drug_probenecid/Probenecid_Ahmad2021_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Ahmad A et al., Population pharmacokinetic modeling and…, CPT: pharmacometrics & syst… (2021) | [10.1002/psp4.12610](https://doi.org/10.1002/psp4.12610) |
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Cook_2025_reference](drugs/drug_probenecid/Probenecid_Cook2025_reference.md) | — | 1-compartment (no model) | 0 | Cook M et al., Evaluation of the Safety and Pharmacoki…, Journal of veterinary inter… (2025) | [10.1111/jvim.70221](https://doi.org/10.1111/jvim.70221) |
| <span class="pk-rf" hidden data-species="human" data-age="unknown" data-status="Rejected" data-sim="yes"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: paper_subject_is_other_drug</sub> | [Stocker_2012_reference](drugs/drug_probenecid/Probenecid_Stocker2012_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Stocker SL et al., The pharmacokinetics of oxypurinol in p…, British journal of clinical… (2012) | [10.1111/j.1365-2125.2012.04207.x](https://doi.org/10.1111/j.1365-2125.2012.04207.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--blue">Simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Catalina-Hernández_2024_Ca2_influx](drugs/drug_probenecid/pd_Catalina_Hern_ndez_2024_Ca2_influx.md) | Ca2+ influx (Fura-2 fluorescence ratio) biomarker turnover ← probenecid | — | Catalina-Hernández È et al., Experimental and computational biophysi…, Computational and structura… (2024) | [10.1016/j.csbj.2023.12.028](https://doi.org/10.1016/j.csbj.2023.12.028) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Hedaya_1989_AUCCSF](drugs/drug_probenecid/pd_Hedaya_1989_AUCCSF.md) | distribution into cerebrospinal fluid ← probenecid · stimulation effect | — | Hedaya MA et al., Effect of probenecid on the renal and n…, Journal of pharmaceutical s… (1989) | [10.1002/jps.2600780903](https://doi.org/10.1002/jps.2600780903) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rabbit), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rabbit</span> | [Hedaya_1989_CLR_AZT](drugs/drug_probenecid/pd_Hedaya_1989_CLR_AZT.md) | renal clearance of zidovudine ← probenecid · inhibition effect | — | Hedaya MA et al., Effect of probenecid on the renal and n…, Journal of pharmaceutical s… (1989) | [10.1002/jps.2600780903](https://doi.org/10.1002/jps.2600780903) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Verhagen_1994_tubular_excretion_of_cefuroxime](drugs/drug_probenecid/pd_Verhagen_1994_tubular_excretion_of_cefuroxime.md) | tubular excretion of cefuroxime ← probenecid · direct Emax (saturable) effect | — | Verhagen CA et al., The renal clearance of cefuroxime and c…, British journal of clinical… (1994) | [10.1111/j.1365-2125.1994.tb04260.x](https://doi.org/10.1111/j.1365-2125.1994.tb04260.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 03:27 | 2:02 | 0/3/0 | 4/0/0 | 0/0/0 | 222,012/12,217 | einfracz / qwen3.8-27b | 20 | 5/4 | 9/0 | 0 |

## Coverage

- **PubMed hits:** 71 matched, 20 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmad_2021 | irrelevant | 3 | 2 | Probenecid is used as a transporter inhibitor probe/comparator, not the subject drug, and its PK parameters are listed in a table that is not included in the provided text. |
| popPK | Boast_2026 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of flucloxacillin, mentioning probenecid only as a mechanistic comparator for OAT inhibition. |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | The paper is a review of NSAID drug interactions where probenecid is mentioned only as a co-administered agent that increases NSAID levels, with no probenecid PK parameters reported. |
| popPK | Catalina-Hernández_2024 | irrelevant | 0 | 0 | The study investigates probenecid as a pharmacological ligand for TRPV2 channels (mechanistic/pharmacodynamics) using in-vitro and ex-vivo assays, and does not report pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Csóka_2015 | irrelevant | 0 | 0 | Probenecid is used as a pannexin channel inhibitor (pharmacological tool) in a sepsis study in mice, not as the subject of a pharmacokinetic analysis. |
| popPK | Devineni_2015 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of canagliflozin, where probenecid is mentioned only as a comparator in drug-drug interaction studies. |
| popPK | Drennan_2021 | irrelevant | 0 | 0 | The study models the pharmacokinetics of flucloxacillin, where probenecid is only a co-administered drug affecting clearance, not the subject drug. |
| popPK | Faucette_2004 | irrelevant | 0 | 0 | The paper is an in-vitro study on CYP2B6 induction where probenecid is only a test compound, containing no pharmacokinetic parameters for probenecid. |
| popPK | Hampel_2021 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of NKCC1 inhibitors (bumetanide, azosemide, torasemide), with probenecid mentioned only as a diagnostic agent to probe efflux transport. |
| popPK | Hedaya_1989 | irrelevant | 1 | 0 | This study investigates the pharmacokinetics of zidovudine in rabbits where probenecid is used only as a co-administered inhibitor agent, not as the subject drug. |
| popPK | Kervezee_2017 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of morphine in rats, using probenecid only as a transporter inhibitor/comparator, and does not report PK parameters for probenecid itself. |
| popPK | Laskin_1982 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for acyclovir as the subject drug, with probenecid used only as a co-administered comparator to assess inhibition. |
| popPK | Overbosch_1988 | irrelevant | 1 | 0 | The study focuses on the renal tubular kinetics of benzylpenicillin, using probenecid solely as a competitive inhibitor/comparator to characterize penicillin transport; no quantitative disposition parameters (CL, V, half-life) for probenecid are reported. |
| popPK | Peng_2025 | irrelevant | 0 | 0 | The study investigates the nephrotoxicity of puberulic acid using human renal cell lines, and probenecid is only used as a mechanistic tool (OAT inhibitor) to investigate transport interactions, not as the subject drug for PK parameter estimation. |
| popPK | Rayner_2008 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of oseltamivir, with probenecid serving only as a co-administered agent affecting oseltamivir levels. |
| popPK | Staniforth_1984 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of Augmentin (amoxicillin and clavulanic acid), where probenecid is used solely as a co-administered drug to inhibit renal excretion, rather than as the subject drug. |
| popPK | Stocker_2012 | irrelevant | 2 | 5 | The study models oxypurinol pharmacokinetics where probenecid is a co-administered covariate, not the subject drug. |
| popPK | Ujihira_2025 | relevant | 4 | 5 | The study includes a population PK model for probenecid (one-compartment, first-order absorption) used as an inhibitor in DDI simulations, with parameters reported in Table 2 (referenced in text but table content not fully displayed in evidence, though some parameters like IIV are mentioned). |
| popPK | Verhagen_1994 | irrelevant | 1 | 0 | Probenecid is used only as a co-administered competitive inhibitor to study the tubular excretion of cephalosporins, not as the subject drug. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bprobenecid%5D&body=Drug%3A%20probenecid%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_probenecid/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-10-07 03:26 UTC</sub>
