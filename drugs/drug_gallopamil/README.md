<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08D&quot;,&quot;href&quot;:&quot;atc/C08D.md&quot;},{&quot;label&quot;:&quot;gallopamil&quot;}]"></div>

# gallopamil

- **generic name:** gallopamil
- **ATC codes:** `C08DA02`
- **DrugBank:** [DB12923](https://go.drugbank.com/drugs/DB12923) · **PubChem:** [CID 1234](https://pubchem.ncbi.nlm.nih.gov/compound/1234)
- **molar mass:** 484.637 g/mol (C28H40N2O5) — DrugBank
- **groups:** investigational

## About

Gallopamil is a calcium channel blocker of the phenylalkylamine type, developed for cardiovascular conditions. It is considered investigational and is not an approved medicine in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q412127](https://www.wikidata.org/wiki/Q412127) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 18:33 | 4:16 | 0/0/0 | 0/0/0 | 0/0/0 | 1,662/112 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 0/0 | 0/0 | 0 |

## popPK records

_not available_

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=gallopamil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ACE (inhibitor), ATP2A2 (inhibitor), MME (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 63 matched, 60 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_14 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gross_2000.pdf` | Gross AS et al., Pharmacokinetics and pharmacodynamics o…, British journal of clinical… (2000) | popPK | 10 | [10.1046/j.1365-2125.2000.00115.x](https://doi.org/10.1046/j.1365-2125.2000.00115.x) | [10671907](https://pubmed.ncbi.nlm.nih.gov/10671907) | The study reports quantitative pharmacokinetic parameters (clearance, half-life, protein binding) for gallopamil in humans with specific numeric values provided in the text. |
| `Gross_1997.pdf` | Gross AS et al., Pharmacokinetics and pharmacodynamics o…, The Journal of pharmacology… (1997) | popPK | 9 | not captured | [9190842](https://pubmed.ncbi.nlm.nih.gov/9190842) | The study reports quantitative pharmacokinetic parameters (apparent oral clearance) for gallopamil enantiomers in humans, with specific numeric values provided in the text. |
| `Sewing_1983.pdf` | Sewing KF et al., Calcium channel antagonists verapamil a…, Pharmacology (1983) | pd | 5 | [10.1159/000137824](https://doi.org/10.1159/000137824) | [6310646](https://www.ncbi.nlm.nih.gov/pubmed/6310646) | metadata signals extractable PD data (IC50) |
| `Usune_1995.pdf` | Usune S et al., Discrimination by nimodipine, but not b…, Canadian journal of physiol… (1995) | pd | 5 | [10.1139/y95-721](https://doi.org/10.1139/y95-721) | [8789414](https://www.ncbi.nlm.nih.gov/pubmed/8789414) | metadata signals extractable PD data (IC50) |
| `Hofmann_1989.pdf` | Hofmann HP et al., (S)-emopamil, a novel calcium and serot…, Arzneimittel-Forschung (1989) | pd | 4 | not captured | [2757655](https://www.ncbi.nlm.nih.gov/pubmed/2757655) | metadata signals extractable PD data (EC50) |
| `Janero_1988.pdf` | Janero DR et al., Protection of cardiac membrane phosphol…, Biochemical pharmacology (1988) | pd | 4 | [10.1016/0006-2952(88)90116-5](https://doi.org/10.1016/0006-2952(88)90116-5) | [3190757](https://www.ncbi.nlm.nih.gov/pubmed/3190757) | metadata signals extractable PD data (IC50) |
| `Molenaar_1986.pdf` | Molenaar P et al., Analysis of agonist dissociation consta…, Journal of pharmacological… (1986) | pd | 4 | [10.1016/0160-5402(86)90060-4](https://doi.org/10.1016/0160-5402(86)90060-4) | [2871234](https://www.ncbi.nlm.nih.gov/pubmed/2871234) | metadata signals extractable PD data (concentrationeffect) |
| `Neuhoff_2000.pdf` | Neuhoff S et al., Affinities at the verapamil binding sit…, International journal of cl… (2000) | pd | 4 | [10.5414/cpp38168](https://doi.org/10.5414/cpp38168) | [10783826](https://www.ncbi.nlm.nih.gov/pubmed/10783826) | metadata signals extractable PD data (IC50) |
| `Pong_1985.pdf` | Pong SF et al., Effect of dantrolene sodium on [3H]nitr…, The Journal of pharmacy and… (1985) | pd | 4 | [10.1111/j.2042-7158.1985.tb04981.x](https://doi.org/10.1111/j.2042-7158.1985.tb04981.x) | [2867170](https://www.ncbi.nlm.nih.gov/pubmed/2867170) | metadata signals extractable PD data (IC50) |
| `Theodore_1986.pdf` | Theodore LJ et al., Studies on Ca2+ channel antagonists. 5-…, Journal of medicinal chemis… (1986) | pd | 4 | [10.1021/jm00159a040](https://doi.org/10.1021/jm00159a040) | [2427721](https://www.ncbi.nlm.nih.gov/pubmed/2427721) | metadata signals extractable PD data (EC50) |
| `Walday_1992.pdf` | Walday P et al., Effect of calcium antagonists (omega-co…, Naunyn-Schmiedeberg's archi… (1992) | pd | 4 | [10.1007/BF00173551](https://doi.org/10.1007/BF00173551) | [1407018](https://www.ncbi.nlm.nih.gov/pubmed/1407018) | metadata signals extractable PD data (EC50) |
| `Zucchi_1995.pdf` | Zucchi R et al., Interaction between gallopamil and card…, British journal of pharmaco… (1995) | pd | 4 | [10.1111/j.1476-5381.1995.tb14909.x](https://doi.org/10.1111/j.1476-5381.1995.tb14909.x) | [7712034](https://www.ncbi.nlm.nih.gov/pubmed/7712034) | metadata signals extractable PD data (IC50) |
| `Suzuki_1999.pdf` | Suzuki A et al., Identification of human cytochrome P-45…, Drug metabolism and disposi… (1999) | pgx | 7 | not captured | [10534309](https://www.ncbi.nlm.nih.gov/pubmed/10534309) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wang_2001.pdf` | Wang E et al., Quantitative distinctions of active sit…, Chemical research in toxico… (2001) | pgx | 7 | [10.1021/tx010125x](https://doi.org/10.1021/tx010125x) | [11743742](https://www.ncbi.nlm.nih.gov/pubmed/11743742) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-29T18:33:40.297346+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ahmed_1992 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of bronchoconstriction and does not report any pharmacokinetic parameters for gallopamil. |
| popPK | Beil_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of calcium channel antagonists on parietal cells and does not report pharmacokinetic parameters for gallopamil. |
| popPK | Brogden_1994 | irrelevant | 1 | 0 | The paper is a review of pharmacodynamic and pharmacokinetic properties without providing specific quantitative disposition parameter values in the evidence. |
| PD | Brogden_1994 | not_relevant | 2 | 0 | The text is a qualitative review summary that discusses pharmacodynamic properties and therapeutic potential but does not provide specific numeric PD parameters, concentration-effect curves, or quantitative exposure-response data. |
| popPK | Caldirola_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacological characterization of VUF 8929, with gallopamil serving only as a comparator in binding assays, and no PK parameters for gallopamil are reported. |
| PD | Caldirola_1997 | not_relevant | 1 | 0 | The paper focuses on the characterization of VUF 8929; gallopamil is only mentioned as a comparator in binding assays, and no exposure-response or dose-response PD parameters for gallopamil are reported. |
| popPK | Coonen_2026 | irrelevant | 0 | 0 | The study is an in-vitro pharmacology assay using gallopamil as a reference compound, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Glossmann_1983 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study where gallopamil is used only as a ligand to characterize binding sites, not a pharmacokinetic study. |
| PD | Glossmann_1983 | not_relevant | 0 | 0 | The paper reports radioligand binding affinity (KD, Bmax) and allosteric modulation by 1,4-dihydropyridines, but does not report a pharmacodynamic exposure-response or dose-response relationship for gallopamil itself. |
| popPK | Gouw_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium entry blockers on isolated rat tissues, not a pharmacokinetic study, and reports no disposition parameters for gallopamil. |
| PD | Gross_1997 | not_relevant | 4 | 2 | The paper describes a qualitative concentration-effect relationship for (S)-gallopamil and PR interval but does not provide numeric PD parameters (Emax, EC50) or a quantitative curve in the text. |
| PD | Gross_2000 | not_relevant | 2 | 1 | The paper reports PK parameters and a single mean PD effect (PR interval prolongation) but does not provide a concentration-effect relationship, curve, or numeric PD parameters (e.g., Emax, EC50). |
| popPK | Herzig_1992 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological/mechanistic investigation of gallopamil's cardiac effects and does not report pharmacokinetic parameters. |
| popPK | Hofmann_1989 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Hofmann_1989 | not_relevant | 0 | 0 | The paper focuses on (S)-emopamil, not gallopamil, and does not report PD parameters for the specified drug. |
| popPK | Hopf_1989 | irrelevant | 0 | 0 | The study reports dose-response relationships for anti-ischemic effects (ST-depression) rather than pharmacokinetic disposition parameters like clearance or volume. |
| PD | Hopf_1989 | not_relevant | 0 | 0 | not captured |
| popPK | Jackowski_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of muscle contraction, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Janero_1988 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on lipid peroxidation and does not report any pharmacokinetic parameters for gallopamil. |
| popPK | Kirchengast_1993 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of thrombus formation and platelet aggregation in dogs, where gallopamil serves only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Lehmann_1985 | irrelevant | 0 | 0 | The study focuses on pharmacodynamic interactions (cardiovascular effects) in dogs and does not report quantitative pharmacokinetic parameters such as clearance or volume of distribution for gallopamil. |
| PD | Lehmann_1985 | not_relevant | 3 | 1 | The paper describes a qualitative pharmacodynamic interaction study in dogs with specific doses but does not report numeric PD parameters (e.g., EC50, Emax) or quantitative concentration-effect curves in the provided text. |
| popPK | Leonetti_1985 | irrelevant | 0 | 0 | The paper focuses on renal effects (diuretic/natriuretic action) of calcium antagonists and does not report pharmacokinetic parameters for gallopamil. |
| PD | Leonetti_1985 | not_relevant | 2 | 1 | The text is a qualitative summary of clinical studies describing the temporal profile of renal effects (diuretic/natriuretic) without providing specific numeric concentration-effect data, dose-response curves, or PD parameters (Emax, EC50) for gallopamil. |
| popPK | Massey_1988 | irrelevant | 0 | 0 | The study is a pharmacodynamic assessment of inhaled gallopamil's effect on airway reactivity and does not report any pharmacokinetic parameters. |
| popPK | Matsuzaki_1993 | irrelevant | 1 | 0 | The study is a pharmacodynamic/antiarrhythmic efficacy study in dogs that reports an IC50 value but does not provide quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for gallopamil. |
| popPK | Matthes_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic and binding interaction study where gallopamil serves only as a comparator, with no pharmacokinetic parameters reported. |
| PD | Matthes_2000 | not_relevant | 2 | 1 | The paper describes qualitative functional interactions and binding studies in vitro but does not report numeric PD parameters (e.g., EC50, Emax) or extractable concentration-effect curves for gallopamil. |
| popPK | Molenaar_1986 | irrelevant | 0 | 0 | The study is a pharmacological analysis of agonist dissociation constants in guinea pig atria where gallopamil is used only as a functional antagonist, not a subject of pharmacokinetic analysis. |
| PD | Molenaar_1986 | not_relevant | 3 | 2 | The paper reports functional antagonism data (KA values) for gallopamil in a tissue bath, which is a pharmacological interaction analysis rather than a drug-specific exposure-response or dose-response PD model with parameters like Emax or EC50 for the drug's own effect. |
| popPK | Moore_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of RWJ-22108 where gallopamil is only used as a comparator for tissue selectivity, with no pharmacokinetic parameters reported. |
| PD | Moore_1993 | not_relevant | 3 | 2 | The paper reports in vitro IC50 values for gallopamil only as a comparator to RWJ-22108, without providing a full dose-response curve or detailed PD model parameters for gallopamil itself. |
| popPK | Neuhoff_2000 | irrelevant | 0 | 0 | no_text gate: only 121 chars of text extracted (&lt; 400) |
| PD | Neuhoff_2000 | not_relevant | 0 | 0 | The paper focuses on in vitro binding affinities (Kd) of various compounds to P-glycoprotein, not on pharmacodynamic exposure-response or dose-response relationships for gallopamil. |
| popPK | Neumann_1992 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of gallopamil on neutrophil function and does not report any pharmacokinetic parameters. |
| popPK | Noguchi_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological comparison of calcium channel antagonists and does not report pharmacokinetic parameters for gallopamil. |
| popPK | Pauwels_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of neuroprotection in rat neuronal cultures, not a pharmacokinetic study, and reports no disposition parameters for gallopamil. |
| PD | Pauwels_1990 | not_relevant | 3 | 2 | The paper reports a qualitative potency ranking for gallopamil but does not provide specific numeric IC50 or concentration-effect parameters for it, unlike the nonselective antagonists. |
| popPK | Pfaffendorf_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of spasmolytic potency in guinea-pig bile ducts, not a pharmacokinetic study, and reports no disposition parameters for gallopamil. |
| popPK | Pong_1985 | irrelevant | 0 | 0 | The study is an in-vitro binding assay investigating dantrolene's effect on nitrendipine binding, with gallopamil serving only as a comparator agent, and no pharmacokinetic parameters are reported. |
| popPK | Reddy_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antioxidant effects on lipid peroxidation, not a pharmacokinetic study, and reports no disposition parameters for gallopamil. |
| popPK | Richardt_1991 | irrelevant | 0 | 0 | The study is a mechanistic investigation of noradrenaline release in isolated rat hearts, not a pharmacokinetic study, and reports no disposition parameters for gallopamil. |
| popPK | Rustichelli_1999 | irrelevant | 0 | 0 | The paper focuses on solid-state physical chemistry (crystal structure, thermal analysis) of gallopamil, not pharmacokinetic disposition parameters. |
| PD | Rustichelli_1999 | not_relevant | 0 | 0 | The paper focuses on solid-state characterization (FT-IR, XRD, DSC) of racemic compounds and contains no pharmacodynamic or exposure-response data. |
| popPK | Schröder_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic investigation of drug interactions in isolated guinea-pig atria and does not report any pharmacokinetic parameters for gallopamil. |
| popPK | Schömig_1992 | irrelevant | 0 | 0 | The paper is a mechanistic study on norepinephrine release in myocardial ischemia and does not report pharmacokinetic parameters for gallopamil. |
| popPK | Sewing_1983 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| popPK | Singh_1986 | irrelevant | 0 | 0 | The paper is a review of the mechanism of action and classification of calcium antagonists, containing no quantitative pharmacokinetic parameters for gallopamil. |
| PD | Singh_1986 | not_relevant | 1 | 0 | The text is a qualitative review of calcium antagonist mechanisms and classification, containing no numeric PD parameters or exposure-response data for gallopamil. |
| popPK | Stein_1990 | irrelevant | 0 | 0 | The study is an in-vitro embryotoxicity assay measuring morphological effects, not a pharmacokinetic study reporting disposition parameters for gallopamil. |
| PGx | Suzuki_1999 | not_relevant | 0 | 0 | The study identifies CYP3A4 as the major enzyme metabolizing gallopamil using in vitro microsomes and recombinant CYPs, but it does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Tarabova_2007 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring channel block (IC50) in mouse hair cells, not a pharmacokinetic study reporting disposition parameters for gallopamil. |
| popPK | Theodore_1986 | irrelevant | 0 | 0 | The paper is a mechanistic study on a chemoaffinity ligand derived from verapamil, using gallopamil only as a radioligand/comparator for binding assays, and reports no pharmacokinetic parameters. |
| popPK | Theodore_1990 | irrelevant | 0 | 0 | The paper is a mechanistic study of a photoaffinity probe where gallopamil is used only as a comparator for binding affinity and inotropic effects, with no pharmacokinetic parameters reported. |
| popPK | Usune_1995 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of calcium channel blockers on guinea-pig taenia coli contractions and does not report any pharmacokinetic parameters for gallopamil. |
| popPK | Vilchez_1992 | irrelevant | 0 | 0 | The study is a pharmacodynamic/clinical efficacy trial assessing antianginal effects and does not report quantitative pharmacokinetic parameters such as clearance, volume, or half-life. |
| PD | Vilchez_1992 | not_relevant | 2 | 1 | The study reports clinical efficacy (exercise time) at specific time points after a fixed dose, but does not provide plasma concentration data or fit a concentration-effect model to derive numeric PD parameters like Emax or EC50. |
| popPK | Walday_1992 | irrelevant | 0 | 0 | no_text gate: only 143 chars of text extracted (&lt; 400) |
| popPK | Wang_2001 | irrelevant | 0 | 0 | The paper is a mechanistic study on enzyme inhibition (P-gp vs CYP3A4) and does not report pharmacokinetic disposition parameters for gallopamil. |
| PD | Wang_2001 | not_relevant | 1 | 0 | The paper reports an IC50 for P-gp inhibition, which is a pharmacological potency parameter, but does not provide a pharmacodynamic exposure-response or dose-response relationship (e.g., Emax, EC50 for a clinical effect, or concentration-effect curve) for gallopamil. |
| PGx | Wang_2001 | not_relevant | 0 | 0 | The paper discusses the in vitro inhibition of P-gp and CYP3A4 by gallopamil but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Werner_1991 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of calcium channel ligands on isolated tissues, not a pharmacokinetic study, and reports no disposition parameters for gallopamil. |
| popPK | Weymann_1989 | irrelevant | 2 | 0 | The paper describes the qualitative metabolic pathways and mass balance of gallopamil but does not report quantitative pharmacokinetic parameters such as clearance values, volume of distribution, or half-life. |
| PD | Weymann_1989 | not_relevant | 0 | 0 | The paper focuses exclusively on the metabolism and pharmacokinetics of gallopamil, explicitly stating that metabolites had no relevance to pharmacodynamic action, and provides no concentration-effect or dose-response data. |
| popPK | Zucchi_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of gallopamil's effect on cardiac sarcoplasmic reticulum function and does not report any pharmacokinetic parameters. |
| popPK | Zucchi_1995 | irrelevant | 0 | 0 | no_text gate: only 62 chars of text extracted (&lt; 400) |
| PD | Zucchi_1995 | not_relevant | 0 | 0 | The paper focuses on the molecular interaction between gallopamil and cardiac ryanodine receptors, not on pharmacodynamic exposure-response or dose-response relationships in a physiological or clinical context. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
