<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;zimeldine&quot;}]"></div>

# zimeldine

- **generic name:** zimeldine
- **ATC codes:** `N06AB02`
- **DrugBank:** [DB04832](https://go.drugbank.com/drugs/DB04832) · **PubChem:** none
- **groups:** approved, withdrawn

## About

Zimelidine is a selective serotonin reuptake inhibitor (SSRI) used as an antidepressant. Information on administration routes is not provided in the facts. The drug was withdrawn from the market due to rare case reports of a neurological side effect called Guillain–Barré syndrome.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q203483](https://www.wikidata.org/wiki/Q203483), [Wikipedia](https://en.wikipedia.org/wiki/Zimelidine?oldid=1373242152) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| zimeldine | parent | 317.23 | C16H17BrN2 | PubChem | [5365247](https://pubchem.ncbi.nlm.nih.gov/compound/5365247) | Ferry_1985 |
| norzimelidine | metabolite | 303.203 | C15H15BrN2 | PubChem | [6437872](https://pubchem.ncbi.nlm.nih.gov/compound/6437872) | Ferry_1985 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>blocking: C5 dimensioned parameter(s) without a unit: Q19 — no SI value to build from</sub> | [Ferry_1985_reference](drugs/drug_zimeldine/Zimeldine_Ferry1985_reference.md) | — | parent + metabolite (no model) | 3 | Ferry N et al., Influence of renal failure on the kinet…, European journal of clinica… (1985) | [10.1007/BF00544366](https://doi.org/10.1007/BF00544366) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 06:56 | 0:03 | 1/0/0 | 0/0/0 | 0/0/0 | 3,636/147 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aberg-Wistedt_1985 | irrelevant | 0 | 0 | The study focuses on clinical efficacy and biochemical markers (CSF metabolites, platelet uptake), not pharmacokinetic parameters like clearance or volume. |
| PD | Aberg-Wistedt_1985 | not_relevant | 1 | 0 | The study reports qualitative clinical and biochemical changes (MADRS scores, CSF metabolites, platelet uptake) at a fixed dose, but does not provide plasma concentrations or numeric PD parameters (e.g., EC50, Emax) to derive an exposure-response relationship. |
| PGx | Aberg-Wistedt_1985 | not_relevant | 0 | 0 | The paper compares the clinical and biochemical efficacy of zimeldine and alaproclate but does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Borg_1979 | irrelevant | 0 | 0 | no_text gate: only 186 chars of text extracted (&lt; 400) |
| PGx | Borg_1979 | not_relevant | 0 | 0 | The paper reports drug-drug interaction studies and standard pharmacokinetics, but does not investigate pharmacogenomic effects (gene variants) on zimeldine. |
| popPK | Brown_1980 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PGx | Brown_1980 | not_relevant | 0 | 0 | The paper describes general pharmacokinetics in human volunteers but does not report any pharmacogenomic effects (gene variants/genotypes) on PK/PD parameters. |
| popPK | Chrétien_2025 | irrelevant | 0 | 0 | The study is a pharmacovigilance analysis of hypertension reports and does not contain pharmacokinetic parameters for zimeldine. |
| PD | Chrétien_2025 | not_relevant | 1 | 0 | The paper is a pharmacovigilance disproportionality analysis that explicitly states no dose-response relationship was identified and provides no numeric PD parameters. |
| PGx | Chrétien_2025 | not_relevant | 0 | 0 | The paper reports adverse event reporting odds ratios for hypertension among SRI users, which is not a pharmacogenomic effect on PK or PD parameters. |
| popPK | Claghorn_1983 | irrelevant | 1 | 0 | The paper is a clinical tolerability/safety trial comparing zimeldine to amitriptyline and placebo, and does not report quantitative pharmacokinetic disposition parameters (CL, V, etc.). |
| PD | Claghorn_1983 | not_relevant | 0 | 0 | The paper reports only qualitative tolerability comparisons and mentions plasma levels were measured, but provides no numeric PD parameters, dose-response curves, or exposure-response analysis. |
| PGx | Claghorn_1983 | not_relevant | 0 | 0 | The paper reports a clinical tolerability trial comparing zimeldine to amitriptyline and placebo, but it does not investigate pharmacogenomic effects on PK or PD parameters. |
| popPK | Cronholm_1979 | irrelevant | 0 | 0 | The text is a review discussing the general importance of pharmacokinetics and mentions zimelidine only as an example of a drug with active metabolites, without providing any original quantitative PK data. |
| PGx | Cronholm_1979 | not_relevant | 1 | 2 | Mentions zimelidine only to note that clinical implications of dimethylated drug metabolism are obscure. |
| popPK | Dehlin_1981 | relevant | 8 | 2 | The study reports elimination half-lives and AUC trends for zimelidine in geriatric patients, but specific clearance (CL) and volume of distribution (V) values are not provided in the text. |
| PGx | Dehlin_1981 | not_relevant | 0 | 0 | The study examines pharmacokinetic changes associated with age (geriatric patients) rather than genetic variants, so it is not a pharmacogenomic study. |
| popPK | Dehlin_1984 | relevant | 5 | 0 | The study is a pharmacokinetic investigation of zimeldine in humans, but the provided evidence contains no quantitative parameters (CL, V, t1/2, etc.), only qualitative descriptions of plasma concentrations and metabolite ratios. |
| PD | Dehlin_1984 | not_relevant | 2 | 1 | The study reports PK linearity and clinical improvement but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative exposure-response model. |
| PGx | Dehlin_1984 | not_relevant | 0 | 0 | The study investigates pharmacokinetics in geriatric patients compared to younger adults, which is a study of population subgroups and age-related physiology, not a pharmacogenomic effect caused by a specific gene variant. |
| popPK | Fagan_1984 | irrelevant | 0 | 0 | Zimelidine is used as a co-administered agent to test for interactions with temazepam, not as the subject of the pharmacokinetic analysis. |
| PGx | Fagan_1984 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between zimelidine and temazepam, not a pharmacogenomic effect on zimelidine. |
| PGx | Ferry_1985 | not_relevant | 0 | 0 | The paper reports the effect of renal failure (a physiological/clinical condition) on the kinetics of zimeldine, not a genetic variant, genotype, or pharmacogenomic phenotype. |
| popPK | Gottfries_1986 | relevant | 10 | 2 | The paper describes a PK study of zimeldine in humans but the abstract only reports qualitative differences (higher AUC, longer half-life) without specific numeric values for CL, V, or t1/2. |
| PGx | Gottfries_1986 | not_relevant | 0 | 0 | The study evaluates PK changes due to liver status in alcoholics, not a specific gene variant, genotype, or pharmacogenomic phenotype. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | The paper investigates pharmacodynamic effects on adrenergic receptors in rats and does not report pharmacokinetic parameters for zimeldine. |
| PGx | Kopanski_1983 | not_relevant | 2 | 1 | The paper studies the effects of zimelidine on adrenergic receptor sensitivity in rats but does not report on gene variants/genotypes affecting PK or PD parameters (pharmacogenomics). |
| popPK | Linnoila_1986 | irrelevant | 0 | 0 | Zimelidine is used only as a probe drug to assess norepinephrine metabolism (MHPG production rate), and no pharmacokinetic parameters (CL, V, etc.) for zimelidine itself are reported. |
| PGx | Linnoila_1986 | not_relevant | 0 | 0 | The paper investigates the effect of zimeldine on norepinephrine metabolism in depressed patients but does not report any pharmacogenomic analysis or gene variants affecting PK/PD parameters. |
| PGx | Love_1981 | not_relevant | 0 | 0 | The paper describes standard pharmacokinetics in healthy adults and does not report any gene variants or pharmacogenomic effects. |
| popPK | Luthman_1997 | irrelevant | 0 | 0 | The study measures in vivo extracellular serotonin clearance in rat striatum using zimelidine only as a probe inhibitor, not as the subject drug for PK parameter estimation. |
| PGx | Luthman_1997 | not_relevant | 0 | 0 | The paper describes in vivo neurochemical experiments measuring serotonin clearance and the effects of zimelidine as a transporter inhibitor; it does not investigate the impact of any gene variant on the pharmacokinetics or pharmacodynamics of zimelidine. |
| popPK | McMahon_1987 | relevant | 9 | 2 | The paper reports qualitative changes in zimelidine's PK parameters (half-life, clearance, volume) in rats, but specific numeric values are not present in the provided evidence. |
| PGx | McMahon_1987 | not_relevant | 0 | 0 | The paper investigates the effect of age (a physiological factor) on zimeldine kinetics in rats, not a genetic variant or genotype. |
| popPK | Melander_1983 | irrelevant | 1 | 0 | The paper is a mechanistic review regarding food effects on presystemic clearance and mentions zimelidine only as a qualitative example of a drug unaffected by food, with no quantitative pharmacokinetic parameters provided. |
| PGx | Melander_1983 | not_relevant | 0 | 0 | The paper discusses food effects on zimelidine's presystemic clearance, not genetic or pharmacogenomic influences. |
| popPK | Njunge_1991 | irrelevant | 0 | 0 | The study is a behavioral pharmacology experiment in mice using zimeldine as a probe drug to test an anxiolytic model, and it reports no pharmacokinetic parameters (CL, V, t1/2, etc.). |
| PGx | Njunge_1991 | not_relevant | 0 | 0 | The paper describes preclinical behavioral pharmacology in mice and does not report any human pharmacogenomic variants or genotypes affecting PK or PD parameters. |
| popPK | Nyström_1986 | relevant | 4 | 0 | The study investigates zimeldine pharmacokinetics in humans and reports relationships between steady-state concentrations and treatment outcome, but no specific numeric disposition parameters (CL, V, etc.) are present in the provided evidence. |
| PGx | Nyström_1986 | not_relevant | 0 | 0 | The paper describes pharmacodynamic predictors (plasma effects on synaptosomes) and concentration-response relationships, but does not report any gene variants or genotypes affecting zimeldine's PK/PD. |
| popPK | Pottage_1983 | irrelevant | 0 | 0 | The paper discusses the cardiovascular safety profile and toxicity of zimeldine, not its pharmacokinetic parameters such as clearance or volume of distribution. |
| PD | Pottage_1983 | not_relevant | 1 | 0 | The text is a qualitative review of cardiovascular safety and toxicity, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| PGx | Pottage_1983 | not_relevant | 0 | 0 | The text describes general cardiovascular safety profile and toxicity comparisons with tricyclics, but reports no gene variant or genotype affecting PK/PD parameters. |
| popPK | Potter_1979 | irrelevant | 4 | 0 | The evidence describes the study design and qualitative findings (e.g., metabolite ratio) but contains no quantitative numeric values for clearance, volume, or other specific PK parameters. |
| PGx | Potter_1979 | not_relevant | 0 | 0 | The paper reports general pharmacokinetic variability and comparison with another drug, but does not link any genetic variant or genotype to changes in zimelidine PK/PD parameters. |
| popPK | Scott_1982 | irrelevant | 0 | 0 | The study is a pharmacodynamic/interaction study with no reported quantitative pharmacokinetic parameters (CL, V, ka) for zimelidine in the provided text. |
| PGx | Scott_1982 | not_relevant | 0 | 0 | The study investigates drug-drug interactions with ethanol in healthy volunteers, not the effect of genetic variants on zimelidine PK or PD. |
| popPK | Wallace_1987 | irrelevant | 0 | 0 | The paper is a review of plasma protein binding and does not report quantitative disposition parameters (CL, V, t1/2) for zimeldine. |
| PD | Wallace_1987 | not_relevant | 1 | 0 | The text is a review of plasma protein binding in the elderly and mentions zimeldine only as an example of a drug with altered free fraction, without providing any concentration-effect data, dose-response curves, or numeric PD parameters. |
| PGx | Wallace_1987 | not_relevant | 0 | 0 | The paper discusses the effect of age on plasma protein binding, not a gene variant or genotype, despite mentioning zimeldine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bzimeldine%5D&body=Drug%3A%20zimeldine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_zimeldine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 06:49 UTC</sub>
