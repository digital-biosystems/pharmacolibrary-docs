<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Phenelzine&quot;}]"></div>

# Phenelzine

- **generic name:** Phenelzine
- **T3DB:** [T3D2889](http://www.t3db.ca/toxins/T3D2889) · **DrugBank:** [DB00780](https://go.drugbank.com/drugs/DB00780) · **PubChem:** [CID 3675](https://pubchem.ncbi.nlm.nih.gov/compound/3675)
- **groups:** approved, investigational

## About

Phenelzine is only found in individuals that have used or taken this drug. It is an irreversible non-selective inhibitor of monoamine oxidase. May be used to treat major depressive disorder.Although the exact mechanism of action has not been determined, it appears that the irreversible, nonselective inhibition of MAO by phenelzine relieves depressive symptoms by causing an increase in the levels of serotonin, norepinephrine, and dopamine in the neuron.

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** readily absorbed after oral administration.
- **Sources and uses:** For the treatment of major depressive disorder. Has also been used with some success in the management of bulimia nervosa.
- **Mechanism of toxicity:** Although the exact mechanism of action has not been determined, it appears that the irreversible, nonselective inhibition of MAO by phenelzine relieves depressive symptoms by causing an increase in the levels of serotonin, norepinephrine, and dopamine in the neuron.
- **Carcinogenicity:** IARC group 3, not classifiable as to its carcinogenicity to humans.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2889">T3DB T3D2889</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 51-71-8 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:248018">ChEBI 248018</a></small></p>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Baker_1991_GABA](drugs/toxin_phenelzine/pd_Baker_1991_GABA.md) | GABA levels in rat whole brain ← phenelzine · stimulation effect | — | Baker GB et al., Effects of the antidepressant phenelzin…, Journal of affective disord… (1991) | [10.1016/0165-0327(91)90041-p](https://doi.org/10.1016/0165-0327(91)90041-p) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=phenelzine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | brain | `CYP2D6` inhibitor, `MAOA` substrate/target, `MAOB` substrate/target | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP2C19` inhibitor, `CYP2C8` inhibitor, `CYP2D6` inhibitor, `CYP2E1` inducer, `CYP3A4` inhibitor, `CYP3A5` inhibitor, `CYP3A7` inhibitor, `MAOA` substrate/target | DrugBank actor |
| metabolism | platelet | `MAOB` substrate/target | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor, `CYP3A5` inhibitor, `MAOA` substrate/target | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: ABAT (inhibitor), AOC3 (inhibitor), GAD65 (inhibitor), GPT (inhibitor), GPT2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-12 16:37 | 7:14 | 0/0/0 | 1/0/0 | 0/0/0 | 208,920/8,099 | einfracz / qwen3.8-flash-next | 2 | 1/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 74 matched, 73 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_4 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Robinson_1978.pdf` | Robinson DS et al., Clinical pharmacology of phenelzine, Archives of general psychia… (1978) | popPK | 8 | [10.1001/archpsyc.1978.01770290111010](https://doi.org/10.1001/archpsyc.1978.01770290111010) | [365127](https://pubmed.ncbi.nlm.nih.gov/365127) | The paper discusses clinical pharmacology including dosing per body weight, but the provided evidence contains no quantitative kinetic parameters such as half-life, clearance, or volume of distribution. |
| `Izzo_2009.pdf` | Izzo AA et al., Interactions between herbal medicines a…, Drugs (2009) | pgx | 7 | [10.2165/11317010-000000000-00000](https://doi.org/10.2165/11317010-000000000-00000) | [19719333](https://www.ncbi.nlm.nih.gov/pubmed/19719333) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Nirogi_2015.pdf` | Nirogi R et al., Evaluation of metabolism dependent inhi…, Chemico-biological interact… (2015) | pgx | 7 | [10.1016/j.cbi.2015.01.028](https://doi.org/10.1016/j.cbi.2015.01.028) | [25656918](https://www.ncbi.nlm.nih.gov/pubmed/25656918) | metadata signals extractable PGX data (CYP2B6, PK/PD-context) |
| `Polasek_2006.pdf` | Polasek TM et al., An evaluation of potential mechanism-ba…, British journal of clinical… (2006) | pgx | 7 | [10.1111/j.1365-2125.2006.02627.x](https://doi.org/10.1111/j.1365-2125.2006.02627.x) | [16669850](https://www.ncbi.nlm.nih.gov/pubmed/16669850) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-11-12 16:36 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Anari_1997 | not_relevant | 0 | 0 | The paper discusses the metabolic activation of phenelzine by hydroperoxides via CYP1A2 but does not investigate any pharmacogenomic variants, genotypes, or phenotypes affecting PK or PD parameters. |
| popPK | Baker_1991 | irrelevant | 1 | 0 | The paper reports pharmacodynamic effects on GABA levels rather than toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Benmansour_1999 | irrelevant | 0 | 0 | The paper investigates pharmacodynamic effects (serotonin transporter density/function) rather than toxicokinetic parameters like half-life, clearance, or volume of distribution. |
| popPK | Boden_1984 | irrelevant | 0 | 0 | Phenelzine is used as a pre-treatment inhibitor to study pethidine toxicity, and no kinetic parameters for phenelzine itself are reported. |
| popPK | Botting_1978 | irrelevant | 0 | 0 | The paper reports pharmacodynamic interactions and toxic outcomes (LD50, analgesia) rather than quantitative toxicokinetic parameters like half-life or clearance. |
| popPK | Bélanger_1983 | irrelevant | 2 | 8 | The quantitative kinetic parameters reported (half-life, Vd, clearance) belong to antipyrine, not phenelzine; phenelzine is only the inhibitor and its Ki/Ks are in vitro inhibition constants, not in vivo toxicokinetic parameters for phenelzine. |
| popPK | Collier_1968 | irrelevant | 0 | 0 | The paper reports pharmacodynamic antagonism potency of phenelzine in guinea-pigs but contains no quantitative toxicokinetic parameters. |
| popPK | Dollery_1983 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for tyramine and cimoxatone, mentioning phenelzine only as a comparator drug in the abstract text without providing any kinetic parameters for it. |
| PGx | EVANS_1964 | not_relevant | 0 | 0 |  |
| popPK | Fowler_1987 | irrelevant | 0 | 0 | The paper studies the kinetics of radiolabeled tracers ([11C]clorgyline and [11C]deprenyl), with phenelzine only mentioned as a pretreatment to block MAO enzymes, not as the subject of kinetic measurement. |
| popPK | Georgotas_1983 | irrelevant | 0 | 0 | The paper reports clinical efficacy and platelet MAO inhibition (a pharmacodynamic marker) but provides no quantitative toxicokinetic parameters such as half-lives, clearance, or volume of distribution. |
| popPK | Gupta_1985 | irrelevant | 2 | 0 | The study measures pharmacodynamic MAO inhibition in patients but reports no quantitative toxicokinetic parameters for phenelzine. |
| popPK | Hoque_2010 | irrelevant | 0 | 0 | The paper is a qualitative literature review on drug-induced sleep disorders with no quantitative toxicokinetic parameters for phenelzine. |
| popPK | Hsu_1995 | irrelevant | 0 | 0 | The paper is a clinical study on sexual side effects, reporting no quantitative toxicokinetic parameters for phenelzine. |
| popPK | Hu_2005 | irrelevant | 0 | 0 | Phenelzine is mentioned only as a drug involved in a pharmacodynamic interaction (induced mania) with ginseng, with no toxicokinetic parameters reported. |
| popPK | Inan_2020 | irrelevant | 1 | 0 | The paper is a review where phenelzine is only listed as a comparator drug for interactions with 4-FA and 2C-B, with no kinetic parameters reported for phenelzine itself. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | The paper is a systematic review of herbal-drug interactions where phenelzine is only mentioned as a drug involved in a potential interaction with ginseng, with no quantitative toxicokinetic parameters reported for phenelzine itself. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper discusses herb-drug interactions involving phenelzine but does not report on pharmacogenomic effects (gene variants) on phenelzine's PK or PD parameters. |
| popPK | Kallem_2016 | irrelevant | 3 | 0 | The evidence describes an analytical method for phenelzine but does not report any specific pharmacokinetic parameter values (e.g., half-life, clearance, Cmax, AUC) in the provided text. |
| popPK | Ketter_1995 | irrelevant | 0 | 0 | The study focuses on clinical safety and efficacy, explicitly noting no significant changes in pharmacokinetics without providing any kinetic parameter values for phenelzine. |
| popPK | Kruse_1977 | irrelevant | 0 | 0 | The paper is a pharmacological study on nomifensine metabolites in mice and rats; phenelzine is only used as a comparator drug, and no kinetic parameters for phenelzine are reported. |
| popPK | Kuik_2026 | irrelevant | 2 | 0 | The paper reports receptor occupancy and binding potential of a PET tracer ([11C]SL25.1188) in the presence of phenelzine, but provides no toxicokinetic parameters (ADME, half-life, clearance, etc.) for phenelzine itself. |
| popPK | Kumar_1998 | irrelevant | 1 | 0 | Phenelzine is used as a pharmacological modulator/comparator in a study on allylamine and beta-aminopropionitrile, with no toxicokinetic parameters reported for phenelzine itself. |
| popPK | Laino_1993 | irrelevant | 0 | 0 | The paper reports on behavioral effects (anxiolytic/anticonflict) of phenelzine in rats but contains no quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Leite_1989 | irrelevant | 0 | 0 | The paper describes an in vitro chemical/mechanistic study of radical formation and DNA damage, providing no quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for phenelzine disposition in a biological system. |
| popPK | Mahgoub_1987 | irrelevant | 0 | 0 | The paper reports only clinical therapeutic outcomes (alleviation of symptoms) and does not provide any quantitative toxicokinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Makhay_1999 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study reporting drug discrimination in rats, with no toxicokinetic parameters for phenelzine. |
| popPK | Malcolm_1994 | irrelevant | 0 | 0 | The paper reports a vitamin B6 outcome related to phenelzine exposure but provides no toxicokinetic parameters such as half-life, clearance, or volume of distribution for phenelzine. |
| popPK | Mallinger_1991 | irrelevant | 1 | 0 | The provided evidence is a review abstract that mentions phenelzine but contains no quantitative kinetic parameters or numeric values. |
| popPK | Manassis_2016 | irrelevant | 0 | 0 | The paper is a clinical systematic review of efficacy in selective mutism and contains no toxicokinetic parameters for phenelzine. |
| popPK | McKim_1983 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects on amine levels, not quantitative toxicokinetic parameters like half-life, clearance, or Vd. |
| popPK | Meyer_1982 | irrelevant | 0 | 0 | The text mentions phenelzine only in the context of genetic polymorphisms affecting metabolism rates, providing no quantitative kinetic parameters, concentrations, or model data. |
| popPK | Moretti_1987 | irrelevant | 0 | 0 | Phenelzine is used as a co-administered drug to test effects on the biodistribution of N-isopropyl p-iodoamphetamine (IMP), not as the subject substance for kinetic parameter extraction. |
| PGx | Nirogi_2015 | not_relevant | 0 | 0 | The study investigates CYP2B6 inhibition by phenelzine in human liver microsomes but does not evaluate genetic variants or genotypes affecting PK/PD parameters. |
| popPK | Noyes_1997 | irrelevant | 0 | 0 | The paper reports on the efficacy of moclobemide for social phobia; phenelzine is mentioned only in the introduction as a comparator for context, with no kinetic parameters reported for phenelzine. |
| popPK | ODonnell_1990 | irrelevant | 0 | 0 | The paper reports on behavioral effects and receptor density changes in rats, with phenelzine used only as a comparator to show lack of interaction with beta-2 downregulation; no quantitative toxicokinetic parameters (half-lives, clearance, etc.) for phenelzine are reported. |
| popPK | Oellerich_1980 | irrelevant | 0 | 0 | Phenelzine is mentioned only as a comparator substance in a qualitative in vitro enzyme inhibition context, with no kinetic parameters provided. |
| PGx | Otton_1990 | not_relevant | 0 | 0 | The paper focuses on propranolol metabolism; phenelzine is only mentioned as an inhibitor in the methodology to probe enzyme specificity, with no pharmacokinetic or pharmacodynamic data reported for phenelzine itself. |
| PGx | Polasek_2004 | not_relevant | 0 | 0 | The paper reports in vitro enzyme kinetics (CYP2C8 inactivation) but does not report pharmacogenomic effects on human PK/PD parameters. |
| popPK | Polasek_2006 | irrelevant | 2 | 5 | The paper reports enzyme inhibition constants (KI and kinact) for phenelzine's effect on cytochromes P450, which are enzymatic interaction parameters, not phenelzine's own toxicokinetic disposition parameters (e.g., half-life, clearance, volume of distribution). |
| PGx | Polasek_2006 | not_relevant | 0 | 0 | The study investigates the direct mechanism-based inactivation of CYP enzymes by phenelzine and other MAO inhibitors, without assessing any genetic variants or genotypes affecting phenelzine pharmacokinetics or pharmacodynamics. |
| popPK | Quitkin_1985 | irrelevant | 0 | 0 | The paper is a clinical review of dosing guidelines for depression, reporting no quantitative toxicokinetic parameters for phenelzine. |
| popPK | Quitkin_1992 | irrelevant | 0 | 0 | The paper discusses clinical efficacy and dosing methodology for antidepressants without reporting any quantitative toxicokinetic parameters such as half-lives, clearances, or partition coefficients. |
| popPK | Race_2026 | irrelevant | 1 | 0 | Phenelzine is mentioned only as an example of a scavenger in a review about acrolein, with no toxicokinetic parameters reported. |
| popPK | Ravaris_1976 | irrelevant | 1 | 0 | The study reports clinical efficacy and MAO inhibition percentages but contains no quantitative toxicokinetic parameters (e.g., half-life, clearance, volume of distribution) for phenelzine. |
| popPK | Robinson_1978 | relevant | 8 | 0 | The paper discusses clinical pharmacology including dosing per body weight, but the provided evidence contains no quantitative kinetic parameters such as half-life, clearance, or volume of distribution. |
| popPK | Robinson_1985 | irrelevant | 2 | 1 | The paper discusses metabolism pathways but reports only aggregate excretion percentages (79% in 96h) rather than quantitative kinetic parameters like clearance, half-life, or volume of distribution. |
| popPK | Rosenblat_1987 | irrelevant | 0 | 0 | The paper reports prescribed clinical dosages, not quantitative toxicokinetic parameters like half-life, clearance, or partition coefficients. |
| PGx | Sakata_2013 | not_relevant | 1 | 0 | The paper studies a mouse model knockout (BDNF promoter IV) to assess antidepressant efficacy and behavior, not human pharmacogenomics affecting phenelzine PK/PD. |
| popPK | Shen_1990 | irrelevant | 0 | 0 | The paper is a clinical review of sexual side effects with no toxicokinetic parameters for phenelzine. |
| popPK | Sherry-McKenna_1994 | irrelevant | 1 | 0 | The study measures tryptophan concentrations as a pharmacodynamic outcome, reporting no toxicokinetic parameters (e.g., half-life, clearance, Vd) for phenelzine. |
| popPK | Smith_1980 | irrelevant | 1 | 0 | The paper reports the kinetic parameters of the probe drug antipyrine (a marker for enzyme activity) after phenelzine treatment, not the toxicokinetic parameters of phenelzine itself. |
| popPK | Thase_1992 | irrelevant | 0 | 0 | The paper is a clinical efficacy study reporting psychiatric outcomes and response rates, with no toxicokinetic parameters reported. |
| popPK | Truong_2025 | irrelevant | 1 | 1 | The paper is a review on caffeine-antidepressant interactions where phenelzine is mentioned only qualitatively regarding hypertension risk, with no quantitative toxicokinetic parameters reported for phenelzine. |
| popPK | Tyrer_1980 | irrelevant | 1 | 1 | The paper discusses clinical response and dose schedules but does not report any quantitative toxicokinetic parameters (e.g., half-life, clearance, Vd) for phenelzine. |
| popPK | Tyrer_1983 | irrelevant | 0 | 0 | The paper reports on clinical outcomes and personality disorders in a phenelzine trial but contains no toxicokinetic parameters or numeric kinetic data. |
| popPK | Voican_2014 | irrelevant | 0 | 0 | The paper is a clinical review of antidepressant-induced liver injury that lists phenelzine as a risk factor but contains no quantitative toxicokinetic parameters for the substance. |
| popPK | Waldmeier_1993 | irrelevant | 0 | 0 | The paper reports pharmacodynamic effects (enzyme inhibition, binding) of phenelzine and brofaromine but provides no toxicokinetic parameters such as half-lives, clearances, or volumes of distribution. |
| popPK | Wong_1990 | irrelevant | 2 | 0 | The paper reports on a biochemical outcome (brain alanine levels) rather than quantitative phenelzine kinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Yagiela_1985 | irrelevant | 2 | 0 | Phenelzine is used as a pharmacological pretreatment (inhibitor) to study interactions with vasoconstrictors, not as the toxicokinetic subject with reported kinetic parameters. |
| popPK | Yamada_1993 | irrelevant | 0 | 0 | The paper studies iproniazid and nialamide, mentioning phenelzine only as a comparator to highlight differences in GABA/ALA effects, without providing any kinetic parameters for phenelzine. |
| popPK | unknown_2020 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | unknown_2021 | irrelevant | 0 | 0 | no_text gate: only 63 chars of text extracted (&lt; 400) |
| popPK | unknown_2023 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| popPK | unknown_2023_2 | irrelevant | 0 | 0 | no_text gate: only 27 chars of text extracted (&lt; 400) |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bphenelzine%5D&body=Drug%3A%20phenelzine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_phenelzine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
