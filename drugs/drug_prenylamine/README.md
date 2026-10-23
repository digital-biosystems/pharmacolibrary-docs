<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;prenylamine&quot;}]"></div>

# prenylamine

- **generic name:** prenylamine
- **ATC codes:** `C01DX02`
- **DrugBank:** [DB04825](https://go.drugbank.com/drugs/DB04825) · **PubChem:** [CID 9801](https://pubchem.ncbi.nlm.nih.gov/compound/9801)
- **molar mass:** 329.4779 g/mol (C24H27N) — DrugBank
- **groups:** approved, withdrawn

## About

Prenylamine is a calcium channel blocker and vasodilator that was used as a cardiac therapy for cardiovascular disease. It has been withdrawn and is no longer in use.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7240579](https://www.wikidata.org/wiki/Q7240579) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| prenylamine | parent | 329.478 | C24H27N | DrugBank | [9801](https://pubchem.ncbi.nlm.nih.gov/compound/9801) | Paar_1990 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-rf" hidden data-species="human" data-age="adult" data-status="Rejected" data-sim="no"></span><span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>stale — current check: Rejected</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub> | [Paar_1990_reference](drugs/drug_prenylamine/Prenylamine_Paar1990_reference.md) | — | 1-compartment (no model) | 5 | Paar WD et al., Pharmacokinetics of prenylamine racemat…, Arzneimittel-Forschung (1990) | — |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=prenylamine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CALM1 (unknown), MYLK2 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 10:27 | 2:47 | 0/1/0 | 0/0/0 | 0/0/0 | 39,830/1,204 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## Coverage

- **PubMed hits:** 35 matched, 35 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full-text requests

_9 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Paar_1990.pdf` | Paar WD et al., Pharmacokinetics of prenylamine racemat…, Arzneimittel-Forschung (1990) | popPK | 10 | not captured | [2397000](https://pubmed.ncbi.nlm.nih.gov/2397000) | The study reports quantitative pharmacokinetic parameters (half-life, clearance, residence time, bioavailability) for prenylamine in humans, with specific numeric values provided in the text. |
| `Gietl_1990.pdf` | Gietl Y et al., Single- and multiple-dose pharmacokinet…, European journal of clinica… (1990) | popPK | 9 | [10.1007/BF00278587](https://doi.org/10.1007/BF00278587) | [2373134](https://pubmed.ncbi.nlm.nih.gov/2373134) | The study reports quantitative PK parameters (clearance, AUC) for prenylamine in humans, but the specific numeric values are not present in the provided abstract text. |
| `Katchman_2006.pdf` | Katchman AN et al., Comparative evaluation of HERG currents…, The Journal of pharmacology… (2006) | pd | 5 | [10.1124/jpet.105.093393](https://doi.org/10.1124/jpet.105.093393) | [16278312](https://www.ncbi.nlm.nih.gov/pubmed/16278312) | metadata signals extractable PD data (IC50) |
| `Camilión_1983.pdf` | Camilión de Hurtado MC et al., Interaction between calcium and slow ch…, Naunyn-Schmiedeberg's archi… (1983) | pd | 4 | [10.1007/BF00649354](https://doi.org/10.1007/BF00649354) | [6843691](https://www.ncbi.nlm.nih.gov/pubmed/6843691) | metadata signals extractable PD data (concentration-effect) |
| `Holck_1983.pdf` | Holck M et al., Does [3H]nifedipine label the calcium c…, Journal of receptor research (1983) | pd | 4 | [10.3109/10799898309041933](https://doi.org/10.3109/10799898309041933) | [6304296](https://www.ncbi.nlm.nih.gov/pubmed/6304296) | metadata signals extractable PD data (IC50) |
| `Ichida_2000.pdf` | Ichida S et al., Characteristics of the inhibitory effec…, Neurochemical research (2000) | pd | 4 | [10.1023/a:1026674721542](https://doi.org/10.1023/a:1026674721542) | [11152392](https://www.ncbi.nlm.nih.gov/pubmed/11152392) | metadata signals extractable PD data (IC50) |
| `Itoh_1986.pdf` | Itoh H et al., The binding of the calcium channel bloc…, Biochemical pharmacology (1986) | pd | 4 | [10.1016/0006-2952(86)90516-2](https://doi.org/10.1016/0006-2952(86)90516-2) | [3484629](https://www.ncbi.nlm.nih.gov/pubmed/3484629) | metadata signals extractable PD data (IC50) |
| `Janero_1988.pdf` | Janero DR et al., Protection of cardiac membrane phosphol…, Biochemical pharmacology (1988) | pd | 4 | [10.1016/0006-2952(88)90116-5](https://doi.org/10.1016/0006-2952(88)90116-5) | [3190757](https://www.ncbi.nlm.nih.gov/pubmed/3190757) | metadata signals extractable PD data (IC50) |
| `Movsesian_1985.pdf` | Movsesian MA et al., Stimulation of canine cardiac sarcoplas…, Biochemical pharmacology (1985) | pd | 4 | [10.1016/0006-2952(85)90124-8](https://doi.org/10.1016/0006-2952(85)90124-8) | [3155615](https://www.ncbi.nlm.nih.gov/pubmed/3155615) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T10:27:24.389512+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Baker_1983 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel blockers on protein leakage in isolated rat hearts, not a pharmacokinetic study. |
| popPK | Batra_1991 | irrelevant | 0 | 0 | The study is an in-vitro cell proliferation assay measuring EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PD | Caldirola_1997 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values and a single in vivo dose (0.3 mg/kg) for a related compound (VUF 8929), but does not provide a concentration-effect curve, Emax/EC50 for prenylamine, or a formal PK/PD model. |
| PD | Camilión_1983 | not_relevant | 0 | 0 | The paper discusses calcium channel blockers generally but does not report specific pharmacodynamic or exposure-response data for prenylamine. |
| popPK | Eglen_1989 | irrelevant | 0 | 0 | The paper studies the pharmacological effects of endothelin, and prenylamine is used only as a calcium channel antagonist to reverse contractile responses, not as the subject of a pharmacokinetic study. |
| popPK | Ferry_1982 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay using prenylamine as a displacement ligand, not a pharmacokinetic study. |
| PD | Ferry_1982 | not_relevant | 0 | 0 | The paper reports receptor binding kinetics (KD, dissociation rates) and qualitative displacement profiles, but does not provide a pharmacodynamic exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for prenylamine. |
| popPK | Gietl_1990 | relevant | 9 | 2 | The study reports quantitative PK parameters (clearance, AUC) for prenylamine in humans, but the specific numeric values are not present in the provided abstract text. |
| PD | Grana_1978 | not_relevant | 0 | 0 | The provided text contains only the title and no body content, so no numeric PD parameters or exposure-response relationships can be extracted. |
| PD | Holck_1983 | not_relevant | 0 | 0 | The paper investigates the binding of [3H]nifedipine to calcium channels in rabbit myocardium and does not mention prenylamine or report any pharmacodynamic exposure-response or dose-response relationships. |
| PD | Ichida_2000 | not_relevant | 0 | 0 | The paper studies the inhibitory effect of calmodulin on toxin binding, not the pharmacodynamics of prenylamine. |
| PD | Itoh_1986 | not_relevant | 0 | 0 | The paper discusses the binding of bepridil to calmodulin, not prenylamine, and does not report any pharmacodynamic or exposure-response relationship for the target drug. |
| PD | Johnson_1987 | not_relevant | 0 | 0 | The paper focuses on the interaction of felodipine with calcium-binding proteins and only mentions prenylamine qualitatively as a competitor in binding assays, without reporting any pharmacodynamic or exposure-response parameters for prenylamine. |
| PD | Katchman_2006 | not_relevant | 0 | 0 | The paper evaluates HERG currents and QT intervals for various drugs but does not report specific pharmacodynamic or exposure-response parameters for prenylamine. |
| popPK | Kerr_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of GABA(B) receptor modulation, not a pharmacokinetic study. |
| popPK | Mattiazzi_1983 | irrelevant | 0 | 0 | The study investigates the negative inotropic effects and antagonism of prenylamine on cat papillary muscles, which is a pharmacodynamic/mechanistic study, not a pharmacokinetic study. |
| popPK | Mills_1985 | irrelevant | 0 | 0 | The study investigates in vitro binding interactions between prenylamine and calmodulin, not the pharmacokinetic disposition parameters of prenylamine. |
| PD | Nicolas_1994 | not_relevant | 1 | 0 | The paper reports qualitative binding displacement by prenylamine but provides no numeric PD parameters (e.g., IC50, Ki) for prenylamine itself. |
| PD | Palmer_1993 | not_relevant | 3 | 2 | The paper reports an in vitro IC50 for NMDA binding, but the study is a comparative pharmacological screening of multiple drugs in animal seizure models, not a dedicated PK/PD or exposure-response analysis for prenylamine. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09) · newest extraction 2026-10-06 10:27 UTC</sub>
