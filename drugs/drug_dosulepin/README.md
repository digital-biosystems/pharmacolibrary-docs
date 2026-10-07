<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;dosulepin&quot;}]"></div>

# dosulepin

- **generic name:** dosulepin
- **ATC codes:** `N06AA16`
- **DrugBank:** [DB09167](https://go.drugbank.com/drugs/DB09167) · **PubChem:** [CID 5284550](https://pubchem.ncbi.nlm.nih.gov/compound/5284550)
- **molar mass:** 295.44 g/mol (C19H21NS) — DrugBank
- **groups:** approved, investigational

## About

Dosulepin is a tricyclic antidepressant used to treat depression. It is an approved medicine, used mainly in a few countries such as the United Kingdom, and is not authorised across the whole European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q27116967](https://www.wikidata.org/wiki/Q27116967) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| dothiepin | parent | 295.44 | C19H21NS | DrugBank | [5284550](https://pubchem.ncbi.nlm.nih.gov/compound/5284550) | Maguire_1981, Yu_1986 |
| dothiepin S-oxide | metabolite | 311.443 | C19H21NOS | PubChem | [5365233](https://pubchem.ncbi.nlm.nih.gov/compound/5365233) | Maguire_1981, Yu_1986 |
| N-desmethyl dothiepin S-oxide | metabolite | 297.416 | C18H19NOS | PubChem | [6450308](https://pubchem.ncbi.nlm.nih.gov/compound/6450308) | Yu_1986 |
| northiaden (N-desmethyldothiepin) | metabolite | 281.417 | C18H19NS | PubChem | [1715123](https://pubchem.ncbi.nlm.nih.gov/compound/1715123) | Maguire_1981, Yu_1986 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 22:52 | 1:59 | 0/2/0 | 0/0/0 | 0/0/0 | 114,173/7,461 | ollama / glm-5.3-flash | 4 | 3/1 | 4/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Maguire_1981_reference](drugs/drug_dosulepin/Dosulepin_Maguire1981_reference.md) | — | general linear (no model) | 7 | Maguire KP et al., Metabolism and pharmacokinetics of doth…, British journal of clinical… (1981) | [10.1111/j.1365-2125.1981.tb01235.x](https://doi.org/10.1111/j.1365-2125.1981.tb01235.x) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--stale">stale</span><br><sub>STALE — current validate: rejected</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Yu_1986_reference](drugs/drug_dosulepin/Dosulepin_Yu1986_reference.md) | — | general linear (no model) | 2 | Yu DK et al., Pharmacokinetics of dothiepin in humans…, Journal of pharmaceutical s… (1986) | [10.1002/jps.2600750612](https://doi.org/10.1002/jps.2600750612) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dosulepin) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| metabolism | liver | `CYP1A2` inhibitor/substrate, `CYP2C19` inhibitor/substrate, `CYP2C9` inhibitor, `CYP2D6` inhibitor/substrate, `CYP3A4` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA2A (target), CHRM1 (target), CHRM2 (target), CHRM3 (target), CHRM4 (target), CHRM5 (target), HRH1 (target), HTR1A (target), HTR2A (target), SLC6A2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 24 matched, 24 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 2
- **scholar-agent fallback query used:** True

## Full text wanted

_7 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Maguire_1981.pdf` | Maguire KP et al., Metabolism and pharmacokinetics of doth…, British journal of clinical… (1981) | popPK | 10 | [10.1111/j.1365-2125.1981.tb01235.x](https://doi.org/10.1111/j.1365-2125.1981.tb01235.x) | [7295471](https://pubmed.ncbi.nlm.nih.gov/7295471) | Original PK study in 7 human volunteers with full numeric parameters (ka, half-lives, V, CL) reported directly in the abstract. |
| `Maguire_1983.pdf` | Maguire KP et al., Clinical pharmacokinetics of dothiepin.…, Clinical pharmacokinetics (1983) | popPK | 10 | [10.2165/00003088-198308020-00004](https://doi.org/10.2165/00003088-198308020-00004) | [6851370](https://pubmed.ncbi.nlm.nih.gov/6851370) | Full numeric PK parameters (ka, t½, Vd, CL) for dothiepin (dosulepin) and metabolites are reported directly in the abstract. |
| `Yu_1986.pdf` | Yu DK et al., Pharmacokinetics of dothiepin in humans…, Journal of pharmaceutical s… (1986) | popPK | 10 | [10.1002/jps.2600750612](https://doi.org/10.1002/jps.2600750612) | [3735103](https://pubmed.ncbi.nlm.nih.gov/3735103) | Human single-dose PK study of dosulepin (dothiepin) reporting CL (165.5→121.1 L/h), half-life (~20 h), and compartmental model parameters directly in the abstract, though some detailed parameters may be in tables not shown. |
| `Bareggi_1990.pdf` | Bareggi SR et al., Pharmacokinetics and adverse effects of…, Progress in neuro-psychopha… (1990) | popPK | 7 | [10.1016/0278-5846(90)90098-2](https://doi.org/10.1016/0278-5846(90)90098-2) | [2309034](https://pubmed.ncbi.nlm.nih.gov/2309034) | Original PK study of dothiepin (dosulepin) disposition in humans, but the evidence contains no numeric parameter values (half-lives, clearance) — they are only described qualitatively. |
| `Crampton_1980.pdf` | Crampton EL et al., Chemical ionisation mass fragmentograph…, Journal of chromatography (1980) | popPK | 6 | [10.1016/s0378-4347(00)81687-4](https://doi.org/10.1016/s0378-4347(00)81687-4) | [7400272](https://pubmed.ncbi.nlm.nih.gov/7400272) | Human single-dose PK of dothiepin with half-life (~24 h) and variable V reported, but no full numeric parameter set (CL, V values) given in the evidence. |
| `Ogura_1983.pdf` | Ogura C et al., Age differences in effects on blood pre…, European journal of clinica… (1983) | popPK | 6 | [10.1007/BF00542525](https://doi.org/10.1007/BF00542525) | [6662179](https://pubmed.ncbi.nlm.nih.gov/6662179) | Human PK of dothiepin (T1/2, clearance) is reported but only qualitatively compared between age groups, with no numeric parameter values present in the evidence. |
| `Moharir_2024.pdf` | Moharir S et al., Improved Pharmacokinetic and Pharmacody…, European journal of drug me… (2024) | popPK | 5 | [10.1007/s13318-023-00870-4](https://doi.org/10.1007/s13318-023-00870-4) | [38172422](https://pubmed.ncbi.nlm.nih.gov/38172422) | PK study in rats/mice with dosulepin as subject drug, but only Cmax/t1/2/AUC trends are described; numeric values not present in the evidence. |

<sub>queue written 2026-10-06T22:51:21.051073+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Attia_2012 | irrelevant | 2 | 4 | In vitro CYP enzyme kinetics (Km, Vmax, CLint) for dothiepin metabolism, not disposition PK parameters; some numeric CLint values present but not population-PK. |
| popPK | Bareggi_1990 | relevant | 7 | 2 | Original PK study of dothiepin (dosulepin) disposition in humans, but the evidence contains no numeric parameter values (half-lives, clearance) — they are only described qualitatively. |
| popPK | Crampton_1980 | relevant | 6 | 3 | Human single-dose PK of dothiepin with half-life (~24 h) and variable V reported, but no full numeric parameter set (CL, V values) given in the evidence. |
| popPK | El_2021 | irrelevant | 0 | 0 | Dosulepin (dothiepin) is used only as an internal standard in an LC-MS/MS method for pantoprazole/amitriptyline; no dosulepin PK parameters are reported. |
| popPK | Elama_2018 | irrelevant | 0 | 0 | The paper describes analytical methods for drug quantification in dosage forms, not a pharmacokinetic study reporting disposition parameters. |
| PD | Elama_2018 | not_relevant | 0 | 0 | The paper describes analytical methods for drug quantification and contains no pharmacodynamic or exposure-response data. |
| popPK | Hippisley-Cox_2001 | irrelevant | 0 | 0 | This is an epidemiological case-control study of cardiac risk with no pharmacokinetic parameters for dosulepin. |
| PD | Hippisley-Cox_2001 | not_relevant | 3 | 2 | The paper reports a clinical dose-response association (odds ratios for IHD vs. dose/prescriptions) but lacks pharmacokinetic data or formal pharmacodynamic parameters (Emax, EC50) required for PD modeling. |
| popPK | Howell_2009 | irrelevant | 0 | 0 | The study is an in-vitro binding investigation of liposomes and does not report quantitative pharmacokinetic disposition parameters for dosulepin. |
| PD | Howell_2009 | not_relevant | 0 | 0 | The paper describes in vitro binding of drugs to liposomes for overdose treatment and does not report any pharmacodynamic (exposure-response or dose-response) relationship or numeric PD parameters for dosulepin. |
| popPK | Kitzlerová_2003 | irrelevant | 0 | 0 | The study investigates the correlation between dosulepine plasma levels and ECG parameters (cardiotoxicity), not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Kopanski_1983 | irrelevant | 0 | 0 | Receptor pharmacology study in rat brain slices with no PK parameters for dosulepin. |
| popPK | Li_1979 | irrelevant | 0 | 0 | This is an HPLC analytical method paper for isomer separation; no PK parameters for dosulepin (dothiepin) are reported. |
| popPK | Meert_2010 | irrelevant | 1 | 0 | A case report of TCA intoxication with no quantitative PK parameters for dosulepin reported. |
| popPK | Milani_2020 | irrelevant | 2 | 2 | In-vitro UGT2B10 phenotyping study in human liver microsomes; dothiepin is a substrate candidate, not a PK disposition study, and no PK parameters are reported. |
| popPK | Moharir_2024 | relevant | 5 | 2 | PK study in rats/mice with dosulepin as subject drug, but only Cmax/t1/2/AUC trends are described; numeric values not present in the evidence. |
| PD | Moharir_2024 | not_relevant | 2 | 1 | The paper reports qualitative improvements in pharmacodynamic behavior (FST/TST) and PK parameters (Cmax, AUC) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative exposure-response/dose-response curve for dosulepin. |
| popPK | Ogura_1983 | relevant | 6 | 3 | Human PK of dothiepin (T1/2, clearance) is reported but only qualitatively compared between age groups, with no numeric parameter values present in the evidence. |
| popPK | Pounder_1994 | irrelevant | 1 | 2 | This is a postmortem redistribution/degradation study reporting tissue and blood concentrations, not quantitative disposition PK parameters (CL, V, half-life) for dosulepin. |
| popPK | Presley_2013 | irrelevant | 0 | 0 | The paper is a review of case reports regarding the use of intravenous lipid emulsion for toxicity reversal and does not report pharmacokinetic parameters for dosulepin. |
| PD | Presley_2013 | not_relevant | 0 | 0 | The paper is a review of case reports regarding the use of intravenous lipid emulsion as a rescue therapy for drug toxicity; it does not report any pharmacodynamic modeling, exposure-response analysis, or numeric PD parameters for dosulepin. |
| popPK | Saito_2020 | irrelevant | 0 | 0 | In-vitro chemical degradation study of amoxapine in artificial gastric juice; dosulepin (dothiepin) is only a comparator with no PK parameters. |
| popPK | Thanacoody_2005 | irrelevant | 0 | 0 | The paper is a review of cardiovascular toxicity mechanisms and clinical predictors in tricyclic antidepressant poisoning, containing no pharmacokinetic parameters or quantitative disposition data for dosulepin. |
| PD | Thanacoody_2005 | not_relevant | 1 | 0 | The text is a qualitative review of cardiovascular toxicity mechanisms and clinical predictors (ECG changes) without reporting any numeric concentration-effect or dose-response parameters for dosulepin. |
| popPK | Wever_2026 | irrelevant | 0 | 0 | Retrospective study of psychotropic drug interventions after bariatric surgery; no dosulepin patients and no PK parameters reported. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-06 22:51 UTC</sub>
