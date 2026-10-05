<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C05A&quot;,&quot;href&quot;:&quot;atc/C05A.md&quot;},{&quot;label&quot;:&quot;benzocaine&quot;}]"></div>

# benzocaine

- **generic name:** benzocaine
- **ATC codes:** `C05AD03`, `D04AB04`, `N01BA05`, `R02AD01`
- **DrugBank:** [DB01086](https://go.drugbank.com/drugs/DB01086) · **PubChem:** [CID 2337](https://pubchem.ncbi.nlm.nih.gov/compound/2337)
- **molar mass:** 165.1891 g/mol (C9H11NO2) — DrugBank
- **groups:** approved, investigational

## About

Benzocaine is a topical local anesthetic used to relieve pain and itching in conditions such as hemorrhoids, burns, mouth ulcers, ear infections, and sore throat. It remains widely used in over-the-counter topical products such as skin, throat, and hemorrhoid preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q422745](https://www.wikidata.org/wiki/Q422745) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-30 09:56 | 3:53 | 0/0/0 | 1/0/0 | 0/0/0 | 18,542/1,533 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 1/1 | 1/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Long_2024_mm](drugs/drug_benzocaine/pd_Long_2024_mm.md) | colony diameter (mycelial growth inhibition) ← benzocaine · inhibition effect | — | Long LF et al., Inhibitory effect of benzocaine from Sc…, Scientific reports (2024) | [10.1038/s41598-024-57237-1](https://doi.org/10.1038/s41598-024-57237-1) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=benzocaine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| distribution | blood | `ALB` binder, `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` substrate | DrugBank actor |
| metabolism | liver | `CES1` inhibitor, `CYP1A2` substrate, `CYP2B6` substrate, `CYP2C19` substrate, `CYP2D6` substrate, `CYP2E1` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: SCN10A (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 59 matched, 55 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_8 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Di_2015.pdf` | Di Croce D et al., Drug action of benzocaine on the sarcop…, Naunyn-Schmiedeberg's archi… (2015) | pd | 5 | [10.1007/s00210-015-1149-7](https://doi.org/10.1007/s00210-015-1149-7) | [26173386](https://www.ncbi.nlm.nih.gov/pubmed/26173386) | metadata signals extractable PD data (IC50) |
| `Hollmann_2000.pdf` | Hollmann MW et al., Local anesthetic inhibition of m1 musca…, Anesthesiology (2000) | pd | 5 | [10.1097/00000542-200008000-00030](https://doi.org/10.1097/00000542-200008000-00030) | [10910501](https://www.ncbi.nlm.nih.gov/pubmed/10910501) | metadata signals extractable PD data (IC50) |
| `Bolger_1987.pdf` | Bolger GT et al., Local anesthetics differentiate dihydro…, The Journal of pharmacology… (1987) | pd | 4 | not captured | [3031279](https://www.ncbi.nlm.nih.gov/pubmed/3031279) | metadata signals extractable PD data (IC50) |
| `Hahnenkamp_2006.pdf` | Hahnenkamp K et al., Local anaesthetics inhibit signalling o…, British journal of anaesthe… (2006) | pd | 4 | [10.1093/bja/aei271](https://doi.org/10.1093/bja/aei271) | [16299047](https://www.ncbi.nlm.nih.gov/pubmed/16299047) | metadata signals extractable PD data (EC50) |
| `Herzig_1994.pdf` | Herzig S et al., Functional interaction between local an…, British journal of anaesthe… (1994) | pd | 4 | [10.1093/bja/73.3.357](https://doi.org/10.1093/bja/73.3.357) | [7946864](https://www.ncbi.nlm.nih.gov/pubmed/7946864) | metadata signals extractable PD data (EC50) |
| `Magori_2019.pdf` | Magori N et al., Inhibition by general anesthetic propof…, Naunyn-Schmiedeberg's archi… (2019) | pd | 4 | [10.1007/s00210-018-01596-w](https://doi.org/10.1007/s00210-018-01596-w) | [30519707](https://www.ncbi.nlm.nih.gov/pubmed/30519707) | metadata signals extractable PD data (IC50) |
| `Phillips_1989.pdf` | Phillips WJ et al., Pituitary thyrotropin-releasing hormone…, Molecular endocrinology (Ba… (1989) | pd | 4 | [10.1210/mend-3-9-1345](https://doi.org/10.1210/mend-3-9-1345) | [2558307](https://www.ncbi.nlm.nih.gov/pubmed/2558307) | metadata signals extractable PD data (IC50) |
| `Wang_1994.pdf` | Wang GK et al., Binding of benzocaine in batrachotoxin-…, The Journal of general phys… (1994) | pd | 4 | [10.1085/jgp.103.3.501](https://doi.org/10.1085/jgp.103.3.501) | [8195785](https://www.ncbi.nlm.nih.gov/pubmed/8195785) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-09-30T09:55:59.188824+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belcastro_1992 | irrelevant | 0 | 0 | The paper is a review of drug education textbooks discussing adulterants in illicit drugs and contains no pharmacokinetic data or quantitative disposition parameters for benzocaine. |
| PD | Belcastro_1992 | not_relevant | 0 | 0 | The text is a qualitative review of drug education curricula and lists benzocaine only as a potential adulterant, providing no pharmacodynamic data, models, or numeric parameters. |
| popPK | Berlin_1986 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of quinidine and digoxin in isolated guinea pig heart tissue, where benzocaine is used only as a comparator agent and no pharmacokinetic parameters are reported. |
| PD | Berlin_1986 | not_relevant | 1 | 0 | The paper focuses on the interaction between quinidine and digoxin; benzocaine is only mentioned qualitatively as a control agent that failed to affect digoxin's inotropic effect, with no specific concentration-effect data or PD parameters provided for benzocaine. |
| popPK | Bolger_1987 | irrelevant | 0 | 0 | no_text gate: only 115 chars of text extracted (&lt; 400) |
| PD | Bolger_1987 | not_relevant | 0 | 0 | The paper investigates the binding properties of local anesthetics to calcium channels in rat membranes and does not report pharmacodynamic exposure-response or dose-response relationships for benzocaine. |
| popPK | Chapula_1985 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study on cardiac sodium channels and does not report pharmacokinetic parameters for benzocaine. |
| popPK | Coleman_1999 | irrelevant | 0 | 0 | The study focuses on the bioactivation of 4-aminopropiophenone (4-PAPP) in microsomes, with benzocaine serving only as a comparator for methaemoglobin generation, and no pharmacokinetic parameters for benzocaine are reported. |
| popPK | Di_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of benzocaine's effect on Ca-ATPase activity, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Fozard_1979 | irrelevant | 0 | 0 | The study is a pharmacological investigation of serotonin receptor blockade in animal tissues, and benzocaine is used only as a negative control/comparator without any pharmacokinetic parameters reported. |
| PD | Fozard_1979 | not_relevant | 0 | 0 | The paper focuses on the pharmacology of cocaine and its analogues; benzocaine is mentioned only as a negative control (non-selective antagonist) without any reported concentration-effect data or PD parameters. |
| popPK | Garlid_1983 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on mitochondrial uncoupling where benzocaine is used only as an ineffective neutral control, with no pharmacokinetic parameters reported. |
| PD | Garlid_1983 | not_relevant | 2 | 1 | The paper reports that benzocaine was ineffective in the assay and provides only a qualitative potency ranking for other drugs, without numeric PD parameters or concentration-effect curves for benzocaine. |
| popPK | Gibbs_2018 | irrelevant | 0 | 0 | The paper is an in-vitro toxicology study on metal salts where benzocaine is used only as a reference chemical for potency calibration, not as a subject for pharmacokinetic analysis. |
| PD | Gibbs_2018 | not_relevant | 0 | 0 | The paper uses benzocaine only as a reference chemical for an interpolation model to predict sensitization potency, not to characterize its pharmacodynamic exposure-response relationship. |
| popPK | Guertler_1992 | irrelevant | 0 | 0 | The study focuses on methemoglobinemia (toxicology) rather than pharmacokinetic disposition parameters, and no PK values are reported. |
| popPK | Hahnenkamp_2006 | irrelevant | 0 | 0 | no_text gate: only 137 chars of text extracted (&lt; 400) |
| popPK | Hara_1995 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of local anesthetics on neuronal currents and does not report any pharmacokinetic parameters for benzocaine. |
| popPK | Harkins_1996 | irrelevant | 0 | 0 | The study reports local anesthetic efficacy (HNED) and duration of action, not quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for benzocaine. |
| popPK | Hersh_2005 | irrelevant | 0 | 0 | The study is a clinical efficacy and compliance trial for benzocaine gel that reports pain relief metrics but contains no pharmacokinetic parameters (e.g., clearance, volume, half-life). |
| PD | Hersh_2005 | not_relevant | 1 | 0 | The study is a clinical efficacy trial comparing fixed-dose benzocaine gel to placebo; it reports responder rates and pain scores but does not measure drug concentrations or fit a pharmacodynamic model, so no exposure-response or dose-response parameters (Emax, EC50, etc.) are reported or derivable. |
| popPK | Herzig_1994 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| popPK | Hollmann_2000 | irrelevant | 0 | 0 | no_text gate: only 68 chars of text extracted (&lt; 400) |
| PD | Hollmann_2000 | not_relevant | 0 | 0 | The paper focuses on the mechanism of m1 muscarinic acetylcholine signaling inhibition by local anesthetics, not on the pharmacodynamic exposure-response or dose-response relationship of benzocaine in a clinical or PK/PD context. |
| popPK | Hollmann_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor inhibition in Xenopus oocytes and does not report pharmacokinetic disposition parameters for benzocaine. |
| popPK | Horishita_2021 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of TRPV3 channel inhibition in Xenopus oocytes and does not report pharmacokinetic parameters for benzocaine. |
| PD | Horishita_2021 | not_relevant | 0 | 0 | The paper reports IC50 values for lidocaine, mepivacaine, ropivacaine, and bupivacaine, but explicitly states that benzocaine did not reduce the currents, providing no numeric PD parameters for benzocaine. |
| popPK | Huang_1981 | irrelevant | 0 | 0 | The study is a mechanistic in-vitro investigation of binding sites on sodium channels, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Hönemann_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of thromboxane A2 receptor inhibition, reporting IC50 values rather than pharmacokinetic disposition parameters for benzocaine. |
| popPK | J_2026 | irrelevant | 0 | 0 | The study focuses on phytochemical analysis and molecular docking of herbal extracts, with benzocaine mentioned only as a comparator for adverse effects, and no pharmacokinetic parameters are reported. |
| PD | J_2026 | not_relevant | 0 | 0 | The paper focuses on phytochemical analysis, cytotoxicity (IC50 for cell viability), and molecular docking of herbal extracts, and does not report any pharmacodynamic or exposure-response data for benzocaine. |
| popPK | Kawai_1997 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of odorant effects on ion channels in newt cells, using benzocaine only as a mechanistic comparator for local anesthetic effects, with no pharmacokinetic parameters reported. |
| PD | Kawai_1997 | not_relevant | 0 | 0 | The paper investigates odorants (amyl acetate, etc.) and only qualitatively compares their mechanism to benzocaine without providing any numeric PD parameters or dose-response data for benzocaine. |
| popPK | Kimber_1991 | irrelevant | 0 | 0 | The paper is an immunological study on the local lymph node assay for contact allergens and does not report any pharmacokinetic parameters for benzocaine. |
| PD | Kimber_1991 | not_relevant | 1 | 0 | The paper reports benzocaine as a negative result in an inter-laboratory trial and mentions dose-response characteristics qualitatively, but provides no numeric PD parameters or extractable concentration-effect data. |
| popPK | Kutchai_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of Na,K-ATPase activity and does not report any pharmacokinetic parameters for benzocaine. |
| PD | Kutchai_2000 | not_relevant | 3 | 2 | The study reports qualitative effects of benzocaine (inhibition at 37C, stimulation at 25C) but provides no numeric PD parameters (IC50, Emax, etc.) or concentration-effect curves for benzocaine in the text. |
| popPK | Librowski_2010 | irrelevant | 0 | 0 | The paper studies the antioxidant activity of carane derivatives and uses benzocaine only as a comparator in in-vitro assays, reporting no pharmacokinetic parameters. |
| PD | Librowski_2010 | not_relevant | 0 | 0 | The paper reports antioxidant activity (IC50/TEAC) for carane derivatives and compares them to benzocaine, but does not report a pharmacodynamic (exposure-response) relationship or numeric PD parameters for benzocaine itself. |
| popPK | Lilley_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring IC50 values for sodium channel blockade, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Lim_2008 | irrelevant | 0 | 0 | The study is an in-vitro immunological assay for skin sensitization and does not report any pharmacokinetic parameters for benzocaine. |
| PD | Lim_2008 | not_relevant | 2 | 1 | The paper reports a binary classification of chemicals as sensitizers based on MIP-1beta production at fixed doses, but does not provide a quantitative dose-response curve or numeric PD parameters (e.g., EC50, Emax) for benzocaine. |
| popPK | Long_2024 | irrelevant | 0 | 0 | The paper investigates the antifungal mechanism of benzocaine against a plant pathogen, not its pharmacokinetics in humans or animals. |
| popPK | Magori_2019 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Magori_2019 | not_relevant | 0 | 0 | The paper focuses on the effect of propofol on frog sciatic nerve action potentials and does not report any pharmacodynamic or exposure-response data for benzocaine. |
| popPK | Meechan_2002 | irrelevant | 0 | 0 | The paper is a review of topical anesthetic techniques and efficacy, containing no quantitative pharmacokinetic parameters (CL, V, ka, etc.) for benzocaine. |
| PD | Meechan_2002 | not_relevant | 1 | 0 | The text is a qualitative review that mentions effective concentrations for benzocaine (20%) but does not provide numeric PD parameters (Emax, EC50) or an extractable dose-response curve. |
| popPK | Moczydlowski_1986 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on sodium channel blocking modes, not a pharmacokinetic study, and contains no disposition parameters for benzocaine. |
| PD | Moczydlowski_1986 | not_relevant | 2 | 0 | The text describes qualitative electrophysiological blocking modes and dwell times for benzocaine but does not provide numeric PD parameters, dose-response curves, or quantitative concentration-effect data. |
| popPK | Peperidou_2014 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on the synthesis and biological activity of cinnamic acid hybrids, not a pharmacokinetic study of benzocaine. |
| PD | Peperidou_2014 | not_relevant | 0 | 0 | The paper reports in vitro IC50 values for novel cinnamic acid hybrids, not a pharmacokinetic or pharmacodynamic exposure-response relationship for the drug benzocaine. |
| popPK | Phillips_1989 | irrelevant | 0 | 0 | no_text gate: only 100 chars of text extracted (&lt; 400) |
| PD | Phillips_1989 | not_relevant | 0 | 0 | The paper investigates the effects of local anesthetics on TRH receptors but does not report specific pharmacodynamic or exposure-response data for benzocaine. |
| popPK | Seiler_1987 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on platelet membrane vesicles reporting IC50 values for inhibition of calcium release, not pharmacokinetic disposition parameters for benzocaine. |
| popPK | Strugala_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of intestinal transport inhibition, not a pharmacokinetic study reporting disposition parameters for benzocaine. |
| PD | Strugala_2000 | not_relevant | 0 | 0 | The study explicitly states that benzocaine did not impair active uptake, and no numeric PD parameters (IC50, Emax, etc.) are reported for benzocaine. |
| popPK | Sullivan_1999 | irrelevant | 0 | 0 | The study is a mechanistic investigation of benzocaine's effect on LPA signaling in Xenopus oocytes and does not report any pharmacokinetic parameters. |
| popPK | Tikhonov_2014 | irrelevant | 0 | 0 | The paper is a mechanistic study on ion channel binding (homology modeling) and does not report any pharmacokinetic parameters for benzocaine. |
| PD | Tikhonov_2014 | not_relevant | 0 | 0 | The paper focuses on homology modeling and docking of ligands into the Kv1.5 channel structure, not on pharmacodynamic exposure-response or dose-response analysis with numeric PD parameters. |
| popPK | Torreilles_2009 | irrelevant | 0 | 0 | The study evaluates euthanasia methods in frogs and reports only the dose required for death, not pharmacokinetic disposition parameters (CL, V, ka, etc.) for benzocaine. |
| PD | Torreilles_2009 | not_relevant | 3 | 2 | The paper reports a single effective dose (182 mg/kg) for benzocaine to ensure euthanasia but does not provide a dose-response curve, concentration-effect data, or numeric PD parameters like Emax or EC50. |
| popPK | Van_2005 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assessment of allergenic potency (cytokine production) and does not report any pharmacokinetic parameters for benzocaine. |
| popPK | Wang_1994 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on sodium channel block by tetracaine, with benzocaine mentioned only as a comparator, and contains no pharmacokinetic parameters. |
| PD | Wang_1994 | not_relevant | 0 | 0 | The paper reports dose-response parameters (IC50, Hill coefficient) for tetracaine, not benzocaine; benzocaine is only mentioned as a reference for a different class of local anesthetics. |
| popPK | Wang_1994_2 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Wang_1994_2 | not_relevant | 0 | 0 | The paper describes electrophysiological binding interactions in modified Na+ channels, not a pharmacodynamic exposure-response or dose-response relationship for the drug's therapeutic effect. |
| popPK | Wang_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of sodium channel binding mechanisms, not a pharmacokinetic study reporting disposition parameters for benzocaine. |
| popPK | Weiser_2002 | irrelevant | 0 | 0 | The study investigates the electrophysiological effects of ambroxol on sodium channels, with benzocaine mentioned only as a comparator for potency, and no pharmacokinetic parameters are reported. |
| PD | Weiser_2002 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamics of ambroxol, not benzocaine; benzocaine is only mentioned as a qualitative comparator for potency. |
| popPK | Weiser_2006 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of sodium channel block, not a pharmacokinetic study, and reports no disposition parameters for benzocaine. |
| popPK | Xiong_1999 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ion channel modulation, not a pharmacokinetic study, and benzocaine is only a comparator agent with no disposition parameters reported. |
| PD | Xiong_1999 | not_relevant | 0 | 0 | The paper reports IC50 values for lidocaine and QX314, but explicitly states that benzocaine did not have a significant effect, providing no numeric PD parameters for benzocaine. |
| popPK | Yatvin_1982 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay of bacterial survival and anaesthetic potency, not a pharmacokinetic study, and reports no disposition parameters for benzocaine. |
| popPK | van_2000 | irrelevant | 0 | 0 | The study focuses on the local lymph node assay for sensitization potency and does not report pharmacokinetic parameters for benzocaine. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
