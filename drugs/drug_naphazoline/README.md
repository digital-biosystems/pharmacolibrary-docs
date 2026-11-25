<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;R01A&quot;,&quot;href&quot;:&quot;atc/R01A.md&quot;},{&quot;label&quot;:&quot;naphazoline&quot;}]"></div>

# naphazoline

- **generic name:** naphazoline
- **ATC codes:** `R01AA08`, `R01AB02`, `S01GA01`
- **DrugBank:** [DB06711](https://go.drugbank.com/drugs/DB06711) · **PubChem:** [CID 4436](https://pubchem.ncbi.nlm.nih.gov/compound/4436)
- **molar mass:** 210.2744 g/mol (C14H14N2) — DrugBank
- **groups:** approved

## About

Naphazoline is a sympathomimetic decongestant used to treat nasal congestion, sinus inflammation, and eye redness. It is applied directly to the eyes or nose in liquid or spray forms to reduce swelling and congestion. The drug is approved for use in various markets.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q415433](https://www.wikidata.org/wiki/Q415433), [Wikipedia](https://en.wikipedia.org/wiki/Naphazoline?oldid=1329443393) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 01:24 | 0:03 | 0/0/0 | 0/0/0 | 0/0/0 | 3,824/168 | einfracz / qwen3.8-27b | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sjöberg_1987.pdf` | Sjöberg T et al., Postjunctional alpha-adrenoceptors in h…, Pharmacology & toxicology (1987) | pd | 4 | [10.1111/j.1600-0773.1987.tb01717.x](https://doi.org/10.1111/j.1600-0773.1987.tb01717.x) | [2882498](https://www.ncbi.nlm.nih.gov/pubmed/2882498) | metadata signals extractable PD data (Emax) |
| `Wu_2017.pdf` | Wu SF et al., Pharmacological characterisation and fu…, Insect biochemistry and mol… (2017) | pd | 4 | [10.1016/j.ibmb.2017.06.008](https://doi.org/10.1016/j.ibmb.2017.06.008) | [28629966](https://www.ncbi.nlm.nih.gov/pubmed/28629966) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-24 01:24 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Agrawal_1984 | irrelevant | 0 | 0 | The study is a pharmacological characterization of alpha adrenoceptors using naphazoline as an agonist, not a pharmacokinetic study. |
| PGx | Agrawal_1984 | not_relevant | 0 | 0 | The paper describes pharmacological receptor characterization in animal tissues and contains no human genetic or pharmacogenomic data. |
| popPK | Díaz-Toledo_1988 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study of receptor occupancy and contractile response, not a pharmacokinetic study. |
| PGx | Díaz-Toledo_1988 | not_relevant | 0 | 0 | The paper reports pharmacodynamic characterization of naphazoline in rat vas deferens but does not involve genetic variants or pharmacogenomics. |
| popPK | Ishikawa_1996 | irrelevant | 0 | 0 | The study is an in vitro pharmacological investigation of receptor activity in bovine ciliary artery and does not report any pharmacokinetic disposition parameters (CL, V, t1/2, etc.) for naphazoline. |
| PGx | Ishikawa_1996 | not_relevant | 0 | 0 | The study is an in vitro pharmacology experiment on bovine tissue and does not investigate human genetic variants or pharmacogenomics. |
| popPK | Lei_1998 | irrelevant | 0 | 0 | The paper investigates the pharmacological mechanism of tolazoline derivatives and naphazoline-NCS on calcium channels and receptors, not the pharmacokinetic disposition of naphazoline. |
| PGx | Lei_1998 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of isothiocyanate derivatives (including a naphazoline analog) on calcium channels, not the pharmacogenomics of naphazoline. |
| popPK | Minker_1978 | irrelevant | 0 | 0 | The paper is an in vitro pharmacology study on guinea pig smooth muscle, not a pharmacokinetic study, and contains no PK parameters for naphazoline. |
| PGx | Minker_1978 | not_relevant | 0 | 0 | The paper investigates pharmacological interactions in guinea pigs, not human pharmacogenomics or genetic effects on naphazoline pharmacokinetics/dynamics. |
| popPK | Piascik_1991 | irrelevant | 0 | 0 | The study investigates receptor binding and pharmacodynamics in vitro, not the pharmacokinetic disposition parameters (CL, V, half-life) of naphazoline. |
| PGx | Piascik_1991 | not_relevant | 0 | 0 | The paper describes the pharmacology of naphazoline on alpha-1 adrenoceptor subtypes in rat aorta, with no mention of genetic variation or pharmacogenomic effects. |
| popPK | Sakurai_1983 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of adrenoceptor agonists on catecholamine secretion and does not report any pharmacokinetic parameters for naphazoline. |
| PGx | Sakurai_1983 | not_relevant | 0 | 0 | The paper reports on the mechanism of catecholamine secretion in cells and does not describe pharmacokinetic or pharmacodynamic parameters altered by gene variants. |
| popPK | Salazar-Bookaman_2006 | irrelevant | 0 | 0 | The study investigates receptor antagonism in guinea-pig ileum and does not report pharmacokinetic parameters for naphazoline. |
| PGx | Salazar-Bookaman_2006 | not_relevant | 0 | 0 | The study describes in vitro pharmacodynamics of imidazolines on guinea-pig ileum, not a pharmacogenomic effect on human PK/PD parameters. |
| popPK | Sharif_1990 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-adrenoceptors where naphazoline acts as an antagonist/probe agent, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Sharif_1990 | not_relevant | 0 | 0 | The paper characterizes adrenoceptor pharmacology in rat seminal vesicles but does not report any pharmacogenomic effects on naphazoline PK/PD parameters. |
| popPK | Sjöberg_1987 | irrelevant | 0 | 0 | The study characterizes alpha-adrenoceptor pharmacology in human vasculature using naphazoline as a probe agonist, not a population-pharmacokinetic study. |
| PGx | Sjöberg_1987 | not_relevant | 0 | 0 | The paper reports a pharmacological characterization of alpha-adrenoceptors using naphazoline as an agonist, but it does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of naphazoline. |
| popPK | Starke_1975 | irrelevant | 0 | 0 | This is an in-vitro pharmacological study measuring receptor potency (EC20, pA2) in rabbit pulmonary artery strips, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Starke_1975 | not_relevant | 0 | 0 | The paper investigates receptor pharmacology in an animal model and contains no data on human genetic variants or pharmacogenomics. |
| popPK | Summers_1980 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay for clonidine and naphazoline, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Summers_1980 | not_relevant | 0 | 0 | The paper is a study on clonidine binding affinity in rat membranes and does not report any pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of naphazoline. |
| popPK | Takayanagi_1986 | irrelevant | 0 | 0 | This is an in-vitro mechanistic/pharmacodynamic study of alpha-adrenoceptor antagonists, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Takayanagi_1986 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of alpha-1 antagonists on vascular smooth muscle in an in vitro model and contains no pharmacogenomic analysis or genetic variant data. |
| popPK | Venkataraman_1991 | irrelevant | 0 | 0 | The paper is a pharmacodynamic/structure-activity study measuring receptor affinity (KA/IC50) and functional responses, not a pharmacokinetic study reporting disposition parameters like clearance or volume of distribution. |
| PGx | Venkataraman_1991 | not_relevant | 0 | 0 | The paper describes structure-activity relationships and adrenoceptor potencies in vitro, but does not investigate genetic variants or pharmacogenomic effects on naphazoline's PK/PD. |
| popPK | Wu_2012 | irrelevant | 0 | 0 | The paper is a receptor pharmacology study in an insect using naphazoline as a probe agonist, not a pharmacokinetic study. |
| PGx | Wu_2012 | not_relevant | 0 | 0 | The paper characterizes an insect octopamine receptor and its pharmacological profile, but it does not report any human pharmacogenomic effects of gene variants on naphazoline PK or PD parameters. |
| popPK | Wu_2013 | irrelevant | 0 | 0 | The study is an in vitro receptor pharmacology paper on an insect receptor, using naphazoline only as a negative comparator, with no pharmacokinetic parameters reported. |
| PGx | Wu_2013 | not_relevant | 0 | 0 | The paper characterizes a tyramine receptor in an insect and is unrelated to human pharmacogenomics or naphazoline PK/PD parameters. |
| popPK | Wu_2017 | irrelevant | 0 | 0 | This is an in vitro/in vivo receptor pharmacology study in insects where naphazoline is used only as a probe ligand, with no PK parameters reported. |
| PGx | Wu_2017 | not_relevant | 0 | 0 | The paper studies an invertebrate receptor and does not involve human pharmacogenomics or genetic variation affecting the PK/PD of naphazoline. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnaphazoline%5D&body=Drug%3A%20naphazoline%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_naphazoline/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
