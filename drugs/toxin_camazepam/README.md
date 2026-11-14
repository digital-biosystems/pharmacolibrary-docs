<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Camazepam&quot;}]"></div>

# Camazepam

- **generic name:** Camazepam
- **T3DB:** [T3D4566](http://www.t3db.ca/toxins/T3D4566) · **DrugBank:** [DB01489](https://go.drugbank.com/drugs/DB01489) · **PubChem:** [CID 37367](https://pubchem.ncbi.nlm.nih.gov/compound/37367)
- **groups:** experimental, illicit

## About

Camazepam is a benzodiazepine which is a dimethyl carbamate ester of tamzepam, a metabolite of diazepam. Similarly to other drugs in its class, it has antxiolytic, anticonvulsant, hypnotic, and skeletal muscle relaxant properties. However, unlike other benzodiapeines camazepam is predominantly anxiolytic and is relatively weak as an anticonvulsant, hypnotic and skeletal muscle relaxant. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** almost completely absorbed into the bloodstream after oral administration. 90% bioavailability can be achieved in humans.
- **Sources and uses:** Camazepam has been used in placebo controlled studies for the treatment of patients suffering from anxiety and depression.
- **Mechanism of toxicity:** Camazepam has been shown to bind competitively to benzodiazepine receptors in the brain with a relatively low affinity in animal models. This binding of benzodiazepine receptors by camazepam and its active metabolites is responsible for its anticonvulsant effects. …

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D4566">T3DB T3D4566</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 36104-80-0</small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| camazepam | parent | 371.821 | C19H18ClN3O3 | PubChem | [37367](https://pubchem.ncbi.nlm.nih.gov/compound/37367) | Legheand_1982 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="dog" data-age="unknown" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (dog), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">dog</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Legheand_1982_reference](drugs/toxin_camazepam/Camazepam_Legheand1982_reference.md) | — | 1-compartment (no model) | 0 | Legheand J et al., Pharmacokinetics of intravenous camazep…, Arzneimittel-Forschung (1982) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="Animal study (cat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">cat</span> | [Zhang_2026_haloxyfop_R_methyl_tolerance](drugs/toxin_camazepam/pd_Zhang_2026_haloxyfop_R_methyl_tolerance.md) | haloxyfop-R-methyl tolerance biomarker turnover ← camazepam | — | Zhang J et al., Haloxyfop-R-methyl resistance in Polypo…, Plant physiology and bioche… (2026) | [10.1016/j.plaphy.2026.111835](https://doi.org/10.1016/j.plaphy.2026.111835) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Guerrero_2002_survival_of_larvae](drugs/toxin_camazepam/pd_Guerrero_2002_survival_of_larvae.md) | survival of larvae · model not identified | — | Guerrero FD et al., Molecular diagnosis of pyrethroid resis…, Journal of medical entomolo… (2002) | [10.1603/0022-2585-39.5.770](https://doi.org/10.1603/0022-2585-39.5.770) |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Nakazawa_1983_efficacy](drugs/toxin_camazepam/pd_Nakazawa_1983_efficacy.md) | efficacy rate · model not identified | — | Nakazawa S et al., [Experimental and clinical evaluation o…, The Japanese journal of ant… (1983) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=camazepam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 18:23 | 14:37 | 0/1/0 | 1/2/0 | 0/0/0 | 333,304/9,428 | einfracz / qwen3.8-flash-next | 29 | 9/10 | 29/0 | 0 |

## Coverage

- **PubMed hits:** 160 matched, 136 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Legheand_1982.pdf` | Legheand J et al., Pharmacokinetics of intravenous camazep…, Arzneimittel-Forschung (1982) | popPK | 10 |  | [6127087](https://pubmed.ncbi.nlm.nih.gov/6127087) | The paper reports terminal elimination half-lives (6.4 to 10.5 h) and other pharmacokinetic model parameters for camazepam in dogs directly in the abstract. |

<sub>queue written 2026-11-13 18:20 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ab_2018 | not_relevant | 0 | 0 | The paper discusses herb-drug interactions involving camazepam metabolizing enzymes (CYP) but does not report on genetic variants (pharmacogenomics) affecting camazepam pharmacokinetics or pharmacodynamics. |
| popPK | Adams_2007 | irrelevant | 0 | 0 | The paper discusses sunitinib and its metabolite, with no mention of camazepam or any kinetic parameters for camazepam. |
| PGx | Adams_2007 | not_relevant | 0 | 0 | The paper discusses sunitinib, not camazepam, and contains no pharmacogenomic data. |
| popPK | Atabakhsh_1993 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of 14C-Ino 2628-CZ, not camazepam. |
| popPK | Aubrey_2025 | irrelevant | 0 | 0 | The paper concerns tantalum oxide nanoparticles and NMR characterization; camazepam is not mentioned or studied. |
| popPK | Banzhaf_2019 | irrelevant | 0 | 0 | The paper concerns sodium fluorescein and carboxyfluorescein delivery via laser microneedles and does not mention camazepam or any related kinetic parameters. |
| popPK | Bonate_2000 | irrelevant | 0 | 0 | The paper focuses on clonazepam, not camazepam, and does not report kinetic parameters for camazepam. |
| popPK | Bravo_1984 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for cotrimoxazole (trimethoprim and sulphonamide), not camazepam. |
| PGx | Bulbul_2022 | not_relevant | 0 | 0 | The paper studies carbamazepine (not camazepam) and its pharmacodynamic effect on endometrial hyperplasia in rats without investigating any pharmacogenomic variants or genotypes. |
| PGx | Bulbul_2022_2 | not_relevant | 0 | 0 | The paper studies carbamazepine (not camazepam) and its effect on CYP3A4 enzyme staining in endometriotic tissue in rats, not pharmacogenomic effects on PK/PD parameters. |
| popPK | Cerná_2012 | irrelevant | 0 | 0 | The paper is a general overview of a human biomonitoring program measuring heavy metals and persistent organic pollutants, containing no data or parameters for camazepam. |
| popPK | Cipriano-Salazar_2018 | irrelevant | 0 | 0 | The paper concerns the antibacterial effects of tannic acid on ruminal bacteria in sheep and does not mention camazepam or any toxicokinetic parameters. |
| popPK | Costa_1998 | irrelevant | 0 | 0 | The paper concerns polycyclic aromatic hydrocarbons (PAHs) and genetic polymorphisms, with no mention of camazepam or any kinetic parameters. |
| popPK | Eisenried_2020 | irrelevant | 0 | 0 | The paper focuses on remimazolam (CNS 7056) and does not mention camazepam at all. |
| popPK | Engström_1999 | irrelevant | 0 | 0 | The paper focuses on model compounds clomethiazole, lidocaine, prilocaine, and 4-phenylbutylamine, with no mention of camazepam or its kinetic parameters. |
| popPK | Eshimy_2025 | irrelevant | 0 | 0 | The paper concerns clotrimazole selenium nano-composites for antifungal therapy and contains no mention of camazepam or its kinetic parameters. |
| PGx | Faucette_2007 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP2B6/CYP3A4 induction by carbamazepine (not camazepam) via nuclear receptors (PXR/CAR), but does not report any pharmacogenomic effect of a gene variant on the PK or PD parameters of camazepam. |
| popPK | Giorgi_2008 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for clazuril, not camazepam; camazepam is not mentioned. |
| popPK | Gkalpakiotis_2024 | irrelevant | 0 | 0 | The paper is a clinical efficacy and safety study of brodalumab for psoriasis and contains no mention of camazepam or any toxicokinetic parameters. |
| popPK | Hayashi_1989 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for sulbactam and ampicillin, not camazepam. |
| popPK | Hrncírová_2008 | irrelevant | 0 | 0 | The paper focuses on lead and cadmium exposure in a homeless population and does not mention camazepam or any related kinetic parameters. |
| popPK | Ito_2004 | irrelevant | 0 | 0 | The paper concerns ATP release mechanisms in airway cells and does not mention camazepam or report any toxicokinetic parameters. |
| popPK | Iwai_1983 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for cefotetan (CTT), not camazepam (CMZ), which is only used as a comparator for antimicrobial activity. |
| popPK | Iwai_1984 | irrelevant | 0 | 0 | The paper reports pharmacokinetic data for ceftazidime (CAZ), not camazepam; camazepam is not mentioned. |
| PGx | John_2009 | not_relevant | 0 | 0 | The paper focuses on enzyme gene expression and DNA adducts in prostate tissue cancer etiology, with no mention of camazepam or its pharmacokinetic/pharmacodynamic parameters. |
| popPK | Kageyama_2005 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for rhodamine 123, nelfinavir, and erythromycin, not camazepam. |
| popPK | Kaiki_2023 | irrelevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics of cefmetazole, with no mention of camazepam. |
| PGx | Kariya_1996 | not_relevant | 0 | 0 | The provided text is metadata regarding the software GROBID and contains no biomedical data, pharmacological information, or references to camazepam. |
| popPK | Kato_2025 | irrelevant | 0 | 0 | The paper discusses cefmetazole and flomoxef, not camazepam. |
| PGx | Kim_2006 | not_relevant | 0 | 0 | The study focuses on aripiprazole, not camazepam. |
| popPK | Komatsu_2022 | irrelevant | 0 | 0 | The paper concerns cefmetazole kinetics, and camazepam is not mentioned as a subject substance or related to the kinetic parameters. |
| popPK | Kumar_2023 | irrelevant | 0 | 0 | The paper discusses a calcium and zinc composite alginate hydrogel for hemostasis and wound care, with no mention of camazepam or its toxicokinetics. |
| popPK | Kusumoto_2023 | irrelevant | 0 | 0 | The substance CMZ in this paper is cefmetazole (an antibiotic), not camazepam; no kinetic parameters for camazepam are present. |
| popPK | Leclercq_1999 | irrelevant | 0 | 0 | The paper investigates chlorzoxazone and aminopyrine pharmacokinetics as markers for CYP enzyme activity in patients with fatty liver; camazepam is not mentioned in the text. |
| popPK | Li_2000 | irrelevant | 0 | 0 | The paper studies diazepam, clonazepam, and a new compound (MCA), not camazepam. |
| PGx | Li_2008 | not_relevant | 0 | 0 | The paper studies thalidomide, not camazepam, and reports in vitro CYP2C19 metabolism rather than pharmacogenomic genotype effects on PK/PD. |
| PGx | Li_2012 | not_relevant | 0 | 0 | The paper investigates thalidomide, not camazepam, and discusses CYP2C19 metabolism without reporting genotype-specific pharmacokinetic or pharmacodynamic parameters for the target drug. |
| popPK | Miura_1987 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for cefmetazole, a different substance, and camazepam is not mentioned in the text. |
| popPK | Miyano_1984 | irrelevant | 0 | 0 | The paper reports on the renal excretion of the antibiotic cefmetazole in children, with no mention of camazepam or its kinetic parameters. |
| popPK | Namiki_2024 | irrelevant | 0 | 0 | The paper focuses on cefmetazole, an antibiotic, and does not mention or study camazepam. |
| PGx | Narimatsu_1993 | not_relevant | 0 | 0 | The paper discusses cinnarizine and flunarizine, not camazepam. |
| popPK | Nishioka_2027 | irrelevant | 0 | 0 | The paper investigates human gait clearance in obstacle crossing and contains no toxicokinetic data or mention of camazepam. |
| popPK | Okumura_2007 | irrelevant | 0 | 0 | The paper studies the pharmacokinetics of cefmetazole (CMZ) in rats, not camazepam. |
| popPK | Okumura_2007_2 | irrelevant | 0 | 0 | The paper focuses on cefmetazole as a probe drug in humanized mice and does not contain any data regarding camazepam. |
| popPK | Palmer_1995 | irrelevant | 0 | 0 | The paper is about cefepime and other cephalosporins, with no mention or data for camazepam. |
| PGx | Pařízková_2026 | not_relevant | 0 | 0 | The paper focuses on plant biology (Arabidopsis root architecture and nitrogen metabolism) and contains no information regarding camazepam, pharmacokinetics, or pharmacodynamics in humans. |
| PGx | Piatkov_2017 | not_relevant | 0 | 0 | The paper investigates clozapine, not camazepam. |
| PGx | Piatkov_2017_2 | not_relevant | 0 | 0 | The drug studied is clozapine, not camazepam. |
| popPK | Prayer-Galetti_1997 | irrelevant | 0 | 0 | The paper concerns endothelin-1 receptors in human prostate tissue and does not mention camazepam or any toxicokinetic parameters. |
| popPK | Puklová_2023 | irrelevant | 0 | 0 | The paper is an epidemiological study on per-and polyfluoroalkyl substances (PFASs) and lipid profiles, with no mention of camazepam or its kinetic parameters. |
| popPK | Rajendran_2020 | irrelevant | 0 | 0 | The paper is about a polymer for CO2 and dye removal, with no mention of camazepam or any toxicokinetic parameters. |
| PGx | Ren_2023 | not_relevant | 0 | 0 | The paper studies the effects of different feeds on the fungal microbiome of sheep and does not involve camazepam, pharmacogenomics, or any pharmacokinetic/pharmacodynamic parameters. |
| popPK | Sadaka_2025 | irrelevant | 1 | 2 | The paper studies Cefmetazole (CMZ), not Camazepam, and reports only steady-state concentrations rather than kinetic parameters like half-life, clearance, or volume of distribution for the substance itself. |
| popPK | Schiffelers_2002 | irrelevant | 0 | 0 | The paper concerns liposomal co-encapsulation of gentamicin and ceftazidime for treating Klebsiella pneumoniae in rats, with no mention of camazepam. |
| popPK | Sen_2008 | irrelevant | 0 | 0 | The paper concerns ciglitazone and homocysteine clearance in diabetic mice, with no mention of camazepam or its toxicokinetic parameters. |
| popPK | Shindo_1982 | irrelevant | 0 | 0 | The paper investigates the pharmacokinetics of cefmetazole (CMZ), not camazepam; there are no kinetic parameters for camazepam. |
| popPK | Siposova_2023 | irrelevant | 0 | 0 | The paper discusses zeolite-dye composites and anti-amyloidogenic properties, containing no mention of camazepam or any toxicokinetic parameters for it. |
| popPK | Smetanová_2026 | irrelevant | 0 | 0 | The paper is an epidemiological biomonitoring study focusing on Polycyclic Aromatic Hydrocarbon (PAH) metabolites in urine, with no mention of camazepam or any quantitative toxicokinetic parameters for it. |
| PGx | Staszak_2026 | not_relevant | 0 | 0 | The paper concerns phytohormone changes in black locust plants due to insect gall formation and does not involve camazepam or human pharmacogenomics. |
| PGx | Stresser_2016 | not_relevant | 0 | 0 | The paper focuses on CYP2E1 inhibition by clomethiazole (CMZ), not camazepam, and does not report on gene variants affecting PK/PD parameters. |
| popPK | Suchara_2017 | irrelevant | 0 | 0 | The paper discusses environmental biomonitoring of atmospheric pollution in the Czech Republic and does not mention camazepam or any toxicokinetic parameters. |
| popPK | Sucharová_2004 | irrelevant | 0 | 0 | The paper discusses multi-element distribution in moss biomonitoring and does not mention camazepam or any toxicokinetic parameters. |
| popPK | Takemura_2021 | irrelevant | 0 | 0 | The paper focuses entirely on Cefmetazole and does not mention Camazepam. |
| popPK | Tartara_1993 | irrelevant | 0 | 0 | The paper reports pharmacokinetics of oxcarbazepine and its metabolite, with no mention or data regarding camazepam. |
| popPK | Tomizawa_2017 | irrelevant | 0 | 10 | The paper reports toxicokinetic parameters for cefmetazole (an antibiotic), not camazepam. |
| popPK | Toyonaga_1986 | irrelevant | 0 | 0 | The paper focuses exclusively on the pharmacokinetics and clinical efficacy of imipenem/cilastatin sodium (MK-0787/MK-0791) and contains no mention of or kinetic data for camazepam. |
| popPK | Trenque_1994 | irrelevant | 0 | 0 | The paper reports on the pharmacokinetics of a different substance (Ino 2628 CZ), with no mention of camazepam. |
| popPK | Tufenkji_1993 | irrelevant | 0 | 0 | The paper studies Ino 2628-CZ (dicyclopropyl-methyl-piperazine), not camazepam; camazepam is not mentioned. |
| PGx | Vaiman_2022 | not_relevant | 4 | 1 | The paper is a narrative review discussing theoretical pharmacogenetic risks and general mechanisms of carbamazepine (not camazepam), but it does not report specific experimental data where a gene variant changes a measured PK/PD parameter. |
| popPK | Wada_1982 | irrelevant | 0 | 0 | The paper reports pharmacokinetics for cefmetazole, not camazepam. |
| popPK | Wang_2019 | irrelevant | 0 | 0 | The paper investigates the toxicokinetics of diethylnitrosamine and chlormethiazole, with no mention of camazepam. |
| popPK | Wang_2020 | irrelevant | 0 | 0 | The paper concerns the substance CZ-7 and cuprizone, with no mention of camazepam or any kinetic parameters. |
| popPK | Černá_2015 | irrelevant | 0 | 0 | The paper focuses on phthalate exposure in humans and does not mention camazepam or report any toxicokinetic parameters for it. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bcamazepam%5D&body=Drug%3A%20camazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_camazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 18:20 UTC</sub>
