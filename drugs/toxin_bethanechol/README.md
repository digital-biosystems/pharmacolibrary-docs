<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Bethanechol&quot;}]"></div>

# Bethanechol

- **generic name:** Bethanechol
- **T3DB:** [T3D2958](http://www.t3db.ca/toxins/T3D2958) · **DrugBank:** [DB01019](https://go.drugbank.com/drugs/DB01019) · **PubChem:** [CID 2370](https://pubchem.ncbi.nlm.nih.gov/compound/2370)
- **groups:** approved

## About

Bethanechol is a synthetic ester structurally and pharmacologically related to acetylcholine. A slowly hydrolyzed muscarinic agonist with no nicotinic effects, bethanechol is generally used to increase smooth muscle tone, as in the GI tract following abdominal surgery or in urinary retention in the absence of obstruction. It may cause hypotension, cardiac rate changes, and bronchial spasms. [PubChem]

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral
- **Sources and uses:** For the treatment of acute postoperative and postpartum nonobstructive (functional) urinary retention and for neurogenic atony of the urinary bladder with retention.
- **Mechanism of toxicity:** Bethanechol directly stimulates cholinergic receptors in the parasympathetic nervous system while stimulating the ganglia to a lesser extent. Its effects are predominantly muscarinic, inducing little effect on nicotinic receptors and negligible effects on the cardiovascular system.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2958">T3DB T3D2958</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 674-38-4 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:3084">ChEBI 3084</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Jeong_2025_reference](drugs/toxin_bethanechol/Bethanechol_Jeong2025_reference.md) | — | 1-compartment (no model) | 0 | Jeong HM et al., Release-modulating mechanism and compar…, International journal of ph… (2025) | [10.1016/j.ijpharm.2024.125091](https://doi.org/10.1016/j.ijpharm.2024.125091) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span> | [Balsiger_2003_contractile_activity](drugs/toxin_bethanechol/pd_Balsiger_2003_contractile_activity.md) | contractile activity ← bethanechol · model not identified | — | Balsiger BM et al., Neuronal adrenergic and muscular cholin…, Journal of gastrointestinal… (2003) | [10.1016/S1091-255X(02)00154-3](https://doi.org/10.1016/S1091-255X(02)00154-3) |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> | [Gilbert_1984_contraction](drugs/toxin_bethanechol/pd_Gilbert_1984_contraction.md) | contraction ← bethanechol · stimulation effect | — | Gilbert R et al., Pharmacologic identification, activatio…, The Journal of pharmacology… (1984) | — |
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Heacock_1987_phosphoinositide_turnover](drugs/toxin_bethanechol/pd_Heacock_1987_phosphoinositide_turnover.md) | phosphoinositide turnover ← bethanechol · stimulation effect | — | Heacock AM et al., Enhanced coupling of neonatal muscarini…, Journal of neurochemistry (1987) | [10.1111/j.1471-4159.1987.tb05754.x](https://doi.org/10.1111/j.1471-4159.1987.tb05754.x) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bethanechol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|

<sub>Actors without a tissue in the table: CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 07:23 | 12:00 | 0/1/0 | 3/0/0 | 0/0/0 | 401,861/18,406 | einfracz / qwen3.8-flash-next | 4 | 1/2 | 4/0 | 0 |

## Coverage

- **PubMed hits:** 220 matched, 119 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jeong_2025.pdf` | Jeong HM et al., Release-modulating mechanism and compar…, International journal of ph… (2025) | popPK | 8 | [10.1016/j.ijpharm.2024.125091](https://doi.org/10.1016/j.ijpharm.2024.125091) | [39701474](https://pubmed.ncbi.nlm.nih.gov/39701474) | The paper reports comparative pharmacokinetics (AUC ratios) for bethanechol in beagle dogs, but primary kinetic parameters like half-life are mentioned only qualitatively in the abstract and likely reside in the full text or tables not fully extracted here. |

<sub>queue written 2026-11-13 07:21 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adami_2010 | irrelevant | 0 | 0 | The paper describes a methodological protocol for measuring gastric acid secretion in rats where bethanechol is merely cited as a known stimulatory agent, with no quantitative toxicokinetic parameters or numeric data provided. |
| popPK | Balsiger_2003 | irrelevant | 0 | 0 | The paper reports dose-response sensitivity changes in tissue strips (pharmacodynamics) but no quantitative toxicokinetic parameters such as clearance, volume of distribution, half-life, or metabolic rate constants. |
| popPK | Baranowska-Daca_1995 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (drained volume increase) rather than any toxicokinetic parameters such as half-life, clearance, or partition coefficients for bethanechol. |
| popPK | Barger_1991 | irrelevant | 0 | 0 | The paper reports dose-response curves (ED10, ED50) for bethanechol in isolated tissue, which are pharmacodynamic potency measures, not quantitative toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Bech_1985 | irrelevant | 0 | 0 | Bethanechol is used only as a physiological stimulant/comparator to induce gastric flow, not as the subject of kinetic parameter measurement. |
| popPK | Bech_1986 | irrelevant | 0 | 0 | Bethanechol is used solely as a gastric secretion stimulant in a study focused on somatostatin, with no kinetic parameters reported for bethanechol. |
| popPK | Boros_1993 | irrelevant | 0 | 0 | The paper reports on secretory and enzymatic effects of H2 blockers on bethanechol-stimulated salivation, providing no quantitative toxicokinetic parameters for bethanechol. |
| popPK | Brodish_1995 | irrelevant | 0 | 0 | Bethanechol is used as a pharmacological stimulus for pancreatic secretion in a physiological study, with no quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd) reported. |
| popPK | Bruce_1978 | irrelevant | 1 | 0 | The study reports pharmacodynamic contractile responses in vitro, not quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for bethanechol. |
| PGx | Coleman_2004 | not_relevant | 0 | 0 | The paper does not report a pharmacogenomic effect on a PK or PD parameter for bethanechol; it characterizes a specific mouse strain but does not report bethanechol pharmacokinetic or pharmacodynamic parameters affected by genetic variation. |
| popPK | Crump_1988 | irrelevant | 0 | 0 | The paper is a clinical review of reflux esophagitis where bethanechol is mentioned only as a therapeutic agent in a list, with no toxicokinetic parameters provided. |
| popPK | Dahlgren_2023 | irrelevant | 0 | 0 | Bethanechol is used solely as a pharmacological agonist to investigate receptor mechanisms, and no toxicokinetic parameters (e.g., half-life, clearance, Vd) for bethanechol are reported. |
| popPK | DeVault_1987 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study measuring salivary flow and acid neutralization in response to bethanechol, reporting no toxicokinetic parameters (e.g., half-life, clearance, volume of distribution, partition coefficients). |
| popPK | Dormer_1981 | irrelevant | 2 | 0 | Bethanechol is used only as a pharmacological stimulus for calcium flux studies, with no kinetic disposition parameters for bethanechol itself reported. |
| popPK | Frazier_1983 | irrelevant | 0 | 0 | The paper is a clinical review of reflux esophagitis treatment mentioning bethanechol dosages but reports no quantitative toxicokinetic parameters. |
| popPK | Hasegawa_1987 | irrelevant | 0 | 0 | The paper reports pharmacodynamic dose-response data (ED50, maximal response) for bethanechol in an in vitro tissue preparation, not quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients). |
| popPK | Heacock_1987 | irrelevant | 0 | 0 | The paper reports on receptor efficacy and pharmacodynamics in rat brain slices, containing no toxicokinetic parameters for bethanechol. |
| popPK | Helm_1983 | irrelevant | 0 | 0 | The paper reports physiological outcomes of esophageal acid clearance and uses bethanechol only as a pharmacological agent to stimulate saliva, with no toxicokinetic parameters measured or modeled for bethanechol. |
| popPK | Higaki_2004 | irrelevant | 0 | 0 | Bethanechol is used as a pharmacological tool to modulate the intestinal absorption of phenol red; no toxicokinetic parameters for bethanechol itself are reported. |
| popPK | Hoshina_1985 | irrelevant | 0 | 0 | The paper studies a different compound (TEI-5103) and does not contain bethanechol or any toxicokinetic parameters for it. |
| popPK | Humphries_1981 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects on esophageal peristalsis parameters (amplitude, velocity) rather than toxicokinetic parameters (e.g., clearance, half-life, Vd). |
| popPK | Iwatsuki_1989 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic receptor subtype characterization (pA2 values, secretion rates) rather than quantitative toxicokinetic parameters like half-life or clearance. |
| popPK | Jacobson_1966 | irrelevant | 0 | 0 | Bethanechol is used only as a secretagogue to stimulate gastric secretion; the quantitative kinetic/clearance parameters reported are for aminopyrine, not bethanechol. |
| popPK | Johnson_1981 | irrelevant | 0 | 0 | The paper reports clinical efficacy outcomes (reflux frequency and acid clearance time) for bethanechol treatment but provides no quantitative toxicokinetic parameters such as half-lives, clearance, or partition coefficients. |
| popPK | Kapila_1984 | irrelevant | 1 | 0 | Bethanechol is used only as a pharmacological agent to stimulate salivary flow and swallowing; no toxicokinetic parameters (half-life, clearance, etc.) are reported. |
| popPK | Kiràly_1994 | irrelevant | 0 | 0 | Bethanechol is used as a pharmacological tool to induce gastric hyperemia, but no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients) are reported. |
| popPK | Kwon_1999 | irrelevant | 0 | 0 | Bethanechol is used solely as a contractile agonist to measure secretin's inhibitory effects; no toxicokinetic parameters for bethanechol are reported. |
| popPK | Lester_1998 | irrelevant | 0 | 0 | The paper reports on the effect of bethanechol on gastrointestinal motility (cecal emptying time of markers), not on the toxicokinetic disposition parameters (such as half-life, clearance, or volume of distribution) of bethanechol itself. |
| popPK | Leuchter_1991 | irrelevant | 0 | 0 | The paper reports clinical dose-response and EEG data in Alzheimer's patients with no pharmacokinetic parameters reported. |
| popPK | McCallum_1983 | irrelevant | 0 | 0 | The paper reports on the pharmacological effect of bethanechol on gastric emptying rates but does not provide any quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | McLean_2015 | irrelevant | 0 | 0 | The paper studies immunological effects of bethanechol on macrophage phenotype and bacterial clearance, reporting no quantitative toxicokinetic parameters for bethanechol. |
| popPK | Miller_1977 | irrelevant | 0 | 0 | The study measures pharmacodynamic effects (esophageal pressure, reflux frequency, acid clearance time) rather than quantitative toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Nelson_1985 | irrelevant | 0 | 0 | The paper is a review of reflux esophagitis treatment and pathogenesis with no mention of bethanechol toxicokinetics or quantitative parameters. |
| popPK | Nowak_1990 | irrelevant | 0 | 0 | The paper reports on intestinal muscle morphology in diabetic rodents and mentions bethanechol only as a pharmacological agent used in in vitro dose-response studies, with no quantitative toxicokinetic parameters reported. |
| popPK | Nowak_1990_2 | irrelevant | 0 | 0 | The paper discusses the effect of bethanechol on muscle contraction tension in diabetic rats but reports no quantitative toxicokinetic parameters. |
| popPK | Ohe_1981 | irrelevant | 0 | 0 | The paper reports on cyclic nucleotide (cAMP/cGMP) dose-response dynamics and acid secretion, containing no toxicokinetic parameters (e.g., half-life, clearance, partition coefficients) for bethanechol. |
| popPK | Ohtani_2000 | irrelevant | 0 | 0 | Bethanechol is used solely as a cholinergic agonist comparator in an ex vivo pharmacology study with no reported toxicokinetic parameters or absorption data. |
| popPK | Ossakow_1987 | irrelevant | 1 | 0 | Bethanechol is used only as a pharmacological probe for esophageal motility testing, with no toxicokinetic parameters reported. |
| popPK | Overhaus_2006 | irrelevant | 0 | 0 | The paper focuses on biliverdin's protective effects against sepsis-induced inflammation; bethanechol is used merely as a pharmacological agent to induce muscle contraction in organ bath experiments, with no toxicokinetic parameters reported for bethanechol. |
| popPK | Pfeiffer_1988 | irrelevant | 0 | 0 | Bethanechol is used only as a comparator/agontist in a mechanistic receptor binding assay; no toxicokinetic parameters (half-life, clearance, volume) are reported for it. |
| popPK | Phaosawasdi_1981 | irrelevant | 0 | 0 | The paper studies esophageal physiology and drug effects, not toxicokinetic parameters (half-life, clearance, Vd, etc.) for bethanechol. |
| popPK | Poli_1992 | irrelevant | 0 | 0 | Bethanechol is used merely as a pharmacological agonist in an isolated tissue study; no toxicokinetic parameters are reported. |
| popPK | Pomeranz_1988 | irrelevant | 0 | 0 | The paper describes an in vitro organ bath study on smooth muscle contraction mechanisms (pharmacodynamics) using bethanechol as an agonist, reporting no toxicokinetic parameters (absorption, distribution, metabolism, excretion) for bethanechol. |
| popPK | Richter_1981 | irrelevant | 0 | 0 | The paper discusses bethanechol only as a comparator drug for clinical treatment without reporting any quantitative toxicokinetic parameters. |
| popPK | Richter_1982 | irrelevant | 0 | 0 | The paper is a general review of gastroesophageal reflux disease pathogenesis and therapy, containing no specific toxicokinetic parameters for bethanechol. |
| popPK | Roberts_1983 | irrelevant | 0 | 0 | The paper reports on protein phosphorylation mechanisms in the mouse pancreas using bethanechol as a stimulus, providing no toxicokinetic parameters. |
| popPK | Robinson_1984 | irrelevant | 0 | 0 | The paper discusses the pathophysiology and management of reflux esophageal disease with no mention of bethanechol, let alone quantitative toxicokinetic parameters. |
| popPK | Rubin_1981 | irrelevant | 1 | 0 | The paper reports pharmacodynamic dose-response effects on sphincter pressure, not toxicokinetic parameters. |
| popPK | Schapira_1990 | irrelevant | 0 | 0 | The paper is a review of other prokinetic drugs (metoclopramide, domperidone, cisapride) and does not report any quantitative toxicokinetic parameters for bethanechol. |
| popPK | Schmidt_1981 | irrelevant | 0 | 0 | The paper studies pancreatic secretion physiology and receptor mechanisms (atropine interaction) in dogs, reporting no quantitative toxicokinetic parameters such as half-life, clearance, or partition coefficients for bethanechol. |
| popPK | Shibata_1997 | irrelevant | 0 | 0 | Bethanechol is used as a pharmacological challenge agent to measure sensitivity (ED50) in an organ bath study, but no kinetic parameters (half-life, clearance, partition coefficients, etc.) for bethanechol are reported. |
| popPK | Shibata_2004 | irrelevant | 0 | 0 | The paper reports dose-response pharmacodynamics in isolated tissue, not quantitative toxicokinetic parameters (half-life, clearance, etc.) for bethanechol. |
| popPK | Sondheimer_1986 | irrelevant | 1 | 1 | The paper reports pharmacodynamic effects on esophageal motor function rather than quantitative toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Stephens_1989 | irrelevant | 0 | 0 | Bethanechol is used only as a peripheral stimulant/control substance in a study of serotonin depletion and vagal stimulation, with no kinetic parameters reported for it. |
| popPK | Tytgat_1989 | irrelevant | 0 | 0 | The paper is a review of drug therapy for reflux oesophagitis and does not report any quantitative toxicokinetic parameters for bethanechol. |
| popPK | Ueno_2004 | irrelevant | 0 | 0 | The paper reports pharmacological dose-response characteristics (ED50) for contractile activity in isolated tissue but provides no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Vaccaro_1987 | irrelevant | 0 | 0 | no_text gate: only 373 chars of text extracted (&lt; 400) |
| popPK | Watanabe_1993 | irrelevant | 0 | 0 | The paper investigates the pharmacological effect of cimetidine and famotidine on bethanechol-induced acid secretion in an isolated tissue, reporting no toxicokinetic parameters (absorption, distribution, metabolism, excretion) for bethanechol. |
| popPK | Wrzos_2004 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamics (smooth muscle contraction mechanisms) and reports no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients). |
| popPK | Xu_1992 | irrelevant | 0 | 0 | The paper focuses on bile salt effects on intestinal motility, with bethanechol used only as a control agonist and no toxicokinetic parameters reported. |
| popPK | Zhang_2025 | irrelevant | 0 | 0 | Bethanechol is used as a comparator drug in a snakebite protection study, with no pharmacokinetic parameters reported for the substance itself. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bbethanechol%5D&body=Drug%3A%20bethanechol%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_bethanechol/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 07:21 UTC</sub>
