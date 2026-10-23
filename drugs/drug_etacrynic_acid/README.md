<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C03C&quot;,&quot;href&quot;:&quot;atc/C03C.md&quot;},{&quot;label&quot;:&quot;etacrynic acid&quot;}]"></div>

# etacrynic acid

- **generic name:** etacrynic acid
- **ATC codes:** `C03CC01`
- **DrugBank:** [DB00903](https://go.drugbank.com/drugs/DB00903) · **PubChem:** [CID 3278](https://pubchem.ncbi.nlm.nih.gov/compound/3278)
- **molar mass:** 303.138 g/mol (C13H12Cl2O4) — DrugBank
- **groups:** approved, investigational

## About

Ethacrynic acid is a loop diuretic used to treat fluid retention and swelling caused by conditions such as congestive heart failure, pulmonary edema, nephrotic syndrome, liver cirrhosis, and arterial hypertension. It is an approved drug, though it is now used far less often than other loop diuretics, mainly when they cannot be used because of sulfa allergy.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q418571](https://www.wikidata.org/wiki/Q418571) and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=etacrynic_acid).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | liver | `GSTP1` inhibitor | DrugBank actor |
| metabolism | lung | `GSTP1` inhibitor | DrugBank actor |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ATP1A1 (inhibitor), GSTA2 (inhibitor), LEF1 (unknown), SLC12A1 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 17:51 | 2:43 | 0/0/0 | 0/0/0 | 0/0/0 | 56,302/3,993 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## Coverage

- **PubMed hits:** 78 matched, 62 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Lacreta_1994.pdf` | Lacreta FP et al., Pharmakokinetics and bioavailability st…, The Journal of pharmacology… (1994) | popPK | 10 | not captured | [7932170](https://pubmed.ncbi.nlm.nih.gov/7932170) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, bioavailability) for ethacrynic acid in humans, with specific numeric values provided in the abstract. |
| `Emmons_1999.pdf` | Emmons C, Transport characteristics of the apical…, The American journal of phy… (1999) | pd | 5 | [10.1152/ajprenal.1999.276.4.F635](https://doi.org/10.1152/ajprenal.1999.276.4.F635) | [10198425](https://www.ncbi.nlm.nih.gov/pubmed/10198425) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T17:51:45.524275+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Aranda_1980 | irrelevant | 0 | 0 | The paper is a review discussing diuretics in neonates and mentions ethacrynic acid (likely a typo for etacrynic acid) only as a drug for which studies should be done, without providing any quantitative pharmacokinetic parameters. |
| popPK | Beutler_1992 | irrelevant | 0 | 0 | The study measures lithium clearance and urine osmolality to assess diuretic efficacy, not the pharmacokinetic parameters (CL, V, t1/2) of ethacrynic acid itself. |
| popPK | Brooks_1980 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of indacrinone, with ethacrynic acid (likely a typo for etacrynic acid) used only as a comparator for saluretic activity, and no PK parameters for etacrynic acid are reported. |
| popPK | Brooks_1984 | irrelevant | 1 | 0 | The study focuses on the renal pharmacodynamics (clearance of ions and urate) of indacrinone, with ethacrynic acid serving only as a comparator agent, and no pharmacokinetic parameters (CL, V, t1/2) for ethacrynic acid are reported. |
| popPK | Chenderovitch_1975 | irrelevant | 2 | 0 | The study focuses on the mechanism of choleresis (bile flow) and biliary excretion of a metabolite, not on systemic pharmacokinetic parameters like clearance, volume of distribution, or half-life. |
| popPK | Corbett_1981 | irrelevant | 0 | 0 | The study focuses on the renal clearance of bile acids, with ethacrynic acid (likely a typo for etacrynic acid) used only as a pharmacological agent to inhibit secretion, not as the subject of PK parameter estimation. |
| popPK | Czekalski_1974 | irrelevant | 0 | 0 | The study investigates renal physiology and cAMP excretion in response to parathyroid hormone, using ethacrynic acid (likely a typo for etacrynic acid) only as a tool for distal blockade, not as the subject of pharmacokinetic analysis. |
| popPK | Dai_2006 | irrelevant | 0 | 0 | The study investigates the uptake of gentamicin in the inner ear, and etacrynic acid is only mentioned as a co-administered agent to modify uptake, not as the subject of PK analysis. |
| PD | Emmons_1999 | not_relevant | 0 | 0 | The paper focuses on the transport characteristics of an anion exchanger in rabbit cells and does not report any pharmacodynamic or exposure-response data for etacrynic acid. |
| popPK | Federspil_1976 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of aminoglycoside antibiotics, with etacrynic acid (ethacrynic acid) mentioned only as a co-administered agent in ototoxicity assessments, not as the subject of PK analysis. |
| popPK | Gallagher_2001 | irrelevant | 0 | 0 | The study uses etacrynic acid as a substrate to measure glutathione S-transferase activity in fish, not to characterize its pharmacokinetic disposition parameters. |
| popPK | Gao_1996 | irrelevant | 0 | 0 | The study investigates the mechanism of action of loop diuretics on macromolecule clearance in hamster oral mucosa, not the pharmacokinetic disposition parameters (CL, V, t1/2) of etacrynic acid. |
| popPK | Gibbs_1996 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of busulfan, with etacrynic acid serving only as an inhibitor, and no pharmacokinetic parameters for etacrynic acid are reported. |
| popPK | Giebisch_1973 | irrelevant | 0 | 0 | The study is an in-vitro renal physiology experiment in Necturus (salamander) using ethacrynic acid as a pharmacological tool to modulate ion transport, not a pharmacokinetic study of the drug's disposition. |
| popPK | Greven_1977 | irrelevant | 0 | 0 | The study investigates the pharmacodynamics of etozolin in rats, with ethacrynic acid mentioned only as a comparator for mechanism of action, not as the subject of PK analysis. |
| popPK | Hulter_1984 | irrelevant | 0 | 0 | The study investigates renal acid-base regulation in dogs using ethacrynic acid (likely a typo for etacrynic acid) only as a tool to induce volume depletion, not as the subject of pharmacokinetic analysis. |
| popPK | Humes_1999 | irrelevant | 0 | 0 | The paper is a mechanistic review discussing ototoxicity and nephrotoxicity pathways, containing no quantitative pharmacokinetic parameters for etacrynic acid. |
| popPK | Johanson_1992 | irrelevant | 2 | 0 | The study measures ion distribution and barrier permeation rates (using 36Cl) rather than standard pharmacokinetic parameters (CL, V, ka) for ethacrynic acid itself. |
| popPK | Kahn_1975 | irrelevant | 0 | 0 | The study investigates renal tubular electrolyte transport and diuretic response, not the pharmacokinetic disposition parameters (CL, V, t1/2) of etacrynic acid. |
| PD | Karaytuğ_2023 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition data (IC50/Ki) for piperazine derivatives and only mentions etacrynic acid as a standard comparator without providing its specific numeric PD parameters or an exposure-response relationship. |
| popPK | Knudson_2013 | irrelevant | 0 | 0 | The study focuses on potassium chloride supplementation in pediatric cardiac patients, and ethacrynic acid is only mentioned as a concomitant medication affecting potassium response, not as the subject of pharmacokinetic analysis. |
| popPK | Laffi_1993 | irrelevant | 0 | 0 | The paper is a review of diuretic therapy in liver cirrhosis and does not report quantitative pharmacokinetic parameters for etacrynic acid. |
| popPK | Lautermann_1995 | irrelevant | 0 | 0 | The study focuses on ototoxicity in guinea pigs and explicitly states that pharmacokinetic differences were not the basis for the observed effects, providing no quantitative PK parameters for etacrynic acid. |
| popPK | Law_1977 | irrelevant | 0 | 0 | The study investigates chloride ion distribution in rat renal slices and uses ethacrynic acid (a different drug) only as a diuretic agent to test effects on chloride transport, not as the subject of pharmacokinetic analysis. |
| popPK | Levin_1976 | irrelevant | 0 | 0 | The study uses ethacrynic acid (a different drug) as a diuretic challenge to study renal physiology in dogs, and does not report pharmacokinetic parameters for etacrynic acid. |
| popPK | Lim_1988 | irrelevant | 0 | 0 | The study is an in-vitro equilibrium dialysis experiment measuring thyroid hormone binding displacement, not a pharmacokinetic study of etacrynic acid. |
| popPK | McNabb_1984 | irrelevant | 0 | 0 | The study focuses on renal physiology and diuretic efficacy (solute/water handling) rather than pharmacokinetic disposition parameters (CL, V, t1/2) for etacrynic acid. |
| popPK | Miyanoshita_1989 | irrelevant | 0 | 0 | The study investigates the mechanism of action (PGE2 production) of loop diuretics in rat nephron segments, not the pharmacokinetic disposition parameters of etacrynic acid. |
| popPK | Moffett_2021 | irrelevant | 0 | 0 | The study investigates acetazolamide-associated acute kidney injury and only mentions ethacrynic acid as a risk factor, providing no pharmacokinetic parameters for etacrynic acid. |
| popPK | Mudge_1975 | irrelevant | 0 | 0 | The study focuses on renal physiology and electrolyte excretion mechanisms in dogs, not on the pharmacokinetic disposition parameters (CL, V, etc.) of etacrynic acid. |
| popPK | Nguyen_2020 | irrelevant | 0 | 0 | The paper is a clinical review of loop diuretics (furosemide, torsemide) and does not report quantitative pharmacokinetic parameters for etacrynic acid. |
| popPK | ODwyer_1991 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for thiotepa and its metabolite TEPA, while ethacrynic acid is used only as a co-administered inhibitor without its own PK parameters being reported. |
| popPK | Pieragnoli_1976 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| popPK | Potęga_2021 | irrelevant | 0 | 0 | The study investigates the in-vitro metabolism of the drug C-2028, not etacrynic acid, which is only mentioned as an inactivating agent for enzymes. |
| popPK | Puschett_1981 | irrelevant | 0 | 0 | The paper is a review of the mechanisms of action of diuretics and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for etacrynic acid. |
| popPK | Radó_1973 | irrelevant | 0 | 0 | no_text gate: only 157 chars of text extracted (&lt; 400) |
| popPK | Röckel_1977 | irrelevant | 0 | 0 | The study investigates the diuretic effects of Bay g 2821, with ethacrynic acid mentioned only as a comparator for efficacy, and no pharmacokinetic parameters for ethacrynic acid are reported. |
| popPK | Sadowski_1981 | irrelevant | 0 | 0 | The study investigates renal physiology (proximal transport) in dogs using ethacrynic acid as a diuretic agent, not the pharmacokinetics of etacrynic acid. |
| popPK | Scalais_1984 | irrelevant | 1 | 0 | The study reports pharmacodynamic effects (electrolyte excretion) rather than quantitative pharmacokinetic parameters (CL, V, t1/2) for ethacrynic acid. |
| popPK | Schwartz_1986 | irrelevant | 2 | 1 | The paper is a general review of diuretics that mentions ethacrynic acid's half-life is less than one hour but does not provide a quantitative PK model or specific clearance/volume parameters for the drug. |
| popPK | Shelton_2020 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of renal lymphatic vessel dynamics, not a pharmacokinetic study, and etacrynic acid is used only as a comparator agent. |
| popPK | Simonsen_2020 | irrelevant | 0 | 0 | The study investigates the in-vitro metabolism of benoxacor, and etacrynic acid is only mentioned as a GST inhibitor, not as the subject drug. |
| popPK | Stockigt_1985 | irrelevant | 0 | 0 | The study focuses on furosemide's interaction with thyroid hormone binding sites, and ethacrynic acid is only mentioned as a comparator in an in vitro binding assay, not as the subject of a pharmacokinetic study. |
| popPK | Stribrná_1975 | irrelevant | 0 | 0 | The study investigates renal physiology (urea clearance) in response to diuretics and does not report pharmacokinetic parameters (CL, V, t1/2) for ethacrynic acid. |
| popPK | Szabó_1979 | irrelevant | 0 | 0 | The study examines the effect of etacrynic acid on lymph flow and hemodynamics in dogs, not its pharmacokinetic disposition parameters. |
| popPK | Tamhane_2013 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of ON 01210.Na, with etacrynic acid serving only as a co-administered inhibitor/comparator. |
| popPK | Tian_2025 | irrelevant | 0 | 0 | The paper is a proteomics study on covalent drug binding and does not report any pharmacokinetic parameters for etacrynic acid. |
| PD | Tian_2025 | not_relevant | 0 | 0 | The paper focuses on proteome-wide cysteine ligandability and targeted protein degradation mechanisms, reporting no pharmacokinetic or pharmacodynamic exposure-response models or numeric PD parameters for etacrynic acid. |
| popPK | Valdez_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay investigating cellular efflux and drug interactions, not a pharmacokinetic study reporting quantitative disposition parameters for etacrynic acid. |
| popPK | Wallin_1978 | irrelevant | 0 | 0 | no_text gate: only 136 chars of text extracted (&lt; 400) |
| popPK | Wang_2026 | irrelevant | 0 | 0 | Etacrynic acid is used only as a GST inhibitor to validate the mechanism of action for HuaiHua San, not as the subject of a pharmacokinetic study. |
| popPK | Wargo_2009 | irrelevant | 1 | 0 | This is a review article comparing loop diuretics (furosemide, torsemide, bumetanide) and does not report original quantitative pharmacokinetic parameters for etacrynic acid. |
| popPK | Whittembury_1975 | irrelevant | 0 | 0 | The study investigates renal tubular transport mechanisms in Necturus using ethacrynic acid as a pharmacological inhibitor, not its pharmacokinetic parameters. |
| popPK | Williams_1982 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of hydrochlorothiazide, not etacrynic acid (which is only mentioned as a comparator in the introduction). |
| popPK | Wise_2018 | irrelevant | 0 | 0 | The study focuses on the efficacy of metolazone in infants, and etacrynic acid is only mentioned as a co-administered diuretic without any pharmacokinetic parameters reported. |
| popPK | Woster_1990 | irrelevant | 0 | 0 | The paper is a clinical review of intracranial pressure management that mentions ethacrynic acid only as a therapeutic agent, without reporting any pharmacokinetic parameters. |
| popPK | Yang_2023 | irrelevant | 0 | 0 | The paper focuses on the pharmacokinetics of a CSNK2A inhibitor (analogue 2h), using etacrynic acid only as a co-administered GST inhibitor to improve exposure, not as the subject drug. |
| PD | unknown_2020 | not_relevant | 0 | 0 | The provided text is a title or heading ("Drugs for hypertension") and contains no data, analysis, or mention of etacrynic acid or any pharmacodynamic parameters. |
| PD | unknown_2024 | not_relevant | 0 | 0 | The provided text is a title or heading ("Drugs for hypertension") and contains no data, analysis, or mention of etacrynic acid or any pharmacodynamic parameters. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions.</sub>  
<sub>Generated by `docs.py` (scholarv2, release v26.09)</sub>
