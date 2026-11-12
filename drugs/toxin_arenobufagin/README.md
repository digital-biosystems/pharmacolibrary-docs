<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Animal toxins&quot;,&quot;href&quot;:&quot;toxins/ANIM.md&quot;},{&quot;label&quot;:&quot;Arenobufagin&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Arenobufagin_Li2022_reference&quot;,&quot;label&quot;:&quot;Li_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/toxin_arenobufagin/Arenobufagin_Li2022_reference.md&quot;,&quot;status&quot;:&quot;Needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# Arenobufagin

- **generic name:** Arenobufagin
- **T3DB:** [T3D2532](http://www.t3db.ca/toxins/T3D2532) · **PubChem:** [CID 10051](https://pubchem.ncbi.nlm.nih.gov/compound/10051)

## About

Arenobufagin is a cardiotoxic bufanolide steroid secreted by the Argentine toad (Bufo arenarum). It blocks the sodium/potassium pump in heart tissue.

- **Category:** Animal Toxin, Natural Toxin
- **Route of exposure:** injection (sting/bite), inhalation (smoking)
- **Sources and uses:** Arenobufagin is secreted by the Argentine toad (Bufo arenarum).
- **Mechanism of toxicity:** Arenobufagin blocks the sodium/potassium pump in heart tissue.
- **Health effects:** Arenobufagin is cardiotoxic.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2532">T3DB T3D2532</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 464-74-4</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| arenobufagin | parent | 416.5 | C24H32O6 | PubChem | [10051](https://pubchem.ncbi.nlm.nih.gov/compound/10051) | Yuan_2017 |

## Start here

> **Li_2022_reference** — <span class="pk-badge pk-badge--orange">Needs review</span> review reference. [Run it in the simulator](drugs/toxin_arenobufagin/Arenobufagin_Li2022_reference.md?tab=Simulation) · [record](drugs/toxin_arenobufagin/Arenobufagin_Li2022_reference.md)

<sub>Chosen automatically: the best-status record that runs in the browser, preferring a healthy, human population and values taken from the paper.</sub>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Needs review" data-sim="yes"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: unreported model parameter default(s): ka</sub> | [Li_2022_reference](drugs/toxin_arenobufagin/Arenobufagin_Li2022_reference.md) | ▶ model + simulator | 1-compartment, oral | 2 | Li M et al., Comparative Pharmacokinetics of Cinobuf…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.944041](https://doi.org/10.3389/fphar.2022.944041) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [Yuan_2017_abg_pns](drugs/toxin_arenobufagin/Arenobufagin_Yuan2017_abg_pns.md) | — | 1-compartment (no model) | 8 | Yuan X et al., Systemic delivery of the anticancer age…, International journal of na… (2017) | [10.2147/IJN.S139128](https://doi.org/10.2147/IJN.S139128) |
| <span class="pk-rf" hidden data-species="rat" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: C5 dimension mismatch on a structural parameter — unit dimension conflicts with…</sub> | [↳ abg_sol](drugs/toxin_arenobufagin/Arenobufagin_Yuan2017_abg_sol.md) | — | 1-compartment (no model) | 8 |  |  |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-09 20:43 | 13:18 | 1/2/0 | 0/0/0 | 0/0/0 | 211,385/29,638 | einfracz / qwen3.8-27b | 4 | 0/3 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 22 matched, 22 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 3  ·  extracted 0  ·  needs review 1  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Li_2013.pdf` | Li G et al., Quantitative determination of arenobufa…, Journal of chromatography.… (2013) | popPK | 10 | [10.1016/j.jchromb.2013.09.019](https://doi.org/10.1016/j.jchromb.2013.09.019) | [24113236](https://pubmed.ncbi.nlm.nih.gov/24113236) | The paper describes a pharmacokinetic study of arenobufagin in rats, but the specific numeric kinetic parameters (e.g., Cmax, AUC, t1/2) are not provided in the extracted evidence text. |
| `Ren_2025.pdf` | Ren J et al., Integrated pharmacokinetics and multidi…, Journal of pharmaceutical a… (2025) | popPK | 10 | [10.1016/j.jpba.2025.117118](https://doi.org/10.1016/j.jpba.2025.117118) | [40848656](https://pubmed.ncbi.nlm.nih.gov/40848656) | The paper reports quantitative pharmacokinetic parameters for arenobufagin using non-compartmental modeling, but the specific numeric values are not visible in the provided evidence. |
| `Huang_2015.pdf` | Huang H et al., Pharmacokinetics and tissue distributio…, Journal of ethnopharmacology (2015) | popPK | 9 | [10.1016/j.jep.2014.07.056](https://doi.org/10.1016/j.jep.2014.07.056) | [25196822](https://pubmed.ncbi.nlm.nih.gov/25196822) | The paper reports pharmacokinetics of arenobufagin in mice, but specific numeric parameter values are not present in the provided text evidence. |
| `Liu_2024.pdf` | Liu Y et al., Comparative study on pharmacokinetics o…, Journal of pharmaceutical a… (2024) | popPK | 9 | [10.1016/j.jpba.2024.116375](https://doi.org/10.1016/j.jpba.2024.116375) | [39083920](https://pubmed.ncbi.nlm.nih.gov/39083920) | The paper reports pharmacokinetic parameters (AUC, clearance, t1/2) for arenobufagin in rats, but the specific numeric values are presented as percentages of increase relative to the control group, with absolute values likely contained in missing tables or figures. |
| `Zhao_2024.pdf` | Zhao J et al., Quantification of nine bufadienolides o…, Journal of pharmaceutical a… (2024) | popPK | 9 | [10.1016/j.jpba.2023.115852](https://doi.org/10.1016/j.jpba.2023.115852) | [37952449](https://pubmed.ncbi.nlm.nih.gov/37952449) | The paper reports pharmacokinetic studies of arenobufagin in rats, but specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-11-09 20:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Feng_2017 | not_relevant | 0 | 0 | The study characterizes in vitro CYP3A-mediated metabolism but does not report any pharmacogenomic associations (genotype/phenotype) affecting PK or PD parameters. |
| PGx | Han_2016 | not_relevant | 0 | 0 | The study analyzes in vitro metabolism and cytotoxicity of bufadienolides but does not investigate pharmacogenomic variants or their effect on PK/PD parameters in humans. |
| popPK | Huang_2015 | relevant | 9 | 3 | The paper reports pharmacokinetics of arenobufagin in mice, but specific numeric parameter values are not present in the provided text evidence. |
| popPK | Li_2013 | relevant | 10 | 0 | The paper describes a pharmacokinetic study of arenobufagin in rats, but the specific numeric kinetic parameters (e.g., Cmax, AUC, t1/2) are not provided in the extracted evidence text. |
| popPK | Li_2022 | relevant | 9 | 2 | The paper reports quantitative pharmacokinetic parameters (AUC, MRT, t1/2, CL/F) for arenobufagin in rats, but the specific numeric values are located in Tables 5 and 6 which are not included in the provided evidence. |
| popPK | Liang_2008 | irrelevant | 1 | 0 | The paper describes the development and validation of an analytical method (SPE-HPLC) and reports only analytical parameters (calibration ranges, LQs); no quantitative kinetic parameters (e.g., Cmax, AUC, t1/2, Cl) for arenobufagin are provided in the evidence, although the abstract mentions the method was applied to a pharmacokinetic study. |
| popPK | Liu_2024 | relevant | 9 | 2 | The paper reports pharmacokinetic parameters (AUC, clearance, t1/2) for arenobufagin in rats, but the specific numeric values are presented as percentages of increase relative to the control group, with absolute values likely contained in missing tables or figures. |
| popPK | Ren_2025 | relevant | 10 | 1 | The paper reports quantitative pharmacokinetic parameters for arenobufagin using non-compartmental modeling, but the specific numeric values are not visible in the provided evidence. |
| popPK | Siddiqui_2026 | irrelevant | 1 | 0 | The paper is a review article that summarizes qualitative pharmacokinetic properties (rapid absorption, gradual elimination) and efficacy data but does not report specific quantitative kinetic parameters such as half-life, clearance, or rate constants. |
| popPK | Xu_2007 | irrelevant | 1 | 0 | The paper is an analytical method development study for quantifying arenobufagin in rat plasma; it reports method validation parameters (linearity, recovery) but does not present quantitative pharmacokinetic parameters (such as half-life, clearance, or Cmax) for arenobufagin in the provided evidence. |
| popPK | Zhao_2021 | relevant | 10 | 1 | The paper reports toxicokinetic parameters for arenobufagin in rats, but the specific numeric values (e.g., AUC, CL, half-life) are not present in the provided text or numeric parameter lines, likely residing in figures or supplementary material. |
| popPK | Zhao_2024 | relevant | 9 | 0 | The paper reports pharmacokinetic studies of arenobufagin in rats, but specific numeric parameter values are not present in the provided evidence text. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Barenobufagin%5D&body=Drug%3A%20arenobufagin%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_arenobufagin/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-09 20:36 UTC</sub>
