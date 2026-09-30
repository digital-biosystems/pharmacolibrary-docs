<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;bupranolol&quot;}]"></div>

# bupranolol

- **generic name:** bupranolol
- **ATC codes:** `C07AA19`
- **DrugBank:** [DB08808](https://go.drugbank.com/drugs/DB08808) · **PubChem:** [CID 2475](https://pubchem.ncbi.nlm.nih.gov/compound/2475)
- **molar mass:** 271.783 g/mol (C14H22ClNO2) — DrugBank
- **groups:** experimental

## About

**Description.** Bupranolol is a non-selective beta blocker with potency similar to [propanolol]. It does not have intrinsic sympathomimetic activity (ISA), but does have strong membrane stabilizing activity.

**Indication.** Used to manage hypertension and tachycardia. Also used to treat glaucoma.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 01:31 | 22:31 | 0/0/0 | 0/0/0 | 0/0/0 | 65,394/4,212 | ollama / qwen3.8:27b-mtp-q8_0 | 2 | 2/0 | 2/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=bupranolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>“…Quickly and completely absorbed from the gut with less than 10% oral bioavailability.…”</sub> | prose |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (target), ADRB2 (target), ADRB3 (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 62 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_9 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Carpéné_1999.pdf` | Carpéné C et al., Selective activation of beta3-adrenocep…, Naunyn-Schmiedeberg's archi… (1999) | pd | 5 | [10.1007/pl00005357](https://doi.org/10.1007/pl00005357) | [10344530](https://www.ncbi.nlm.nih.gov/pubmed/10344530) | metadata signals extractable PD data (IC50) |
| `Endoh_1993.pdf` | Endoh M et al., Pronounced direct inhibitory action med…, Naunyn-Schmiedeberg's archi… (1993) | pd | 4 | [10.1007/BF00169157](https://doi.org/10.1007/BF00169157) | [8232606](https://www.ncbi.nlm.nih.gov/pubmed/8232606) | metadata signals extractable PD data (EC50) |
| `Geyer_1998.pdf` | Geyer O et al., Beta3-adrenergic relaxation of bovine i…, FEBS letters (1998) | pd | 4 | [10.1016/s0014-5793(98)00631-0](https://doi.org/10.1016/s0014-5793(98)00631-0) | [9662448](https://www.ncbi.nlm.nih.gov/pubmed/9662448) | metadata signals extractable PD data (EC50) |
| `Gille_1985.pdf` | Gille E et al., The affinity of (-)-propranolol for bet…, Naunyn-Schmiedeberg's archi… (1985) | pd | 4 | [10.1007/BF00498852](https://doi.org/10.1007/BF00498852) | [2999616](https://www.ncbi.nlm.nih.gov/pubmed/2999616) | metadata signals extractable PD data (Concentration-effect) |
| `Hicks_2007.pdf` | Hicks A et al., GW427353 (solabegron), a novel, selecti…, The Journal of pharmacology… (2007) | pd | 4 | [10.1124/jpet.107.125757](https://doi.org/10.1124/jpet.107.125757) | [17626794](https://www.ncbi.nlm.nih.gov/pubmed/17626794) | metadata signals extractable PD data (EC50) |
| `Kaumann_1976.pdf` | Kaumann AJ et al., Desensitization of kitten atria to chro…, Naunyn-Schmiedeberg's archi… (1976) | pd | 4 | [10.1007/BF00499230](https://doi.org/10.1007/BF00499230) | [8737](https://www.ncbi.nlm.nih.gov/pubmed/8737) | metadata signals extractable PD data (EC50) |
| `Kohi_1993.pdf` | Kohi M et al., Myocardial alpha 1A-adrenoceptor subtyp…, European journal of pharmac… (1993) | pd | 4 | [10.1016/0014-2999(93)90625-r](https://doi.org/10.1016/0014-2999(93)90625-r) | [7907026](https://www.ncbi.nlm.nih.gov/pubmed/7907026) | metadata signals extractable PD data (IC50) |
| `Lemoine_1982.pdf` | Lemoine H et al., A novel analysis of concentration-depen…, Naunyn-Schmiedeberg's archi… (1982) | pd | 4 | [10.1007/BF00506313](https://doi.org/10.1007/BF00506313) | [6289139](https://www.ncbi.nlm.nih.gov/pubmed/6289139) | metadata signals extractable PD data (concentration-effect) |
| `Walter_1984.pdf` | Walter M et al., Stimulant and blocking effects of optic…, Naunyn-Schmiedeberg's archi… (1984) | pd | 4 | [10.1007/BF00500912](https://doi.org/10.1007/BF00500912) | [6092972](https://www.ncbi.nlm.nih.gov/pubmed/6092972) | metadata signals extractable PD data (concentration-effect) |

<sub>queue written 2026-09-29T01:28:13.816696+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Appanna_1996 | not_relevant | 0 | 0 | The paper describes an in vitro assay method for CYP2D6 activity using bupranolol as a substrate but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters in humans. |
| popPK | Babu_2008 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects (beta-blocking activity) and relative delivery/mass balance rather than reporting quantitative compartmental pharmacokinetic parameters (CL, V, ka) for bupranolol. |
| PD | Babu_2008 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of beta-blocking effects (percent inhibition) and PK parameters (AUC) for different formulations, but does not provide a concentration-effect curve, Emax/EC50, or any numeric PD parameters linking exposure to effect. |
| popPK | Bosch_2002 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channels where bupranolol is used only as a pharmacological antagonist, not as a subject for pharmacokinetic analysis. |
| popPK | Brawley_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor-mediated relaxation in rat aorta, not a pharmacokinetic study, and bupranolol is used only as a receptor antagonist. |
| popPK | Carpéné_1993 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of adrenoceptor desensitization in adipocytes, not a pharmacokinetic study, and bupranolol is used only as a comparative antagonist. |
| PD | Carpéné_1993 | not_relevant | 0 | 0 | The paper investigates beta-adrenoceptor desensitization in adipocytes using norepinephrine infusion; bupranolol is only mentioned as a reference antagonist in a rank order of potency, with no exposure-response or dose-response analysis for bupranolol itself. |
| popPK | Carpéné_1994 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology investigation of beta-adrenergic receptors in adipocytes, using bupranolol only as a non-selective antagonist for blockade, and reports no pharmacokinetic parameters. |
| PD | Carpéné_1994 | not_relevant | 1 | 1 | The paper reports a qualitative observation that 100 microM bupranolol causes total blockade of lipolysis, but does not provide a dose-response curve, EC50, or other numeric PD parameters for bupranolol. |
| popPK | Carpéné_1999 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Carpéné_1999 | not_relevant | 0 | 0 | The paper focuses on octopamine and beta3-adrenoceptors in fat cells and does not report any pharmacodynamic or exposure-response data for bupranolol. |
| popPK | Clouse_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological characterization of beta-adrenoceptors in rat tissue where bupranolol is used only as a non-selective antagonist, with no pharmacokinetic parameters reported. |
| PD | Clouse_2007 | not_relevant | 0 | 0 | The paper reports pD2 values for beta-adrenoceptor agonists (BRL 37344, ritodrine, CL 316243) and describes bupranolol only as a non-selective antagonist used to attenuate responses, without providing specific numeric PD parameters (e.g., pA2, Ki, or concentration-effect curve parameters) for bupranolol itself. |
| popPK | DAllaire_1995 | irrelevant | 0 | 0 | The study is a receptor binding characterization in rat brown adipocytes where bupranolol is used only as a non-specific binding reference, not a pharmacokinetic study. |
| PD | DAllaire_1995 | not_relevant | 0 | 0 | The paper reports receptor binding affinity (Ki) and saturation parameters (KD, Bmax) for bupranolol in isolated cells, which are pharmacological binding data, not a pharmacodynamic exposure-response or dose-response relationship for a physiological effect. |
| popPK | Endoh_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of a new compound (ZSY-39) where bupranolol is used only as a comparator agent, with no pharmacokinetic parameters reported. |
| PD | Endoh_1990 | not_relevant | 0 | 0 | The paper reports PD parameters for ZSY-39, not bupranolol; bupranolol is only used as a non-effective antagonist control. |
| popPK | Endoh_1991 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of pimobendan and its metabolite, using bupranolol only as a beta-blocker antagonist, with no pharmacokinetic parameters reported. |
| PD | Endoh_1991 | not_relevant | 0 | 0 | The paper reports PD parameters for pimobendan and its metabolite, not for bupranolol, which is used only as a beta-blocker antagonist in the study. |
| popPK | Endoh_1993 | irrelevant | 0 | 0 | no_text gate: only 147 chars of text extracted (&lt; 400) |
| PD | Endoh_1993 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of adenosine on ferret ventricular contraction and does not mention bupranolol or report any exposure-response or dose-response data for it. |
| popPK | Gauthier_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptors in human heart tissue, not a pharmacokinetic study, and bupranolol is used only as a comparator antagonist. |
| popPK | Geyer_1998 | irrelevant | 0 | 0 | no_text gate: only 52 chars of text extracted (&lt; 400) |
| PD | Geyer_1998 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of bovine iris sphincter and does not mention bupranolol or report any exposure-response or dose-response data for it. |
| popPK | Gille_1985 | irrelevant | 0 | 0 | no_text gate: only 216 chars of text extracted (&lt; 400) |
| PD | Gille_1985 | not_relevant | 0 | 0 | The paper studies (-)-propranolol, not bupranolol, and focuses on receptor affinity and differential antagonism rather than a specific exposure-response or dose-response PD model for bupranolol. |
| popPK | Gosgnach_2001 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamics of nebivolol in endothelial cells, using bupranolol only as a mechanistic antagonist, and reports no pharmacokinetic parameters. |
| PD | Gosgnach_2001 | not_relevant | 2 | 1 | The paper describes qualitative signaling pathways and mentions dose-dependent effects for nebivolol, but provides no numeric PD parameters, concentration-effect curves, or quantitative exposure-response data for bupranolol. |
| popPK | Hicks_2007 | irrelevant | 0 | 0 | no_text gate: only 156 chars of text extracted (&lt; 400) |
| PD | Hicks_2007 | not_relevant | 0 | 0 | The paper studies GW427353 (solabegron), not bupranolol. |
| popPK | Ishihata_1993 | irrelevant | 0 | 0 | The study is a pharmacological investigation of angiotensin II in rabbit myocardium where bupranolol is used only as a beta-blocker to isolate the effect, with no pharmacokinetic parameters reported. |
| PD | Ishihata_1993 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of angiotensin II, using bupranolol only as a background blocker; it does not report a PD or exposure-response relationship for bupranolol itself. |
| popPK | Kaumann_1976 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Kaumann_1976 | not_relevant | 0 | 0 | The paper focuses on the desensitization of kitten atria to isoprenaline and does not report any pharmacodynamic or exposure-response data for bupranolol. |
| popPK | Kaumann_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of beta-adrenoceptor antagonism, not a pharmacokinetic study, and reports no disposition parameters for bupranolol. |
| popPK | Kemken_1991 | irrelevant | 2 | 0 | The study reports pharmacodynamic effects (heart rate) rather than quantitative pharmacokinetic parameters (CL, V, ka) for bupranolol. |
| popPK | Kitamura_2000 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology experiment in guinea pig hearts where bupranolol is used only as a non-selective antagonist to block beta-adrenoceptors, not as a subject drug for PK analysis. |
| popPK | Kohi_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of alpha-adrenoceptor subtypes in rabbit muscle where bupranolol is used only as a non-selective blocker, not as the subject of a pharmacokinetic analysis. |
| PD | Kohi_1993 | not_relevant | 0 | 0 | The paper studies the pharmacology of a new antagonist (HV723) on alpha-adrenoceptors; bupranolol is used only as a fixed concentration (0.3 microM) to block beta-receptors, and no exposure-response or dose-response relationship for bupranolol is reported. |
| popPK | Lemoine_1982 | irrelevant | 0 | 0 | no_text gate: only 194 chars of text extracted (&lt; 400) |
| popPK | Malinowska_1996 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of adrenoceptor mediation in pithed rats where bupranolol is used only as a non-selective antagonist, with no pharmacokinetic parameters reported. |
| PD | Malinowska_1996 | not_relevant | 2 | 1 | The paper reports qualitative antagonism and pED60 values for agonists, but does not provide a quantitative concentration-effect curve or specific numeric PD parameters (like Emax or EC50) for bupranolol itself. |
| popPK | Malinowska_1997 | irrelevant | 0 | 0 | The study is a pharmacological investigation of beta-adrenoceptor subtypes in rats, using bupranolol only as a non-selective antagonist for comparison, and does not report any pharmacokinetic parameters. |
| popPK | Malinowska_2003 | irrelevant | 0 | 0 | The paper is a pharmacodynamic and receptor binding study examining the effects of bupranolol on heart rate and adrenoceptor affinity, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Mallem_2003 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of beta-adrenergic receptors in rat aorta where bupranolol is used only as a tool compound/antagonist, not as the subject of a pharmacokinetic analysis. |
| PD | Mallem_2003 | not_relevant | 0 | 0 | The paper reports concentration-response data for beta-agonists (CGP 12,177, cyanopindolol), not bupranolol; bupranolol is used only as a qualitative antagonist to inhibit relaxation, with no numeric PD parameters or dose-response curve provided for it. |
| popPK | Mishra_2011 | irrelevant | 2 | 0 | The study focuses on formulation development and in vitro release, with no quantitative pharmacokinetic parameters (CL, V, ka) reported in the provided evidence. |
| PD | Mishra_2011 | not_relevant | 1 | 0 | The paper focuses on formulation development and in vitro release, mentioning in vivo pharmacodynamic studies only qualitatively without providing numeric concentration-effect data or PD parameters. |
| PGx | Pressacco_1993 | not_relevant | 4 | 5 | The paper reports in vitro enzyme kinetics (Ki values) and qualitative metabolic differences in liver microsomes, but does not report in vivo pharmacokinetic or pharmacodynamic parameters (e.g., AUC, Cmax, BP response) in humans stratified by genotype. |
| popPK | Simard_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of lipolytic effects in adipocytes where bupranolol is used only as a beta-blocker antagonist, not as the subject drug for pharmacokinetic analysis. |
| PD | Simard_1994 | not_relevant | 3 | 2 | The paper reports EC50 values for agonists (norepinephrine and BRL 37344) and qualitative antagonist potency ratios for bupranolol, but does not provide a quantitative concentration-effect curve or specific numeric PD parameters (like Ki or IC50) for bupranolol itself. |
| popPK | Totsuka_1979 | irrelevant | 0 | 0 | no_text gate: only 133 chars of text extracted (&lt; 400) |
| popPK | Walter_1984 | irrelevant | 0 | 0 | no_text gate: only 199 chars of text extracted (&lt; 400) |
| PD | Walter_1984 | not_relevant | 0 | 0 | The paper studies pindolol, not bupranolol. |
| popPK | Wellstein_1986 | relevant | 4 | 2 | The study reports a half-life (2.0 h) and maximal plasma concentration for bupranolol, but lacks explicit clearance, volume of distribution, or compartmental model parameters required for population PK extraction. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
