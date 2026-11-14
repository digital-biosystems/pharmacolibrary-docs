<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Quazepam&quot;}]"></div>

# Quazepam

- **generic name:** Quazepam
- **T3DB:** [T3D3055](http://www.t3db.ca/toxins/T3D3055) · **DrugBank:** [DB01589](https://go.drugbank.com/drugs/DB01589) · **PubChem:** [CID 4999](https://pubchem.ncbi.nlm.nih.gov/compound/4999)
- **groups:** approved, illicit

## About

Quazepam is only found in individuals that have used or taken this drug. It is a drug which is a benzodiazepine derivative. It induces impairment of motor function and has hypnotic properties. …

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** bioavailability is 29-35% following oral administration.
- **Sources and uses:** Quazepam is indicated for the treatment of insomnia including sleep induction and sleep maintenance. [Wikipedia]
- **Mechanism of toxicity:** Benzodiazepines bind nonspecifically to benzodiazepine receptors, which affects muscle relaxation, anticonvulsant activity, motor coordination, and memory. As benzodiazepine receptors are thought to be coupled to gamma-aminobutyric acid-A (GABA<sub>A</sub>) receptors, this enhances the effects of GABA by increasing GABA affinity for the GABA receptor. …
- **Health effects:** They cause slurred speech, disorientation and "drunken" behavior. They are physically and psychologically addictive.

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D3055">T3DB T3D3055</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 36735-22-5 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:774423">ChEBI 774423</a></small></p>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| Quazepam | parent | 386.791 | C17H11ClF4N2S | PubChem | [4999](https://pubchem.ncbi.nlm.nih.gov/compound/4999) | Hilbert_1984_2 |
| 2-oxoquazepam | metabolite | 370.73 | C17H11ClF4N2O | PubChem | [93250](https://pubchem.ncbi.nlm.nih.gov/compound/93250) | Hilbert_1984_2 |
| N-desalkyl-2-oxoquazepam (N-desalkylflurazepam) | metabolite | — (mass units only) | — | — | — | — |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Needs review" data-sim="no"></span><span class="pk-badge pk-badge--orange">Needs review</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub> | [Hilbert_1984_2_reference](drugs/toxin_quazepam/Quazepam_Hilbert1984v2_reference.md) | held back | 1-compartment, oral | 2 | Hilbert JM et al., Effect of sleep on quazepam kinetics, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.146](https://doi.org/10.1038/clpt.1984.146) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=quazepam).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2C19` substrate, `CYP2C9` substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: GABRA1 (positive allosteric modulator), GABRA1 (target), TSPO (modulator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model runs for this record's scenarios and each one changes the simulation, but the paper reports no values for them to compare with. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-13 05:10 | 4:55 | 1/0/0 | 0/0/0 | 0/0/0 | 84,006/5,858 | einfracz / qwen3.8-flash-next | 2 | 0/1 | 2/0 | 0 |

## Coverage

- **PubMed hits:** 56 matched, 55 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 1  ·  extracted 0  ·  needs review 1  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_12 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Hilbert_1984_2.pdf` | Hilbert JM et al., Effect of sleep on quazepam kinetics, Clinical pharmacology and t… (1984) | popPK | 10 | [10.1038/clpt.1984.146](https://doi.org/10.1038/clpt.1984.146) | [6734056](https://pubmed.ncbi.nlm.nih.gov/6734056) | The paper reports quantitative half-lives and volume of distribution for quazepam and its metabolites in humans directly in the text. |
| `Kim_2003.pdf` | Kim Y et al., Effects of foods on the pharmacokinetic…, Nihon shinkei seishin yakur… (2003) | popPK | 9 |  | [14653226](https://pubmed.ncbi.nlm.nih.gov/14653226) | The paper reports pharmacokinetic effects (AUC, Cmax fold-changes) in humans but the evidence provided only contains qualitative comparisons and fold-changes rather than absolute numeric kinetic parameters (e.g., t1/2, CL, Vd). |
| `Schaffler_1989.pdf` | Schaffler K et al., Longitudinal study on pharmacodynamics…, Arzneimittel-Forschung (1989) | popPK | 9 |  | [2567171](https://pubmed.ncbi.nlm.nih.gov/2567171) | The paper reports on a pharmacokinetic steady-state study of quazepam in humans, but the provided text (abstract) lacks specific numeric kinetic parameters like half-lives or clearance rates, mentioning only that analysis was performed. |
| `Yasui-Furukori_2002.pdf` | Yasui-Furukori N et al., Effect of dietary fat content in meals…, Journal of clinical pharmac… (2002) | popPK | 9 | [10.1177/0091270002042012004](https://doi.org/10.1177/0091270002042012004) | [12463728](https://pubmed.ncbi.nlm.nih.gov/12463728) | The study reports quantitative pharmacokinetic parameters (AUC fold-changes and Cmax ratios) for quazepam in humans, but the actual numeric concentration values required for model parameter extraction are not present in the provided text, which only lists relative changes. |
| `Hilbert_1991.pdf` | Hilbert JM et al., Quazepam and flurazepam: differential p…, The Journal of clinical psy… (1991) | popPK | 8 |  | [1680120](https://pubmed.ncbi.nlm.nih.gov/1680120) | The paper title and abstract explicitly promise quantitative pharmacokinetic characteristics and rate constants for quazepam, but the provided evidence contains only qualitative text without any numeric values. |
| `Yasui-Furukori_2003.pdf` | Yasui-Furukori N et al., Time effects of food intake on the phar…, British journal of clinical… (2003) | popPK | 8 | [10.1046/j.1365-2125.2003.01775.x](https://doi.org/10.1046/j.1365-2125.2003.01775.x) | [12680887](https://pubmed.ncbi.nlm.nih.gov/12680887) | The paper reports quantitative pharmacokinetic parameters (Cmax fold changes and fold increases in AUC) for quazepam and its metabolite in humans, though specific absolute values for t1/2 or CL are not explicitly listed in the provided text. |
| `Fukasawa_2004.pdf` | Fukasawa T et al., Single oral dose pharmacokinetics of qu…, Therapeutic drug monitoring (2004) | popPK | 6 | [10.1097/00007691-200410000-00011](https://doi.org/10.1097/00007691-200410000-00011) | [15385836](https://pubmed.ncbi.nlm.nih.gov/15385836) | The paper reports quantitative PK parameters (Cmax, AUC) for quazepam in humans, which are relevant kinetic metrics, though it lacks the more complex parameters (half-life, clearance, Vd) typically prioritized for extraction. |
| `Yamazaki_2007.pdf` | Yamazaki A et al., Different effects of light food on phar…, Journal of clinical pharmac… (2007) | popPK | 6 | [10.1111/j.1365-2710.2007.00795.x](https://doi.org/10.1111/j.1365-2710.2007.00795.x) | [17286787](https://pubmed.ncbi.nlm.nih.gov/17286787) | The paper reports on the pharmacokinetics of quazepam in humans, but the extracted evidence only provides relative fold-changes (1.2-fold, 1.5-fold) and statistical intervals, lacking absolute quantitative values for parameters like half-life, clearance, or volume of distribution. |
| `Fukasawa_2007.pdf` | Fukasawa T et al., Effects of genetic polymorphism of cyto…, Journal of clinical pharmac… (2007) | pgx | 8 | [10.1111/j.1365-2710.2007.00829.x](https://doi.org/10.1111/j.1365-2710.2007.00829.x) | [17635335](https://www.ncbi.nlm.nih.gov/pubmed/17635335) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Hara_2005.pdf` | Hara Y et al., Inhibitory effects of psychotropic drug…, Xenobiotica; the fate of fo… (2005) | pgx | 7 | [10.1080/00498250500158134](https://doi.org/10.1080/00498250500158134) | [16192107](https://www.ncbi.nlm.nih.gov/pubmed/16192107) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Izzo_2009.pdf` | Izzo AA et al., Interactions between herbal medicines a…, Drugs (2009) | pgx | 7 | [10.2165/11317010-000000000-00000](https://doi.org/10.2165/11317010-000000000-00000) | [19719333](https://www.ncbi.nlm.nih.gov/pubmed/19719333) | metadata signals extractable PGX data (CYP2E1, PK/PD-context) |
| `Sugimoto_2006.pdf` | Sugimoto K et al., Interaction between grapefruit juice an…, European journal of clinica… (2006) | pgx | 7 | [10.1007/s00228-005-0071-1](https://doi.org/10.1007/s00228-005-0071-1) | [16416305](https://www.ncbi.nlm.nih.gov/pubmed/16416305) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-11-13 05:08 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arnold_1991 | irrelevant | 2 | 0 | The text mentions quazepam's lipophilicity in vitro but provides no quantitative toxicokinetic parameters (such as half-life, clearance, or partition coefficients). |
| popPK | Fujimiya_1995 | irrelevant | 0 | 0 | The paper studies ethanol pharmacokinetics in rabbits, not quazepam. |
| popPK | Fukasawa_2007 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PGx | Fukasawa_2007 | not_relevant | 2 | 2 | The title indicates a general review of benzodiazepine pharmacokinetics affected by CYP polymorphisms, but does not specifically mention quazepam or provide fitted effect sizes. |
| popPK | Gupta_1988 | irrelevant | 4 | 1 | The text describes the analytical method and states that the study applied it to healthy volunteers, but the provided evidence contains no numeric pharmacokinetic parameters (half-lives, clearances, etc.). |
| popPK | Gómez-Garduño_2022 | irrelevant | 1 | 1 | The paper is a review of phytochemical-drug interactions where quazepam is merely listed as one of many affected drugs, with no specific quantitative kinetic parameters for quazepam itself provided in the evidence. |
| popPK | Hara_2005 | irrelevant | 2 | 0 | Quazepam is listed only as a co-inhibitor tested against mexiletine metabolism, and no kinetic parameters (such as Ki or clearance) are reported specifically for quazepam in the text. |
| PGx | Hara_2005 | not_relevant | 0 | 0 | The paper discusses quazepam's inhibitory effect on mexiletine metabolism (drug-drug interaction), not how a gene variant affects quazepam's own pharmacokinetic or pharmacodynamic parameters. |
| popPK | Hilbert_1984 | irrelevant | 1 | 0 | The paper describes analytical method validation (limit of detection, precision, recovery) and contains no quantitative pharmacokinetic parameters (such as half-life, clearance, or Vd) for quazepam. |
| popPK | Hilbert_1991 | relevant | 8 | 0 | The paper title and abstract explicitly promise quantitative pharmacokinetic characteristics and rate constants for quazepam, but the provided evidence contains only qualitative text without any numeric values. |
| popPK | Izzo_2009 | irrelevant | 1 | 0 | Quazepam is only mentioned in a list of drugs affected by St John's wort; no quantitative kinetic parameters are reported. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper discusses drug-herb interactions (St. John's wort) affecting quazepam PK, not pharmacogenomic effects of gene variants. |
| popPK | Jochemsen_1984 | irrelevant | 2 | 0 | The paper is a general review of benzodiazepine pharmacokinetics that mentions quazepam qualitatively but reports no specific quantitative kinetic parameters for it. |
| popPK | Jochemsen_1986 | irrelevant | 0 | 0 | The paper mentions quazepam qualitatively as having slowly eliminated active metabolites but provides no quantitative pharmacokinetic parameters or numeric values for it in the provided text. |
| PGx | Kawaguchi_2004 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction between St John's Wort and quazepam mediated by CYP3A4 enzyme induction, not the effect of a specific gene variant or genotype on quazepam pharmacokinetics. |
| popPK | Kim_2003 | relevant | 9 | 2 | The paper reports pharmacokinetic effects (AUC, Cmax fold-changes) in humans but the evidence provided only contains qualitative comparisons and fold-changes rather than absolute numeric kinetic parameters (e.g., t1/2, CL, Vd). |
| popPK | Liu_2025 | relevant | 4 | 0 | The paper discusses PK modeling of quazepam (stomach solubilization/food effect) but the provided evidence contains no numeric kinetic parameters, only abstract-level description. |
| PGx | Miura_2004 | not_relevant | 0 | 0 | The paper discusses in vitro metabolism and drug interactions involving CYP inhibitors, not genetic variants or phenotypes. |
| popPK | Moniri_2019 | irrelevant | 1 | 0 | This is a review article that qualitatively discusses pharmacology and pharmacokinetics without reporting specific numeric toxicokinetic parameters for quazepam. |
| PGx | Otani_2003 | not_relevant | 1 | 0 | The text discusses drug-drug interactions involving CYP3A4 inhibitors and inducers affecting quazepam metabolism, but does not report on genetic polymorphisms or pharmacogenomic variants. |
| popPK | Palich_2026 | irrelevant | 0 | 0 | The paper concerns the pharmacokinetics and efficacy of doravirine and raltegravir for HIV treatment and does not mention quazepam at all. |
| popPK | Schaffler_1989 | relevant | 9 | 2 | The paper reports on a pharmacokinetic steady-state study of quazepam in humans, but the provided text (abstract) lacks specific numeric kinetic parameters like half-lives or clearance rates, mentioning only that analysis was performed. |
| popPK | Schroeck_2016 | irrelevant | 1 | 0 | The paper is a general review of sleep medications in older adults that mentions quazepam only in the search terms but reports no quantitative kinetic parameters for it. |
| PGx | Sugimoto_2006 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction study between quazepam and grapefruit juice (a CYP3A4 inhibitor), not a pharmacogenomic study involving gene variants or genotypes. |
| popPK | Wang_2003 | irrelevant | 1 | 0 | This is a review paper summarizing other studies' values and does not provide original numeric kinetic parameters in the extracted evidence. |
| popPK | Yamazaki_2007 | relevant | 6 | 2 | The paper reports on the pharmacokinetics of quazepam in humans, but the extracted evidence only provides relative fold-changes (1.2-fold, 1.5-fold) and statistical intervals, lacking absolute quantitative values for parameters like half-life, clearance, or volume of distribution. |
| popPK | Yasui-Furukori_2002 | relevant | 9 | 3 | The study reports quantitative pharmacokinetic parameters (AUC fold-changes and Cmax ratios) for quazepam in humans, but the actual numeric concentration values required for model parameter extraction are not present in the provided text, which only lists relative changes. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bquazepam%5D&body=Drug%3A%20quazepam%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_quazepam/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-13 05:09 UTC</sub>
