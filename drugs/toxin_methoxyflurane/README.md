<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Toxins&quot;,&quot;href&quot;:&quot;toxins/README.md&quot;},{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;toxins/DRUG.md&quot;},{&quot;label&quot;:&quot;Methoxyflurane&quot;}]"></div>

# Methoxyflurane

- **generic name:** Methoxyflurane
- **T3DB:** [T3D2962](http://www.t3db.ca/toxins/T3D2962) · **DrugBank:** [DB01028](https://go.drugbank.com/drugs/DB01028) · **PubChem:** [CID 4116](https://pubchem.ncbi.nlm.nih.gov/compound/4116)
- **groups:** approved, investigational, vet_approved, withdrawn

## About

An inhalation anesthetic. Currently, methoxyflurane is rarely used for surgical, obstetric, or dental anesthesia. If so employed, it should be administered with nitrous oxide to achieve a relatively light level of anesthesia, and a neuromuscular blocking agent given concurrently to obtain the desired degree of muscular relaxation. (From AMA Drug Evaluations Annual, 1994, p180)

- **Category:** Drug, Synthetic Toxin
- **Route of exposure:** oral
- **Sources and uses:** For use in the induction and maintenance of general anesthesia
- **Mechanism of toxicity:** Methoxyflurane induces a reduction in junctional conductance by decreasing gap junction channel opening times and increasing gap junction channel closing times. Methoxyflurane also activates calcium dependent ATPase in the sarcoplasmic reticulum by increasing the fluidity of the lipid membrane. …
- **Health effects:** Detrimental effects on the kidneys. [Wikipedia]
- **Acute toxicity:** LD50: 3600 mg/kg (Oral, Rat)

<p><small>Toxicology facts: <a href="http://www.t3db.ca/toxins/T3D2962">T3DB T3D2962</a> (free for non-commercial use with attribution), quoted in part; reference markers removed; the description above is T3DB's too.</small></p>

<p><small>Also: CAS 76-38-0 · <a href="https://www.ebi.ac.uk/chebi/searchId.do?chebiId=CHEBI:384208">ChEBI 384208</a></small></p>

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span><br><sub>blocking: missing key parameters — none reported by this paper</sub> | [Carpenter_1987_reference](drugs/toxin_methoxyflurane/Methoxyflurane_Carpenter1987_reference.md) | — | 1-compartment (no model) | 0 | Carpenter RL et al., Does the duration of anesthetic adminis…, Anesthesia and analgesia (1987) | — |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-15 07:42 | 14:33 | 0/1/0 | 0/0/0 | 0/0/0 | 548,346/36,370 | einfracz / qwen3.8-flash-next | 7 | 2/5 | 7/0 | 0 |

## Coverage

- **PubMed hits:** 57 matched, 57 returned
- **screened:** 5  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carpenter_1987.pdf` | Carpenter RL et al., Does the duration of anesthetic adminis…, Anesthesia and analgesia (1987) | popPK | 10 |  | [3800013](https://pubmed.ncbi.nlm.nih.gov/3800013) | The paper explicitly reports time constants and percentages of metabolism for methoxyflurane in humans, with values likely present in the associated tables or text figures referenced in the evidence. |
| `Carpenter_1986.pdf` | Carpenter RL et al., Pharmacokinetics of inhaled anesthetics…, Anesthesia and analgesia (1986) | popPK | 9 |  | [3706798](https://pubmed.ncbi.nlm.nih.gov/3706798) | The paper reports multiexponential model parameters (time constants) for methoxyflurane in humans, which are valid toxicokinetic parameters, but no specific numeric values or table data are provided in the evidence text. |
| `Churchill_1976.pdf` | Churchill D et al., Toxic nephropathy after low-dose methox…, Canadian Medical Associatio… (1976) | popPK | 8 |  | [1253070](https://pubmed.ncbi.nlm.nih.gov/1253070) | The paper reports serum fluoride concentrations (a key metabolite marker) and blood levels of methoxyflurane in humans, which are quantitative kinetic/toxicological data, though specific rate constants or volumes are not explicitly detailed in the text provided. |
| `Fiserova-Bergerova_1979.pdf` | Fiserova-Bergerova V et al., Uptake and clearance of inhalation anes…, Drug metabolism reviews (1979) | popPK | 8 | [10.3109/03602537909046433](https://doi.org/10.3109/03602537909046433) | [376257](https://pubmed.ncbi.nlm.nih.gov/376257) | The paper describes a pharmacokinetic study involving uptake and clearance parameters for methoxyflurane, but the specific numeric values for these parameters are not present in the provided evidence snippet. |
| `Strum_1991.pdf` | Strum DP et al., Age affects the pharmacokinetics of inh…, Anesthesia and analgesia (1991) | popPK | 8 | [10.1213/00000539-199109000-00015](https://doi.org/10.1213/00000539-199109000-00015) | [1867426](https://pubmed.ncbi.nlm.nih.gov/1867426) | The paper describes a PBPK/pharmacokinetic study of methoxyflurane in humans, but the provided evidence text only summarizes the methodology and qualitative findings without listing the actual numeric kinetic parameters. |
| `Jenkins_1996.pdf` | Jenkins A et al., Actions of general anaesthetics on 5-HT…, British journal of pharmaco… (1996) | pd | 4 | [10.1111/j.1476-5381.1996.tb15314.x](https://doi.org/10.1111/j.1476-5381.1996.tb15314.x) | [8730747](https://www.ncbi.nlm.nih.gov/pubmed/8730747) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-11-15 07:37 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Allison_2021 | irrelevant | 2 | 0 | The paper is a narrative review of historical and modern risks without reporting original quantitative toxicokinetic parameters. |
| popPK | Anderson_1975 | irrelevant | 0 | 0 | The paper reports kinetic parameters (permeability coefficients/clearances) for electrolytes and creatinine, not methoxyflurane; methoxyflurane is used only as an anesthetic agent. |
| popPK | Bokor-Bratić_2000 | irrelevant | 0 | 0 | Methoxyflurane is mentioned only as a co-exposure causing nephrotoxicity in interaction with tetracyclines, with no kinetic parameters reported for it. |
| popPK | Carpenter_1986 | relevant | 9 | 0 | The paper reports multiexponential model parameters (time constants) for methoxyflurane in humans, which are valid toxicokinetic parameters, but no specific numeric values or table data are provided in the evidence text. |
| popPK | Carter_1976 | irrelevant | 0 | 0 | The paper studies fluoride ion kinetics resulting from ENFLURANE anesthesia, with methoxyflurane mentioned only as background context; no kinetic parameters for methoxyflurane are reported. |
| popPK | Churchill_1976 | relevant | 8 | 4 | The paper reports serum fluoride concentrations (a key metabolite marker) and blood levels of methoxyflurane in humans, which are quantitative kinetic/toxicological data, though specific rate constants or volumes are not explicitly detailed in the text provided. |
| popPK | Clement_1990 | irrelevant | 0 | 0 | The paper reports pharmacokinetic parameters for the substance HI-6, while methoxyflurane is used solely as an anesthetic agent/comparator to affect HI-6 kinetics, with no kinetic parameters reported for methoxyflurane itself. |
| popPK | Dudziak_1996 | irrelevant | 1 | 1 | The paper focuses on sevoflurane toxicokinetics, mentioning methoxyflurane only as a comparator without reporting any quantitative kinetic parameters for methoxyflurane itself. |
| popPK | Dyson_1992 | irrelevant | 2 | 0 | The paper mentions methoxyflurane's properties qualitatively but provides no quantitative kinetic parameters or numeric values. |
| popPK | Feingold_1977 | irrelevant | 1 | 0 | Methoxyflurane is mentioned only as a comparator/analogue, and all quantitative partition coefficients are for halothane, not methoxyflurane. |
| popPK | Fiserova-Bergerova_1979 | relevant | 8 | 0 | The paper describes a pharmacokinetic study involving uptake and clearance parameters for methoxyflurane, but the specific numeric values for these parameters are not present in the provided evidence snippet. |
| popPK | Gelfand_1973 | irrelevant | 0 | 0 | no_text gate: only 74 chars of text extracted (&lt; 400) |
| popPK | Gologorskiĭ_1972 | irrelevant | 0 | 0 | no_text gate: only 104 chars of text extracted (&lt; 400) |
| popPK | Holaday_1976 | irrelevant | 2 | 0 | The paper focuses on 1-bromo-1,2,2-trifluorocyclobutane, using methoxyflurane only as a comparator, and no specific kinetic parameters for methoxyflurane are reported in the evidence. |
| popPK | Kampan_2026 | irrelevant | 0 | 0 | The paper is a clinical review of pain management in older adults that mentions methoxyflurane only as an analgesic option, providing no quantitative toxicokinetic parameters. |
| popPK | Kaneshina_1982 | irrelevant | 0 | 0 | The paper reports thermodynamic physical chemistry parameters (partial molal volumes, CMC-decreasing power) for methoxyflurane in surfactant micelles, not biological toxicokinetic parameters. |
| popPK | Kharasch_1993 | irrelevant | 0 | 0 | no_text gate: only 159 chars of text extracted (&lt; 400) |
| popPK | Komatsu_1991 | irrelevant | 0 | 0 | The paper measures the incidence of a behavioral outcome (opisthotonus) and does not report any quantitative toxicokinetic parameters such as partition coefficients, half-lives, or clearance rates. |
| popPK | Kubica_2021 | irrelevant | 0 | 0 | The paper is a clinical trial protocol describing the rationale and design for comparing analgesic efficacy and safety; it contains no quantitative toxicokinetic parameters for methoxyflurane. |
| popPK | Lerman_1983 | irrelevant | 4 | 0 | The study measures the effect of osmolarity on solubility (in vitro property), but no specific numeric partition coefficients for methoxyflurane are provided in the text. |
| popPK | Lerman_1984 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| popPK | Levitt_2002 | irrelevant | 2 | 5 | The paper explicitly states that methoxyflurane cannot be modeled by this PBPK approach due to artifact issues and does not report fitted kinetic parameters for it, unlike the other solutes. |
| PGx | Mazze_1974 | not_relevant | 0 | 0 | The text mentions only biotransformation and contains no data on genetic variants or their effect on PK/PD parameters. |
| popPK | Menke_1988 | irrelevant | 1 | 0 | The paper reports tumor blood flow values as a pharmacodynamic effect of methoxyflurane, but provides no quantitative toxicokinetic parameters (half-life, clearance, partition coefficients, etc.) for methoxyflurane disposition. |
| popPK | Niezgoda_2026 | irrelevant | 1 | 0 | The study investigates methoxyflurane only as a comparator/co-exposure to measure its effect on the pharmacokinetics of a different drug (ticagrelor), with no kinetic parameters reported for methoxyflurane itself. |
| popPK | Nuscheler_1998 | irrelevant | 1 | 0 | The paper is about sevoflurane metabolism; methoxyflurane is mentioned only as a historical reference for a toxicity threshold, with no kinetic parameters reported for methoxyflurane itself. |
| PGx | PMID30499100_2019 | not_relevant | 2 | 2 | The paper is a clinical guideline for malignant hyperthermia susceptibility based on RYR1/CACNA1S genotypes, which is a pharmacodynamic susceptibility issue rather than a quantitative pharmacokinetic effect on methoxyflurane parameters. |
| popPK | Pedersoli_1977 | relevant | 4 | 8 | The paper reports time-course serum fluoride concentrations which constitute a body burden/retention time course, but lacks derived kinetic parameters like half-life or clearance. |
| popPK | Roman_1977 | irrelevant | 2 | 0 | The paper measures renal physiological outcomes (GFR, urine flow) in rats given methoxyflurane but reports no toxicokinetic parameters such as half-lives, clearance rates, or partition coefficients. |
| popPK | Röhm_2009 | irrelevant | 1 | 0 | Methoxyflurane is only mentioned as historical context for fluoride toxicity; the study measures fluoride levels in sevoflurane and propofol patients, not methoxyflurane kinetic parameters. |
| popPK | Samuelson_1976 | irrelevant | 3 | 2 | The paper reports serum concentrations and renal clearances of fluoride metabolites rather than toxicokinetic parameters (e.g., half-life, volume of distribution, clearance) of methoxyflurane itself; the numeric tables contain physiological renal markers (creatinine, uric acid) and metabolite levels, not kinetic constants. |
| popPK | Seto_1992 | irrelevant | 2 | 8 | The paper reports aqueous solubility (a physical property), not kinetic parameters like half-life, clearance, or partition coefficients. |
| popPK | Siegers_1982 | irrelevant | 3 | 0 | The study focuses on drug interactions and metabolic impairment rates rather than reporting standalone quantitative toxicokinetic parameters (like half-life, clearance, or partition coefficients) for methoxyflurane itself, and no numeric values are provided in the text. |
| popPK | Siriwardena_2021 | irrelevant | 1 | 0 | The paper reports clinical outcomes (pain relief times, side effects, costs) but no toxicokinetic parameters (e.g., half-lives, partition coefficients, clearance, volumes of distribution) for methoxyflurane. |
| popPK | Smith_1981 | irrelevant | 2 | 8 | The reported lipid/gas partition coefficients are used here to investigate the physical mechanism of anesthesia (Meyer-Overton rule) and anesthetic potency, not to model toxicokinetic disposition, clearance, or metabolic fate in a biological system. |
| popPK | Smith_2022 | irrelevant | 0 | 0 | The paper is a clinical outcome and cost-effectiveness study reporting time to pain relief, not quantitative toxicokinetic parameters (e.g., half-life, clearance, partition coefficients). |
| popPK | Soares_2012 | irrelevant | 0 | 0 | no_text gate: only 61 chars of text extracted (&lt; 400) |
| popPK | Stoelting_1975 | irrelevant | 2 | 10 | The paper reports metabolite concentrations (fluoride) and renal function markers but provides no kinetic parameters (rates, volumes, coefficients, half-lives) for methoxyflurane itself, only descriptive outcome data. |
| popPK | Strum_1991 | relevant | 8 | 0 | The paper describes a PBPK/pharmacokinetic study of methoxyflurane in humans, but the provided evidence text only summarizes the methodology and qualitative findings without listing the actual numeric kinetic parameters. |
| popPK | Stypinski_1999 | irrelevant | 0 | 0 | Methoxyflurane is used solely as an anesthetic agent (co-exposure/vehicle) to study the pharmacokinetics of a different substance (125I-IAZA); no kinetic parameters for methoxyflurane itself are reported. |
| popPK | Tanifuji_1977 | irrelevant | 0 | 0 | The paper focuses on thiomethoxyflurane, a sulfur analog, with methoxyflurane mentioned only as a comparator for potency. |
| popPK | Wang_1998 | irrelevant | 1 | 0 | Methoxyflurane is mentioned only as an anesthetic agent, with no toxicokinetic parameters reported for it. |
| popPK | Yoshida_1989 | irrelevant | 2 | 2 | The paper reports molecular orientation and solubilization parameters (partition-like constants for micelle/water interface geometry) rather than quantitative whole-body toxicokinetic parameters (half-life, clearance, tissue partition coefficients, etc.), and the specific methoxyflurane data cited is a ratio from a previous paper, not new kinetic data. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bmethoxyflurane%5D&body=Drug%3A%20methoxyflurane%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/toxin_methoxyflurane/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary · newest extraction 2026-11-15 07:37 UTC</sub>
