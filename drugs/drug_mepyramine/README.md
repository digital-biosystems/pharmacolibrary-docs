<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D04A&quot;,&quot;href&quot;:&quot;atc/D04A.md&quot;},{&quot;label&quot;:&quot;mepyramine&quot;}]"></div>

# mepyramine

- **generic name:** mepyramine
- **ATC codes:** `D04AA02`, `R06AC01`
- **DrugBank:** [DB06691](https://go.drugbank.com/drugs/DB06691) · **PubChem:** [CID 4992](https://pubchem.ncbi.nlm.nih.gov/compound/4992)
- **molar mass:** 285.384 g/mol (C17H23N3O) — DrugBank
- **groups:** approved, vet_approved

## About

Mepyramine is a first-generation antihistamine that blocks H1 receptors to treat allergies and sleep issues. It is given by mouth or applied topically to skin for insect bites. It appears in cold remedies and is no longer found in standalone sleep pills.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q3800087](https://www.wikidata.org/wiki/Q3800087), [Wikipedia](https://en.wikipedia.org/wiki/Mepyramine?oldid=1369144184) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mepyramine | parent | 285.384 | C17H23N3O | DrugBank | [4992](https://pubchem.ncbi.nlm.nih.gov/compound/4992) | Kelly_1987 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="rat" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub> | [Kelly_1987_reference](drugs/drug_mepyramine/Mepyramine_Kelly1987_reference.md) | — | 1-compartment (no model) | 1 | Kelly DW et al., The metabolism and elimination of pyril…, Drug metabolism and disposi… (1987) | — |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sadek_2015_acetylcholine_100_M_induced_responses](drugs/drug_mepyramine/pd_Sadek_2015_acetylcholine_100_M_induced_responses.md) | acetylcholine (100 µM)-induced responses ← pyrilamine · inhibition effect | — | Sadek B et al., Effects of antihistamines on the functi…, European journal of pharmac… (2015) | [10.1016/j.ejphar.2014.10.046](https://doi.org/10.1016/j.ejphar.2014.10.046) |
| <span class="pk-badge pk-badge--orange">Needs review</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">pig</span> | [Marche_1988_32P_PI](drugs/drug_mepyramine/pd_Marche_1988_32P_PI.md) | 32P labelling of phosphatidylinositol biomarker turnover ← mepyramine | — | Marche P et al., Phosphoinositides and cicletanine, Drugs under experimental an… (1988) | — |
| <span class="pk-badge pk-badge--red">Rejected</span> | [Ottosson_1989_Histamine_induced_dilatation_of_small_human_temporal_arteries](drugs/drug_mepyramine/pd_Ottosson_1989_Histamine_induced_dilatation_of_small_human_te.md) | Histamine-induced dilatation of small human temporal arteries ← mepyramine · inhibition effect | — | Ottosson A et al., Pharmacological characterization of his…, British journal of clinical… (1989) | [10.1111/j.1365-2125.1989.tb05344.x](https://doi.org/10.1111/j.1365-2125.1989.tb05344.x) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [White_1993_response_to_histamine](drugs/drug_mepyramine/pd_White_1993_response_to_histamine.md) | response to histamine ← mepyramine · inhibition effect | — | White TE et al., Histamine H1-receptor-mediated inositol…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13462.x](https://doi.org/10.1111/j.1476-5381.1993.tb13462.x) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:23 | 0:05 | 1/0/0 | 2/2/0 | 0/0/0 | 4,038/176 | einfracz / qwen3.8-27b | 2 | 2/0 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 475 matched, 78 returned
- **screened:** 1  ·  **relevant:** 0
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_14 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hashemzadeh-Gargari_1992.pdf` | Hashemzadeh-Gargari H et al., Histamine activates chloride conductanc…, Journal of neurophysiology (1992) | pd | 5 | [10.1152/jn.1992.68.1.9](https://doi.org/10.1152/jn.1992.68.1.9) | [1381422](https://www.ncbi.nlm.nih.gov/pubmed/1381422) | metadata signals extractable PD data (EC50) |
| `Barker_1983.pdf` | Barker LA et al., Selectivity of 4-methylhistamine at H1-…, British journal of pharmaco… (1983) | pd | 4 | [10.1111/j.1476-5381.1983.tb11050.x](https://doi.org/10.1111/j.1476-5381.1983.tb11050.x) | [6228278](https://www.ncbi.nlm.nih.gov/pubmed/6228278) | metadata signals extractable PD data (EC50) |
| `Casale_1989.pdf` | Casale TB, The interaction of azelastine with huma…, The Journal of allergy and… (1989) | pd | 4 | [10.1016/0091-6749(89)90013-4](https://doi.org/10.1016/0091-6749(89)90013-4) | [2540229](https://www.ncbi.nlm.nih.gov/pubmed/2540229) | metadata signals extractable PD data (IC50) |
| `Claro_1987.pdf` | Claro E et al., Histamine-stimulated phosphoinositide h…, Molecular pharmacology (1987) | pd | 4 |  | [2823091](https://www.ncbi.nlm.nih.gov/pubmed/2823091) | metadata signals extractable PD data (concentration-effect) |
| `Fanous_1993.pdf` | Fanous K et al., Azelastine and allergen transduction si…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00173212](https://doi.org/10.1007/BF00173212) | [7509459](https://www.ncbi.nlm.nih.gov/pubmed/7509459) | metadata signals extractable PD data (IC50) |
| `Gardiner_1988.pdf` | Gardiner PJ et al., Characterisation of the leukotriene rec…, Agents and actions. Supplem… (1988) | pd | 4 | [10.1007/978-3-0348-9156-1_8](https://doi.org/10.1007/978-3-0348-9156-1_8) | [2845748](https://www.ncbi.nlm.nih.gov/pubmed/2845748) | metadata signals extractable PD data (EC50) |
| `Gonzalez_1993.pdf` | Gonzalez R et al., Histamine H1 receptor binding sites in…, General pharmacology (1993) | pd | 4 | [10.1016/0306-3623(93)90007-k](https://doi.org/10.1016/0306-3623(93)90007-k) | [8482504](https://www.ncbi.nlm.nih.gov/pubmed/8482504) | metadata signals extractable PD data (IC50) |
| `Hew_1990.pdf` | Hew RW et al., Characterization of histamine H3-recept…, British journal of pharmaco… (1990) | pd | 4 | [10.1111/j.1476-5381.1990.tb14130.x](https://doi.org/10.1111/j.1476-5381.1990.tb14130.x) | [1963802](https://www.ncbi.nlm.nih.gov/pubmed/1963802) | metadata signals extractable PD data (EC50) |
| `Marley_1998.pdf` | Marley PD et al., Activation of tyrosine hydroxylase by h…, Journal of the autonomic ne… (1998) | pd | 4 | [10.1016/s0165-1838(98)00046-0](https://doi.org/10.1016/s0165-1838(98)00046-0) | [9686897](https://www.ncbi.nlm.nih.gov/pubmed/9686897) | metadata signals extractable PD data (EC50) |
| `Sigrist_1986.pdf` | Sigrist S et al., Specific receptor and cardiovascular ef…, Endocrinology (1986) | pd | 4 | [10.1210/endo-119-1-381](https://doi.org/10.1210/endo-119-1-381) | [3013594](https://www.ncbi.nlm.nih.gov/pubmed/3013594) | metadata signals extractable PD data (EC50) |
| `Soria-Jasso_1997.pdf` | Soria-Jasso LE et al., Histamine H1 receptors and inositol pho…, Neuroscience letters (1997) | pd | 4 | [10.1016/s0304-3940(97)00209-7](https://doi.org/10.1016/s0304-3940(97)00209-7) | [9147388](https://www.ncbi.nlm.nih.gov/pubmed/9147388) | metadata signals extractable PD data (EC50) |
| `Tabarean_2013.pdf` | Tabarean IV, Functional pharmacology of H1 histamine…, British journal of pharmaco… (2013) | pd | 4 | [10.1111/bph.12286](https://doi.org/10.1111/bph.12286) | [23808378](https://www.ncbi.nlm.nih.gov/pubmed/23808378) | metadata signals extractable PD data (IC50) |
| `Trzeciakowski_1987.pdf` | Trzeciakowski JP, Inhibition of guinea pig ileum contract…, The Journal of pharmacology… (1987) | pd | 4 |  | [2826760](https://www.ncbi.nlm.nih.gov/pubmed/2826760) | metadata signals extractable PD data (EC50) |
| `Wallace_1983.pdf` | Wallace RM et al., Temperature dependence of the binding o…, Molecular pharmacology (1983) | pd | 4 |  | [6135145](https://www.ncbi.nlm.nih.gov/pubmed/6135145) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-11-24 01:23 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agulló_1990 | irrelevant | 0 | 0 | The study is an in-vitro receptor pharmacology assay using mepyramine as an H1 antagonist comparator, not a pharmacokinetic study of mepyramine's disposition. |
| PGx | Agulló_1990 | not_relevant | 0 | 0 | The paper studies histamine receptor subtypes in rat brain cell cultures and does not involve pharmacogenomics or human PK/PD parameters of mepyramine. |
| popPK | Arbonés_1988 | irrelevant | 0 | 0 | The paper describes an in vitro binding study using mepyramine as a radiolabeled ligand to characterize H1-receptors, not a pharmacokinetic study of mepyramine disposition. |
| PGx | Arbonés_1988 | not_relevant | 0 | 0 | The study reports standard receptor binding and signaling pharmacology in astrocytes, containing no genetic variants or pharmacogenomic data. |
| popPK | Arrang_1985 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of betahistine, using mepyramine only as a reference radioligand or receptor antagonist, with no pharmacokinetic parameters reported for mepyramine. |
| PGx | Arrang_1985 | not_relevant | 0 | 0 | The paper investigates the pharmacological actions of betahistine and reports in vitro/in vivo binding constants (Ki) and concentration-response data (EC50), but it does not report any pharmacogenomic effects (gene variants changing PK/PD) for mepyramine or any other drug. |
| popPK | Arrang_1987 | irrelevant | 0 | 0 | The study focuses on the mechanism of histamine synthesis regulation (autoinhibition) and mepyramine is used only as an H1-receptor antagonist in an in-vitro pharmacological experiment, with no pharmacokinetic parameters reported. |
| PGx | Arrang_1987 | not_relevant | 0 | 0 | The paper studies histamine synthesis regulation and H3-receptor pharmacology; it does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of mepyramine. |
| popPK | Barker_1983 | irrelevant | 0 | 0 | no_text gate: only 89 chars of text extracted (&lt; 400) |
| PGx | Barker_1983 | not_relevant | 0 | 0 | The paper investigates the selectivity of 4-methylhistamine on H1/H2 receptors and does not mention mepyramine, gene variants, or pharmacogenomics. |
| popPK | Benedito_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of histamine receptor subtypes in rat arteries where mepyramine is used as a probe, not a pharmacokinetic study. |
| PGx | Benedito_1991 | not_relevant | 0 | 0 | The paper investigates the receptor subtype mediating histamine-induced relaxation in rat arteries; it does not report any genetic variants or their effect on mepyramine pharmacokinetics or pharmacodynamics. |
| popPK | Bristow_1991 | irrelevant | 0 | 0 | The study investigates inositol phosphate accumulation in HeLa cells, using mepyramine only as an experimental tool to assess IP1 metabolism, rather than measuring its pharmacokinetic parameters. |
| PGx | Bristow_1991 | not_relevant | 0 | 0 | The paper describes in vitro cell signaling mechanisms involving lithium and mepyramine, not the effect of gene variants on pharmacokinetics or pharmacodynamics. |
| popPK | Bristow_1993 | irrelevant | 0 | 0 | The study is an in-vitro receptor mechanism study in HeLa cells where mepyramine is used only as a tool antagonist to confirm H1 receptor involvement, with no pharmacokinetic parameters reported. |
| PGx | Bristow_1993 | not_relevant | 0 | 0 | The paper describes receptor desensitization in cell lines and does not report the effect of any gene variant, genotype, or phenotype on the pharmacokinetics or pharmacodynamics of mepyramine. |
| popPK | Casale_1989 | irrelevant | 0 | 0 | The paper studies receptor binding affinity (mechanistic/in vitro) of azelastine, not the pharmacokinetics of mepyramine. |
| PGx | Casale_1989 | not_relevant | 0 | 0 | The paper investigates the receptor binding properties of azelastine, not mepyramine, and does not report pharmacogenomic effects. |
| popPK | Chang_1988 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of vasomotor actions of amines (histamine, serotonin, noradrenaline) on isolated basilar arteries, and does not report pharmacokinetic parameters for mepyramine. |
| PGx | Chang_1988 | not_relevant | 0 | 0 | The paper investigates vasomotor responses to amines in isolated arteries and does not mention mepyramine or any pharmacogenomic variants. |
| popPK | Claro_1986 | irrelevant | 0 | 0 | The paper describes an in-vitro mechanistic study of H1-receptor function in rat brain cortex where mepyramine is used as an antagonist, not a pharmacokinetic study. |
| PGx | Claro_1986 | not_relevant | 0 | 0 | The paper describes pharmacological binding and functional assays of mepyramine in rat brain cortex but does not report any genetic variants or pharmacogenomic effects on its pharmacokinetics or pharmacodynamics. |
| popPK | Claro_1987 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of receptor binding and signaling in rat brain slices, not a pharmacokinetic study of mepyramine disposition. |
| PGx | Claro_1987 | not_relevant | 0 | 0 | The paper studies the developmental pharmacology of histamine receptors and mepyramine binding in rat brain, but it does not investigate the effect of specific genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Colucci_2011 | irrelevant | 0 | 0 | Mepyramine is used only as an antagonist to block muscarinic receptors in a pharmacodynamic study of fMLF-induced motility, not for PK parameter estimation. |
| PGx | Colucci_2011 | not_relevant | 0 | 0 | The paper does not report a pharmacogenomic effect on the PK/PD of mepyramine; mepyramine is merely used as a non-effective antagonist in a functional assay of fMLF-induced motility. |
| popPK | Dickenson_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium signaling where mepyramine is used as a pharmacological antagonist, not a pharmacokinetic study. |
| PGx | Dickenson_1992 | not_relevant | 0 | 0 | The paper describes the mechanism of histamine H1-receptor signaling and mepyramine's role as an antagonist in calcium influx in cell lines, but it does not report any genetic variants, genotypes, or phenotypes affecting the PK or PD of mepyramine. |
| popPK | Dickenson_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on histamine receptor signaling where mepyramine is used only as a radioligand for binding assays, not as a subject drug for pharmacokinetic analysis. |
| PGx | Dickenson_1994 | not_relevant | 0 | 0 | The paper investigates the effect of a chemical modulator (DTT) on histamine receptor signaling and mepyramine binding, not the effect of a genetic variant on mepyramine pharmacokinetics or pharmacodynamics. |
| popPK | Donaldson_1985 | irrelevant | 0 | 0 | The paper is a mechanistic in vitro study investigating receptor pharmacology (H1 antagonism) in guinea-pig tissue, not a pharmacokinetic study. |
| PGx | Donaldson_1985 | not_relevant | 0 | 0 | The paper investigates pharmacology in guinea-pig ileum tissue and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Donaldson_1986 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study examining receptor signaling mechanisms where mepyramine is used as an antagonist, not a study of its pharmacokinetic disposition. |
| PGx | Donaldson_1986 | not_relevant | 0 | 0 | The paper studies receptor pharmacology and signal transduction, not genetic variants affecting the PK or PD of mepyramine. |
| popPK | Donaldson_1987 | irrelevant | 0 | 0 | The paper is a mechanistic pharmacological study of histamine H1-receptors in guinea-pig ileum, using mepyramine only as a radioligand for binding assays, and contains no pharmacokinetic data. |
| PGx | Donaldson_1987 | not_relevant | 0 | 0 | The paper investigates the effect of a chemical (DTT) on receptor binding and efficacy, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of mepyramine. |
| popPK | Fanous_1993 | irrelevant | 0 | 0 | The paper investigates the mechanism of azelastine in mast cells, not the pharmacokinetics of mepyramine. |
| PGx | Fanous_1993 | not_relevant | 0 | 0 | The paper studies the mechanism of action of azelastine in mast cells and does not report on mepyramine or any pharmacogenomic effects. |
| popPK | Foster_1997 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study on equine eosinophils where mepyramine is used solely as a histamine receptor antagonist to characterize signaling, not as a subject for pharmacokinetic analysis. |
| PGx | Foster_1997 | not_relevant | 0 | 0 | The paper investigates the immunological function of equine cells (superoxide generation) and the receptor subtype of histamine, not the pharmacokinetics or pharmacodynamics of mepyramine itself. |
| popPK | Gardiner_1988 | irrelevant | 0 | 0 | The study is an in vitro pharmacological assay testing mepyramine as an antagonist, not a pharmacokinetic study. |
| PGx | Gardiner_1988 | not_relevant | 0 | 0 | The paper reports that mepyramine was inactive against leukotriene-induced contractions but does not contain any data on the effect of a genetic variant on mepyramine's pharmacokinetics or pharmacodynamics. |
| popPK | Gera_2013 | irrelevant | 0 | 0 | The paper investigates the pharmacology of histamine receptor ligands (cetirizine prodrug and histamine) and does not report pharmacokinetic parameters for mepyramine. |
| PGx | Gera_2013 | not_relevant | 0 | 0 | The paper investigates the activation of latent histamine receptor ligands by peptidases and does not involve mepyramine or any pharmacogenomic analysis. |
| popPK | Ghayur_2005 | irrelevant | 0 | 0 | The study investigates the pharmacological effects of radish leaf extract on gastrointestinal and uterine smooth muscle in animal models and does not report pharmacokinetic parameters for mepyramine. |
| PGx | Ghayur_2005 | not_relevant | 0 | 0 | The paper studies the pharmacological effects of a radish leaf extract on isolated tissues and does not involve mepyramine or any pharmacogenomic analysis of drug PK/PD. |
| popPK | Girard_1984 | irrelevant | 0 | 0 | The study focuses on the contractile effects of bombesin in rat stomach strips where mepyramine is used only as a pharmacological antagonist, not as the subject of pharmacokinetic analysis. |
| PGx | Girard_1984 | not_relevant | 0 | 0 | The paper investigates the contractile effects of bombesin and its fragments in rat stomach strips, using mepyramine only as a non-specific antagonist to rule out histamine involvement; it does not report any genetic variant effects on the pharmacokinetics or pharmacodynamics of mepyramine. |
| popPK | Gonzalez_1993 | irrelevant | 0 | 0 | The study is an in-vitro radioligand binding assay characterizing H1 receptor sites in mouse uterine membranes, not a pharmacokinetic study of mepyramine. |
| PGx | Gonzalez_1993 | not_relevant | 0 | 0 | The study characterizes histamine receptor binding in mouse tissue in response to hormonal status, not the effect of a genetic variant on the pharmacokinetics or pharmacodynamics of mepyramine (pyrilamine). |
| popPK | Guth_1978 | irrelevant | 0 | 0 | Mepyramine is used as a pharmacological tool (H1 antagonist) to characterize histamine receptors, not as the subject of a pharmacokinetic study. |
| PGx | Guth_1978 | not_relevant | 0 | 0 | The paper investigates histamine receptor physiology and antagonist effects in cat/rat mesenteric circulation, but does not report any gene variants or genetic phenotypes affecting mepyramine PK/PD. |
| popPK | Hall_1992 | irrelevant | 0 | 0 | The study investigates in vitro receptor pharmacology in bovine tissue using mepyramine as a competitive antagonist, not its pharmacokinetics. |
| PGx | Hall_1992 | not_relevant | 0 | 0 | The paper investigates agonist-induced inositol phosphate responses in bovine tissue and does not report any human genetic variants or their effects on mepyramine's pharmacokinetics or pharmacodynamics. |
| popPK | Hao_2021 | irrelevant | 0 | 0 | The paper focuses on the mechanistic action of mepyramine on sodium channels and pain relief, providing no pharmacokinetic parameter data. |
| PGx | Hao_2021 | not_relevant | 0 | 0 | The paper describes the mechanism of action of mepyramine (sodium channel inhibition) and its topical analgesic effects, but does not report any pharmacogenomic associations with PK or PD parameters. |
| popPK | Hashemzadeh-Gargari_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper on lobster motor neurons and does not report any pharmacokinetic parameters for mepyramine. |
| PGx | Hashemzadeh-Gargari_1992 | not_relevant | 0 | 0 | The paper describes histamine receptor pharmacology in lobster neurons and does not involve mepyramine or any human pharmacogenomic analysis. |
| popPK | Hew_1990 | irrelevant | 0 | 0 | no_text gate: only 88 chars of text extracted (&lt; 400) |
| PGx | Hew_1990 | not_relevant | 0 | 0 | The paper characterizes H3-receptors in guinea-pig ileum using selective ligands and does not investigate human pharmacogenomics, gene variants, or the pharmacokinetics/pharmacodynamics of mepyramine in humans. |
| popPK | Izzo_1998 | irrelevant | 0 | 0 | The study is a pharmacological investigation of histamine receptors in guinea pig ileum where mepyramine is used only as an antagonist, with no pharmacokinetic parameters reported. |
| PGx | Izzo_1998 | not_relevant | 0 | 0 | The paper investigates histamine receptor pharmacology in guinea pig ileum and does not report any pharmacogenomic effects on mepyramine's PK or PD parameters. |
| popPK | Kelly_1987 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of pyrilamine, not mepyramine. |
| PGx | Kelly_1987 | not_relevant | 0 | 0 | The paper investigates pyrilamine, not mepyramine, and does not report any pharmacogenomic effects. |
| popPK | Khan_1985 | irrelevant | 0 | 0 | The study is an in-vitro immunological investigation where mepyramine is used solely as a receptor antagonist to probe histamine receptor subtypes, reporting no pharmacokinetic parameters. |
| PGx | Khan_1985 | not_relevant | 0 | 0 | The paper reports the pharmacological mechanism of mepyramine (H1 antagonism) on T-cell subsets but does not report any pharmacogenomic effects of gene variants on mepyramine's PK or PD. |
| popPK | Kobayashi_1998 | irrelevant | 0 | 0 | The provided evidence is empty metadata from a text extraction tool and contains no scientific content or data regarding mepyramine pharmacokinetics. |
| PGx | Kobayashi_1998 | not_relevant | 0 | 0 | The text contains only metadata and version information for the GROBID software, with no scientific content regarding pharmacogenomics or mepyramine. |
| popPK | Korolkiewicz_1997 | irrelevant | 0 | 0 | The study is a pharmacological characterization of galanin's contractile effects in rat gastric fundus, where mepyramine is used only as a non-pharmacokinetic antagonist probe. |
| PGx | Korolkiewicz_1997 | not_relevant | 0 | 0 | The paper studies the pharmacology of galanin analogs and does not report any pharmacogenomic effect of mepyramine. |
| popPK | Kortunay_2001 | irrelevant | 0 | 0 | no_text gate: only 108 chars of text extracted (&lt; 400) |
| PGx | Kortunay_2001 | not_relevant | 0 | 0 | The study investigates the effect of mepyramine as an inhibitor on the metabolism of sparteine, not the pharmacokinetics or pharmacodynamics of mepyramine itself. |
| popPK | Livett_1986 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of histamine receptor blockade, not a pharmacokinetic study reporting disposition parameters like clearance or volume for mepyramine. |
| PGx | Livett_1986 | not_relevant | 0 | 0 | The paper studies histamine-induced catecholamine secretion and the effects of opioids, containing no data on pharmacogenomic effects on the PK/PD of mepyramine. |
| popPK | Malo_1994 | irrelevant | 0 | 0 | The study focuses on the pharmacology of zileuton as a 5-lipoxygenase inhibitor, with mepyramine used only as a prophylactic agent, and no pharmacokinetic parameters for mepyramine are reported. |
| PGx | Malo_1994 | not_relevant | 0 | 0 | The paper investigates the efficacy of zileuton using mepyramine as a control, but it does not report any pharmacogenomic effects or gene variants affecting the PK or PD of mepyramine. |
| popPK | Marche_1988 | irrelevant | 0 | 0 | The study investigates the mechanism of action (phosphoinositide metabolism) of cicletanine in guinea-pig cells, using mepyramine only as a reference H1 antagonist, with no pharmacokinetic parameters reported. |
| PGx | Marche_1988 | not_relevant | 0 | 0 | The paper describes a pharmacological study on H1 receptor mechanisms and does not report any gene variant or pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of mepyramine. |
| popPK | Marley_1991 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of histamine receptors in bovine cells where mepyramine is used as a receptor antagonist, not a pharmacokinetic study. |
| PGx | Marley_1991 | not_relevant | 0 | 0 | The paper studies histamine receptor pharmacology in bovine cells and does not involve human genetics or pharmacogenomics. |
| popPK | Marley_1998 | irrelevant | 0 | 0 | Mepyramine is used only as a pharmacological tool to block histamine receptors in an in vitro enzyme activity study, with no pharmacokinetic parameters reported. |
| PGx | Marley_1998 | not_relevant | 0 | 0 | The paper reports no genetic variants or genotypes; it is a standard pharmacology study. |
| popPK | Medrano_1992 | irrelevant | 0 | 0 | Mepyramine is used only as an in vitro pharmacological antagonist to block histamine receptors, and no pharmacokinetic parameters are reported. |
| PGx | Medrano_1992 | not_relevant | 0 | 0 | The paper reports the pharmacodynamics of histamine in astrocytoma cells and the blocking effect of mepyramine, but does not report any genetic or pharmacogenomic differences affecting the drug's PK or PD. |
| popPK | Menghin_2003 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study of H1-receptor agonists where mepyramine is used only as a pharmacological antagonist to validate the receptor system, not as a drug for PK characterization. |
| PGx | Menghin_2003 | not_relevant | 0 | 0 | The paper describes the synthesis and in vitro pharmacological evaluation of H1 receptor agonists using mepyramine only as a control antagonist; it does not report any pharmacogenomic effects on mepyramine's PK or PD parameters. |
| popPK | Nwokocha_2012 | irrelevant | 0 | 0 | Mepyramine is used only as a pharmacological blocker (comparator) in a mechanistic study of Artocarpus altilis, with no pharmacokinetic parameters reported. |
| PGx | Nwokocha_2012 | not_relevant | 0 | 0 | The paper investigates the mechanisms of action of Artocarpus altilis extract and its interaction with CYP enzymes, but does not report any pharmacogenomic effects of mepyramine. |
| popPK | Ottosson_1989 | irrelevant | 0 | 0 | The study is an in vitro pharmacological characterization of histamine receptors, not a pharmacokinetic study, and reports no disposition parameters for mepyramine. |
| PGx | Ottosson_1989 | not_relevant | 0 | 0 | The paper reports pharmacological receptor characterization in human tissue, not the effect of a gene variant on mepyramine's PK or PD parameters. |
| popPK | Racké_1995 | irrelevant | 0 | 0 | The study investigates the modulation of noradrenaline release in rat stomach tissue and uses mepyramine only as a functional antagonist to test for histaminergic involvement, reporting no pharmacokinetic parameters for mepyramine. |
| PGx | Racké_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacological effect of mepyramine on noradrenaline release but contains no information on gene variants, genotypes, or pharmacogenomic influences. |
| popPK | Renier_2007 | irrelevant | 0 | 0 | The study investigates receptor binding and behavioral effects of mepyramine in zebrafish, not pharmacokinetic parameters (CL, V, etc.). |
| PGx | Renier_2007 | not_relevant | 0 | 0 | The paper investigates the conservation of sedative-hypnotic targets in zebrafish using mepyramine as a probe, but it does not report any specific gene variant, genotype, or phenotype that alters the pharmacokinetic or pharmacodynamic parameters of mepyramine. |
| popPK | Sadek_2004 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding/functional assay where mepyramine is used as a tool compound to define H1-antagonism, not a pharmacokinetic study reporting disposition parameters for mepyramine. |
| PGx | Sadek_2004 | not_relevant | 0 | 0 | The paper studies the pharmacodynamic properties of new H3-antagonists/H1-partial agonists in an in-vitro model and does not report any pharmacogenomic effects on mepyramine. |
| popPK | Sadek_2015 | irrelevant | 0 | 0 | The paper investigates in-vitro pharmacological effects (receptor binding/inhibition) of antihistamines, not pharmacokinetic parameters for mepyramine. |
| PGx | Sadek_2015 | not_relevant | 0 | 0 | The paper investigates off-target effects of antihistamines on nicotinic receptors and does not mention mepyramine or any pharmacogenomic variant. |
| popPK | Sarker_1998 | irrelevant | 0 | 0 | Mepyramine is used only as an H1 receptor antagonist for mechanistic investigation of cerebral microvascular permeability, not as the subject of pharmacokinetic analysis. |
| PGx | Sarker_1998 | not_relevant | 0 | 0 | The paper investigates the mechanism of histamine-induced microvascular permeability and the role of H1/H2 receptors, reporting no pharmacogenomic data or genetic variants affecting mepyramine's PK or PD. |
| popPK | Sharif_1996 | irrelevant | 0 | 0 | The paper studies olopatadine, not mepyramine, and reports in vitro receptor binding/functional data, not pharmacokinetic parameters for mepyramine. |
| PGx | Sharif_1996 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of olopatadine, not mepyramine, and does not report any pharmacogenomic effects on PK or PD parameters. |
| popPK | Sigrist_1986 | irrelevant | 0 | 0 | Mepyramine is used only as a pharmacological antagonist in a study of CGRP receptor binding and cardiovascular effects, with no PK parameters reported. |
| PGx | Sigrist_1986 | not_relevant | 0 | 0 | The paper studies the pharmacology of calcitonin gene-related peptide (CGRP) and uses mepyramine only as a negative control to rule out histamine involvement; it does not report pharmacogenomic effects on mepyramine PK/PD. |
| popPK | Smit_1996 | irrelevant | 0 | 0 | The paper is an in-vitro receptor pharmacology study using mepyramine as a radioligand for binding assays, not a pharmacokinetic study. |
| PGx | Smit_1996 | not_relevant | 1 | 0 | The paper characterizes the wild-type human H1 receptor in CHO cells (signaling, desensitization, downregulation) and uses mepyramine only as a radioligand for binding assays; it does not study gene variants/polymorphisms or their effect on mepyramine pharmacokinetics or pharmacodynamics. |
| popPK | Soria-Jasso_1997 | irrelevant | 0 | 0 | The study reports in vitro receptor binding affinities and inositol phosphate accumulation data, not pharmacokinetic parameters such as clearance, volume, or half-life. |
| PGx | Soria-Jasso_1997 | not_relevant | 0 | 0 | The paper characterizes H1 receptor binding and signaling in rat thalamus membranes but does not investigate any gene variants or genotypes. |
| popPK | Stanimirovic_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor signaling pathways where mepyramine is used only as a specific antagonist, with no pharmacokinetic parameters reported. |
| PGx | Stanimirovic_1994 | not_relevant | 0 | 0 | The paper describes pharmacological interactions between histamine and adenosine using mepyramine as a tool compound, but it does not report any pharmacogenomic (gene variant) effects on its PK or PD parameters. |
| popPK | Szabo_1993 | irrelevant | 0 | 0 | The study investigates pyrilamine (a different antihistamine), not mepyramine. |
| PGx | Szabo_1993 | not_relevant | 0 | 0 | The paper investigates the PET kinetics of [11C]pyrilamine in the human brain but does not report any pharmacogenomic analysis or gene variant effects. |
| popPK | Trzeciakowski_1987 | irrelevant | 0 | 0 | The paper is a pharmacological study on H3 receptors in guinea pig ileum and does not report pharmacokinetic parameters for mepyramine. |
| PGx | Trzeciakowski_1987 | not_relevant | 0 | 0 | The paper describes the pharmacology of H3 histamine receptors in guinea pig ileum and does not mention mepyramine or any pharmacogenomic effects. |
| popPK | Tung_2015 | irrelevant | 0 | 0 | Mepyramine is used only as an H1-antagonist control agent to block opioid effects, not as the subject of a pharmacokinetic analysis. |
| PGx | Tung_2015 | not_relevant | 0 | 0 | The paper investigates the cardiovascular pharmacodynamics of morphine and methadone, not the pharmacokinetics of mepyramine or any pharmacogenomic effects. |
| popPK | Voss_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic binding assay for CYP2D1 using [3H]-mepyramine as a probe ligand, not a pharmacokinetic study of mepyramine's disposition. |
| PGx | Voss_1994 | not_relevant | 0 | 0 | The paper uses mepyramine as a probe ligand to assess CYP2D1 activity and predict drug polymorphism, but does not report pharmacokinetic or pharmacodynamic effects of a genetic variant on mepyramine itself. |
| popPK | Wallace_1983 | irrelevant | 0 | 0 | This is an in vitro binding study measuring receptor affinity and dissociation rates, not a pharmacokinetic study with disposition parameters like clearance or volume. |
| PGx | Wallace_1983 | not_relevant | 0 | 0 | The paper investigates the temperature dependence of mepyramine binding to histamine H1 receptors in guinea pig cerebellum, with no involvement of genetic variants or pharmacogenomics. |
| popPK | White_1993 | irrelevant | 0 | 0 | The paper is an in vitro mechanistic study of receptor signaling and reports binding affinity (KD) for mepyramine, not pharmacokinetic parameters. |
| PGx | White_1993 | not_relevant | 0 | 0 | The paper studies receptor signaling and antagonist affinity in a cell line but contains no pharmacogenomic (gene variant) data. |
| popPK | Woodward_1985 | irrelevant | 0 | 0 | The study uses mepyramine as a histamine antagonist/comparator to study Substance P effects in guinea pigs, not to determine mepyramine's own pharmacokinetic parameters. |
| PGx | Woodward_1985 | not_relevant | 0 | 0 | The paper investigates the mechanism of substance P's effects using mepyramine as a tool in an animal model, but it does not report any pharmacogenomic influence on mepyramine's PK or PD parameters. |
| popPK | Yanai_1990 | irrelevant | 0 | 0 | The study focuses on the receptor binding kinetics of pyrilamine (pipolamine) in guinea pig brain, not the systemic pharmacokinetics of mepyramine. |
| PGx | Yanai_1990 | not_relevant | 0 | 0 | The paper investigates the in vivo binding kinetics of [3H]pyrilamine (a surrogate for mepyramine) to H1 receptors in guinea pigs using a pharmacokinetic model, but it does not report any pharmacogenomic effects (gene variants) on these parameters. |
| popPK | Yanai_1991 | irrelevant | 0 | 0 | The study focuses on the receptor binding kinetics of pyrilamine and doxepin, not the population pharmacokinetics of mepyramine. |
| PGx | Yanai_1991 | not_relevant | 0 | 0 | The paper describes PET imaging and binding kinetics of pyrilyline/doxepin for H1-receptors and does not mention mepyramine or pharmacogenomic effects. |
| popPK | Zeng_1997 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology study on platelet aggregation in rabbits, not a pharmacokinetic study, and contains no PK parameters like clearance or volume for mepyramine. |
| PGx | Zeng_1997 | not_relevant | 0 | 0 | The paper investigates the mechanism of mepyramine's effect on platelet aggregation in a rabbit model but does not report any human genetic variants, genotypes, or phenotypes influencing PK/PD. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmepyramine%5D&body=Drug%3A%20mepyramine%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_mepyramine/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-24 01:12 UTC</sub>
