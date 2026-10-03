<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C07A&quot;,&quot;href&quot;:&quot;atc/C07A.md&quot;},{&quot;label&quot;:&quot;pindolol&quot;}]"></div>

# pindolol

- **generic name:** pindolol
- **ATC codes:** `C07AA03`, `C07CA03`
- **DrugBank:** [DB00960](https://go.drugbank.com/drugs/DB00960) · **PubChem:** [CID 4828](https://pubchem.ncbi.nlm.nih.gov/compound/4828)
- **molar mass:** 248.3208 g/mol (C14H20N2O2) — DrugBank
- **groups:** approved, investigational

## About

**Description.** Pindolol is a first generation non-selective beta blocker used in the treatment of hypertension.[L32353] Early research into the use of pindolol found it had chronotropic effects, and so further investigation focused on the treatment of arrhythmia.[A231059] Research into pindolol's use in the treatment of hypertension began in the early 1970s.[A231064]

Pindolol was granted FDA approval on 3 September 1982.[L32348]

**Indication.** Pindolol is indicated in the management of hypertension.[L32353] In Canada, it is also indicated in the prophylaxis of angina.[L32388]

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 06:08 | 44:28 | 0/0/0 | 3/0/0 | 0/0/0 | 147,350/7,792 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 7/2 | 8/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Baker_2014_3H_cAMP](drugs/drug_pindolol/pd_Baker_2014_3H_cAMP.md) | 3H-cAMP accumulation ← cimaterol/CGP12177 (agonist concentration) · direct sigmoid Emax (Hill) effect | — | Baker JG et al., Identification of key residues in trans…, Molecular pharmacology (2014) | [10.1124/mol.114.091587](https://doi.org/10.1124/mol.114.091587) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Baker_2014_CRE_SPAP](drugs/drug_pindolol/pd_Baker_2014_CRE_SPAP.md) | CRE-SPAP reporter production ← cimaterol/CGP12177 (agonist concentration) · direct sigmoid Emax (Hill) effect | — | Baker JG et al., Identification of key residues in trans…, Molecular pharmacology (2014) | [10.1124/mol.114.091587](https://doi.org/10.1124/mol.114.091587) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">rat</span> | [Louis_1982_duration_of_pentylenetetrazol_induced_convulsions](drugs/drug_pindolol/pd_Louis_1982_duration_of_pentylenetetrazol_induced_convulsions.md) | duration of pentylenetetrazol-induced convulsions ← propranolol (dose-based; also pindolol, timolol, practolol) · inhibition effect | — | Louis WJ et al., Role of central beta-adrenoceptors in t…, British journal of pharmaco… (1982) | [10.1111/j.1476-5381.1982.tb09159.x](https://doi.org/10.1111/j.1476-5381.1982.tb09159.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Sidorova_2022_MTT](drugs/drug_pindolol/pd_Sidorova_2022_MTT.md) | cell viability ← propranolol; betaxolol (tested beta blockers) · direct sigmoid Emax (Hill) effect | — | Sidorova M et al., The Effect of Beta Adrenoreceptor Block…, Molecules (Basel, Switzerla… (2022) | [10.3390/molecules27061938](https://doi.org/10.3390/molecules27061938) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from keyword rules on the title and abstract — no LLM answer yet).">in vitro</span> | [Sidorova_2022_colonies](drugs/drug_pindolol/pd_Sidorova_2022_colonies.md) | cell colony formation ← propranolol; betaxolol (tested beta blockers) · direct sigmoid Emax (Hill) effect | — | Sidorova M et al., The Effect of Beta Adrenoreceptor Block…, Molecules (Basel, Switzerla… (2022) | [10.3390/molecules27061938](https://doi.org/10.3390/molecules27061938) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=pindolol) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ORM1` binder | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `SULT1A1` substrate, `UGT1A1` substrate | DrugBank actor |
| metabolism | small intestine | `SULT1A1` substrate, `UGT1A1` substrate | DrugBank actor |
| excretion | bile duct | <sub>“…6-9% of an intravenous dose is eliminated in the feces…”</sub> | prose |
| excretion | kidney | `SLC22A2` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: ADRB1 (partial agonist), ADRB2 (partial agonist), ADRB3 (target), HTR1A (target), HTR1B (target).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 259 matched, 88 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_26 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gonçalves_2002.pdf` | Gonçalves PV et al., Enantioselectivity in the steady-state…, Chirality (2002) | popPK | 10 | [10.1002/chir.10124](https://doi.org/10.1002/chir.10124) | [12125040](https://pubmed.ncbi.nlm.nih.gov/12125040) | The paper reports quantitative pharmacokinetic parameters (AUC, CL, Vd/f, Cl/f) for pindolol enantiomers in a human study, with all numeric values explicitly present in the text. |
| `Balant_1981.pdf` | Balant L et al., Simultaneous tubular excretion and reab…, European journal of clinica… (1981) | popPK | 9 | [10.1007/BF00609590](https://doi.org/10.1007/BF00609590) | [7333348](https://pubmed.ncbi.nlm.nih.gov/7333348) | The study reports PK parameters for pindolol, but only half-lives are explicitly provided in the text, while clearance and volume values are described as derived from models without listing the specific numeric results. |
| `Chau_1977.pdf` | Chau NP et al., Pindolol availability in hypertensive p…, Clinical pharmacology and t… (1977) | popPK | 9 | [10.1002/cpt1977225part1505](https://doi.org/10.1002/cpt1977225part1505) | [913016](https://pubmed.ncbi.nlm.nih.gov/913016) | The paper describes a pharmacokinetic study of pindolol with a two-compartment model, but the provided evidence contains only qualitative descriptions of parameter changes without any specific numeric values. |
| `Kiger_1976.pdf` | Kiger JL et al., The effect of food and clopamide on the…, International journal of cl… (1976) | popPK | 9 | not captured | [780287](https://pubmed.ncbi.nlm.nih.gov/780287) | The paper describes a pharmacokinetic study of pindolol using a one-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| `Ohnhaus_1976.pdf` | Ohnhaus EE et al., [Comparative study on the elimination o…, Schweizerische medizinische… (1976) | popPK | 9 | not captured | [1013699](https://pubmed.ncbi.nlm.nih.gov/1013699) | The study is a pharmacokinetic investigation of pindolol in humans, but the specific numeric parameter values are not present in the provided text. |
| `Schwarz_1982.pdf` | Schwarz HJ, Pharmacokinetics of pindolol in humans…, American heart journal (1982) | popPK | 9 | [10.1016/0002-8703(82)90126-0](https://doi.org/10.1016/0002-8703(82)90126-0) | [7102525](https://pubmed.ncbi.nlm.nih.gov/7102525) | The paper is a primary PK study for pindolol reporting a compartmental model, but specific numeric values for clearance, volume, or rate constants are not present in the provided text, only qualitative descriptions and half-lives of radioactivity. |
| `Gross_1994.pdf` | Gross AS et al., Interaction of the stereoisomers of bas…, The Journal of pharmacology… (1994) | pd | 5 | not captured | [8138920](https://www.ncbi.nlm.nih.gov/pubmed/8138920) | metadata signals extractable PD data (IC50) |
| `Unsworth_1992.pdf` | Unsworth CD et al., Regulation of the 5-hydroxytryptamine1B…, Molecular pharmacology (1992) | pd | 5 | not captured | [1328846](https://www.ncbi.nlm.nih.gov/pubmed/1328846) | metadata signals extractable PD data (EC50) |
| `Chevalier_1989.pdf` | Chevalier B et al., Beta-adrenergic system is modified in c…, Journal of cardiovascular p… (1989) | pd | 4 | [10.1097/00005344-198903000-00009](https://doi.org/10.1097/00005344-198903000-00009) | [2471887](https://www.ncbi.nlm.nih.gov/pubmed/2471887) | metadata signals extractable PD data (EC50) |
| `Choppin_1995.pdf` | Choppin A et al., Presence of vasoconstrictor 5HT1-like r…, British journal of pharmaco… (1995) | pd | 4 | [10.1111/j.1476-5381.1995.tb13228.x](https://doi.org/10.1111/j.1476-5381.1995.tb13228.x) | [7881730](https://www.ncbi.nlm.nih.gov/pubmed/7881730) | metadata signals extractable PD data (EC50) |
| `Croci_1988.pdf` | Croci T et al., Inhibition of rat colon motility by sti…, Pharmacological research co… (1988) | pd | 4 | [10.1016/s0031-6989(88)80007-9](https://doi.org/10.1016/s0031-6989(88)80007-9) | [2898155](https://www.ncbi.nlm.nih.gov/pubmed/2898155) | metadata signals extractable PD data (EC50) |
| `De_1990.pdf` | De Vivo M et al., Stimulation and inhibition of adenylyl…, Biochemical pharmacology (1990) | pd | 4 | [10.1016/0006-2952(90)90453-r](https://doi.org/10.1016/0006-2952(90)90453-r) | [2222510](https://www.ncbi.nlm.nih.gov/pubmed/2222510) | metadata signals extractable PD data (EC50) |
| `Drira-Chaabane_1996.pdf` | Drira-Chaabane S et al., Lipolytic action of Buthus occitanus tu…, Biochemical and biophysical… (1996) | pd | 4 | [10.1006/bbrc.1996.1346](https://doi.org/10.1006/bbrc.1996.1346) | [8806627](https://www.ncbi.nlm.nih.gov/pubmed/8806627) | metadata signals extractable PD data (EC50) |
| `Gillis_1988.pdf` | Gillis AM et al., Voltage-dependent Vmax blockade in Na+-…, Canadian journal of physiol… (1988) | pd | 4 | [10.1139/y88-211](https://doi.org/10.1139/y88-211) | [2853642](https://www.ncbi.nlm.nih.gov/pubmed/2853642) | metadata signals extractable PD data (IC50) |
| `Gobbi_1996.pdf` | Gobbi M et al., Are 5-hydroxytryptamine7 receptors invo…, Molecular pharmacology (1996) | pd | 4 | not captured | [8643096](https://www.ncbi.nlm.nih.gov/pubmed/8643096) | metadata signals extractable PD data (IC50) |
| `Kitazawa_1998.pdf` | Kitazawa T et al., Involvement of 5-hydroxytryptamine7 rec…, British journal of pharmaco… (1998) | pd | 4 | [10.1038/sj.bjp.0701583](https://doi.org/10.1038/sj.bjp.0701583) | [9489604](https://www.ncbi.nlm.nih.gov/pubmed/9489604) | metadata signals extractable PD data (EC50) |
| `Klug_1994.pdf` | Klug S et al., Toxicity of beta-blockers in a rat whol…, Archives of toxicology (1994) | pd | 4 | [10.1007/s002040050085](https://doi.org/10.1007/s002040050085) | [7916561](https://www.ncbi.nlm.nih.gov/pubmed/7916561) | metadata signals extractable PD data (EC50) |
| `Landi_1992.pdf` | Landi M et al., Phenylethanolaminotetralines compete wi…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90401-4](https://doi.org/10.1016/0006-2952(92)90401-4) | [1354964](https://www.ncbi.nlm.nih.gov/pubmed/1354964) | metadata signals extractable PD data (IC50) |
| `Lima_1996.pdf` | Lima JJ, Relationship between beta adrenoceptor…, Journal of receptor and sig… (1996) | pd | 4 | [10.3109/10799899609039956](https://doi.org/10.3109/10799899609039956) | [8968966](https://www.ncbi.nlm.nih.gov/pubmed/8968966) | metadata signals extractable PD data (EC50) |
| `Mian_1985.pdf` | Mian MA et al., The sympathomimetic activity of (+/-)-p…, European journal of pharmac… (1985) | pd | 4 | [10.1016/0014-2999(85)90540-0](https://doi.org/10.1016/0014-2999(85)90540-0) | [2986991](https://www.ncbi.nlm.nih.gov/pubmed/2986991) | metadata signals extractable PD data (Emax) |
| `Ozawa_1989.pdf` | Ozawa H et al., Age-related alteration in the catechola…, Yakubutsu, seishin, kodo =… (1989) | pd | 4 | not captured | [2560883](https://www.ncbi.nlm.nih.gov/pubmed/2560883) | metadata signals extractable PD data (EC50) |
| `Rick_1995.pdf` | Rick CE et al., Excitation of rat substantia nigra pars…, Neuroscience (1995) | pd | 4 | [10.1016/0306-4522(95)00283-o](https://doi.org/10.1016/0306-4522(95)00283-o) | [8596658](https://www.ncbi.nlm.nih.gov/pubmed/8596658) | metadata signals extractable PD data (EC50) |
| `Schoeffter_1988.pdf` | Schoeffter P et al., Centrally acting hypotensive agents wit…, British journal of pharmaco… (1988) | pd | 4 | [10.1111/j.1476-5381.1988.tb11728.x](https://doi.org/10.1111/j.1476-5381.1988.tb11728.x) | [3207999](https://www.ncbi.nlm.nih.gov/pubmed/3207999) | metadata signals extractable PD data (EC50) |
| `Scott_1994.pdf` | Scott PA et al., Differential induction of 5-HT1A-mediat…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [8035316](https://www.ncbi.nlm.nih.gov/pubmed/8035316) | metadata signals extractable PD data (EC50) |
| `Stupack_1999.pdf` | Stupack DG et al., Heterogeneity among beta-adrenoreceptor…, Canadian journal of physiol… (1999) | pd | 4 | not captured | [10537226](https://www.ncbi.nlm.nih.gov/pubmed/10537226) | metadata signals extractable PD data (IC50) |
| `Yukawa_1990.pdf` | Yukawa T et al., Beta 2-adrenergic receptors on eosinoph…, The American review of resp… (1990) | pd | 4 | [10.1164/ajrccm/141.6.1446](https://doi.org/10.1164/ajrccm/141.6.1446) | [2161627](https://www.ncbi.nlm.nih.gov/pubmed/2161627) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-09-29T05:58:24.770795+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Adham_1993 | irrelevant | 0 | 0 | The study is a mechanistic receptor pharmacology investigation using pindolol as a ligand, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Atkinson_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor occupancy and cAMP production, not a pharmacokinetic study, and pindolol is used only as an alkylating agent. |
| popPK | Baker_2014 | irrelevant | 0 | 0 | The paper is an in-vitro receptor pharmacology study focusing on adrenoceptor conformations and does not report pharmacokinetic parameters for pindolol. |
| popPK | Balant_1981 | relevant | 9 | 2 | The study reports PK parameters for pindolol, but only half-lives are explicitly provided in the text, while clearance and volume values are described as derived from models without listing the specific numeric results. |
| popPK | Barnett_1989 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of receptor regulation where pindolol is used only as a radioligand for binding assays, not as a subject drug for pharmacokinetic analysis. |
| PD | Barnett_1989 | not_relevant | 0 | 0 | The paper uses pindolol only as a radioligand for receptor binding assays and does not report any pharmacodynamic (exposure- or dose-response) relationship for pindolol itself. |
| popPK | Boddeke_1992 | irrelevant | 0 | 0 | The paper is an in-vitro receptor pharmacology study where pindolol is used as a comparator antagonist, not a pharmacokinetic study. |
| PD | Boddeke_1992 | not_relevant | 3 | 2 | The paper reports pindolol as a silent antagonist with comparable KB values across cell lines, but it is a qualitative pharmacological characterization in a cellular model, not a PK/PD or exposure-response analysis with extractable numeric PD parameters for the drug in a physiological context. |
| popPK | Chau_1977 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of pindolol with a two-compartment model, but the provided evidence contains only qualitative descriptions of parameter changes without any specific numeric values. |
| popPK | Chevalier_1989 | irrelevant | 0 | 0 | no_text gate: only 124 chars of text extracted (&lt; 400) |
| PD | Chevalier_1989 | not_relevant | 0 | 0 | The paper focuses on physiological and biochemical changes in the beta-adrenergic system in rats with cardiac overload and does not report a pharmacodynamic or exposure-response analysis for pindolol. |
| PD | Chidlow_2001 | not_relevant | 2 | 1 | The paper studies flesinoxan, not pindolol; pindolol is only mentioned as a 5-HT1A antagonist used in a mechanism-of-action experiment without reporting specific PD parameters for pindolol itself. |
| popPK | Choppin_1995 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| PD | Choppin_1995 | not_relevant | 0 | 0 | The paper investigates 5HT1-like receptors in rabbit mesenteric arteries and does not mention pindolol or report any exposure-response or dose-response data for it. |
| popPK | Croci_1988 | irrelevant | 0 | 0 | no_text gate: only 107 chars of text extracted (&lt; 400) |
| PD | Croci_1988 | not_relevant | 0 | 0 | The paper focuses on new gut-specific agents and does not report pharmacodynamic or exposure-response data for pindolol. |
| PD | Dabiré_1992 | not_relevant | 1 | 0 | The paper focuses on the pharmacology of 5-HT and its agonists/antagonists; pindolol is only mentioned as a 5-HT1 antagonist that failed to block 5-HT-induced tachycardia, with no PD parameters or exposure-response analysis for pindolol itself. |
| popPK | De_1990 | irrelevant | 0 | 0 | The paper is a mechanistic study on 5-HT receptors and adenylyl cyclase, using pindolol only as a pharmacological probe/antagonist, and contains no pharmacokinetic parameters. |
| popPK | Drira-Chaabane_1996 | irrelevant | 0 | 0 | no_text gate: only 96 chars of text extracted (&lt; 400) |
| PD | Drira-Chaabane_1996 | not_relevant | 0 | 0 | The paper focuses on the lipolytic action of scorpion venom and beta-adrenergic pathways, with no mention of pindolol or any pharmacodynamic modeling for it. |
| popPK | Dumuis_1988 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study of 5-HT1A receptors where pindolol is used only as a non-selective antagonist, with no pharmacokinetic parameters reported. |
| PD | Dumuis_1988 | not_relevant | 0 | 0 | The paper reports in vitro receptor binding/functional assays (EC50 for agonists, affinity for antagonists) rather than a pharmacodynamic exposure-response or dose-response relationship for pindolol as a therapeutic agent. |
| popPK | Dunlop_1998 | irrelevant | 0 | 0 | The paper is an in-vitro receptor pharmacology study characterizing 5-HT1A receptor coupling, not a pharmacokinetic study, and pindolol is only used as a reference antagonist. |
| popPK | Ebersole_1993 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of 5-HT receptors where pindolol is used only as a non-selective antagonist, with no pharmacokinetic parameters reported. |
| PD | Ebersole_1993 | not_relevant | 0 | 0 | The paper studies 5-HT receptor pharmacology in vascular smooth muscle cells and mentions pindolol only as an antagonist that did not inhibit the response, providing no exposure-response or dose-response relationship for pindolol. |
| popPK | Edwards_1991 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of 5-HT3 receptors in rat brain tissue where pindolol is used only as a non-selective antagonist control, not as the subject of pharmacokinetic analysis. |
| PD | Edwards_1991 | not_relevant | 0 | 0 | The paper investigates 5-HT3 receptor agonists and their effect on phosphoinositide hydrolysis; pindolol is only mentioned as a non-effective control antagonist, and no PD parameters for pindolol are reported. |
| PD | Egginger_1993 | not_relevant | 1 | 0 | The paper is a review of enantioselective bioanalytical methods (HPLC) for beta-blockers and does not report specific pharmacodynamic data, exposure-response relationships, or numeric PD parameters for pindolol. |
| popPK | Figueroa_2009 | irrelevant | 0 | 0 | The study is a mechanistic investigation of NO production and eNOS phosphorylation in rats, where pindolol is used only as a beta-adrenoceptor agonist to test receptor coupling, not as a subject for pharmacokinetic analysis. |
| PD | Figueroa_2009 | not_relevant | 1 | 0 | The paper reports an EC50 for epinephrine, not pindolol; pindolol is only mentioned as a beta-3 agonist whose effect was reduced by an antagonist, without providing specific concentration-effect data or PD parameters for pindolol itself. |
| popPK | Gillis_1988 | irrelevant | 0 | 0 | no_text gate: only 144 chars of text extracted (&lt; 400) |
| PD | Gillis_1988 | not_relevant | 0 | 0 | The paper investigates the electrophysiological mechanism of Vmax blockade in myocardium and does not report a pharmacodynamic exposure-response or dose-response relationship for pindolol with numeric PD parameters. |
| PD | Gobbi_1996 | not_relevant | 0 | 0 | The paper investigates serotonin receptor binding in rat hypothalamus and does not mention pindolol or report any pharmacodynamic or exposure-response data. |
| PD | Gross_1994 | not_relevant | 0 | 0 | The paper investigates the interaction of stereoisomers of basic drugs with tetraethylammonium uptake in rat renal vesicles and does not report any pharmacodynamic or exposure-response data for pindolol. |
| PD | Harron_1991_2 | not_relevant | 1 | 0 | The text is a qualitative review summary that mentions therapeutic efficacy and comparison to pindolol but provides no numeric PD parameters, concentration-effect curves, or dose-response data. |
| popPK | Hirani_2000 | irrelevant | 0 | 0 | The study is a receptor occupancy/PET imaging study measuring binding potential, not a pharmacokinetic study reporting disposition parameters like clearance or volume for pindolol. |
| PD | Jasper_1990 | not_relevant | 1 | 0 | The paper focuses on carteolol and its metabolite, mentioning pindolol only as a qualitative comparator for intrinsic sympathomimetic activity without providing any numeric PD parameters or concentration-effect data for pindolol. |
| popPK | Johnson_1993 | irrelevant | 0 | 0 | The study investigates the pharmacological mechanism of 5-HT1A receptors on tyrosine hydroxylation, using pindolol only as a non-specific antagonist probe rather than as the subject of a pharmacokinetic analysis. |
| PD | Johnson_1993 | not_relevant | 0 | 0 | The paper investigates 5-HT1A receptor modulation of tyrosine hydroxylation; pindolol is used only as a non-specific antagonist to confirm receptor selectivity, and no exposure-response or dose-response relationship for pindolol is reported. |
| PD | Kaur_2000 | not_relevant | 3 | 1 | The text describes a qualitative dose-response interaction (potentiation/antagonism) but does not provide numeric PD parameters (Emax, EC50) or a quantitative concentration-effect curve for pindolol. |
| popPK | Kiger_1976 | relevant | 9 | 0 | The paper describes a pharmacokinetic study of pindolol using a one-compartment model, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Kitazawa_1998 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Kitazawa_1998 | not_relevant | 0 | 0 | The paper focuses on 5-hydroxytryptamine (serotonin) and its receptors in porcine myometrium, with no mention of pindolol or its pharmacodynamic parameters. |
| popPK | Klug_1994 | irrelevant | 0 | 0 | The study is an in-vitro toxicity assay measuring tissue concentrations and EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume for pindolol. |
| popPK | Kribben_1997 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on adrenoceptors in kidney cells where pindolol is used only as a non-selective beta-blocker control, with no pharmacokinetic parameters reported. |
| PD | Kribben_1997 | not_relevant | 0 | 0 | The paper studies MAP kinase activation in cell lines and mentions pindolol only as a non-significant antagonist at a single concentration, providing no exposure-response or dose-response relationship for pindolol. |
| popPK | Landi_1992 | irrelevant | 0 | 0 | The paper is an in-vitro receptor binding study where pindolol is used only as a reference antagonist, not a pharmacokinetic study. |
| PD | Landi_1992 | not_relevant | 0 | 0 | The paper reports radioligand binding affinity (Ki) for pindolol, which is a pharmacological binding parameter, not a pharmacodynamic (exposure-response or dose-response) relationship for a physiological effect. |
| PGx | Le-Niculescu_2021 | not_relevant | 0 | 0 | The paper identifies pindolol as a potential repurposed drug candidate based on gene expression biomarkers but does not report any pharmacogenomic effects on pindolol's pharmacokinetic or pharmacodynamic parameters. |
| PGx | Lemonde_2004 | not_relevant | 0 | 0 | The paper reports an association between a 5-HT1A polymorphism and clinical antidepressant response, not a pharmacokinetic or pharmacodynamic parameter of pindolol. |
| popPK | Lima_1996 | irrelevant | 0 | 0 | no_text gate: only 145 chars of text extracted (&lt; 400) |
| PD | Lima_1996 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| popPK | Louis_1982 | irrelevant | 0 | 0 | The study is a pharmacological investigation of anticonvulsant effects in rats and does not report pharmacokinetic parameters (CL, V, ka, etc.) for pindolol. |
| PD | Marona-Lewicka_1994 | not_relevant | 0 | 0 | The paper studies the behavioral effects of MMAI; pindolol is only mentioned as an antagonist that failed to inhibit MMAI's effects, with no PD or exposure-response analysis for pindolol. |
| PD | McTavish_1993_2 | not_relevant | 1 | 0 | The text is a qualitative review of carvedilol that mentions pindolol only as a comparator drug in clinical trials, without providing any specific pharmacodynamic data, exposure-response curves, or numeric PD parameters for pindolol. |
| popPK | Mian_1985 | irrelevant | 0 | 0 | The paper describes in-vitro pharmacodynamics and receptor binding (pD2 values) rather than pharmacokinetic disposition parameters. |
| PD | Mian_1985 | not_relevant | 0 | 0 | The provided text is only a title and contains no data, numeric parameters, or analysis of a pharmacodynamic or exposure-response relationship. |
| PD | Milne_1991 | not_relevant | 1 | 0 | The text is a qualitative review of celiprolol that mentions pindolol only for comparative efficacy, without providing any numeric PD parameters or exposure-response data. |
| popPK | Nakane_1990 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of beta-adrenergic receptor density using pindolol as a radioligand, not a pharmacokinetic study of pindolol disposition. |
| PD | Nakane_1990 | not_relevant | 0 | 0 | Pindolol is used only as a radioligand for receptor binding assays; the reported EC50 values are for IL-1, TNF-alpha, and cortisol, not for pindolol. |
| popPK | Newman-Tancredi_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of G protein activation by 5-HT(1A) receptor ligands and does not report any pharmacokinetic parameters for pindolol. |
| PD | Newman-Tancredi_2003 | not_relevant | 1 | 1 | The paper reports a single efficacy value (Emax=7) for pindolol in a binding assay but does not provide a concentration-response curve, EC50, or any PK/PD modeling data. |
| popPK | Ohnhaus_1976 | relevant | 9 | 0 | The study is a pharmacokinetic investigation of pindolol in humans, but the specific numeric parameter values are not present in the provided text. |
| PD | Olver_2000_2 | not_relevant | 1 | 0 | The paper is a narrative review of clinical trials and pre-clinical rationale; it does not report specific numeric PD parameters (e.g., Emax, EC50) or concentration-effect curves for pindolol. |
| popPK | Ozawa_1989 | irrelevant | 0 | 0 | no_text gate: only 105 chars of text extracted (&lt; 400) |
| PD | Ozawa_1989 | not_relevant | 0 | 0 | The paper focuses on age-related changes in adenylate cyclase in rat cerebral cortex and does not report pharmacodynamic or exposure-response data for pindolol. |
| PGx | PMID38951961_2024 | not_relevant | 0 | 0 | The paper is a guideline for beta-blockers that explicitly states there is insufficient evidence to make therapeutic recommendations for CYP2D6 and pindolol, and does not report specific pharmacogenomic effects on pindolol PK/PD parameters. |
| PD | Pranzatelli_1993 | not_relevant | 0 | 0 | The paper reports that pindolol had no significant effects on 5-HT1C receptor binding and does not provide any numeric PD parameters or exposure-response data for pindolol. |
| popPK | Puhl_2022 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of pindolol as a potential SARS-CoV-2 inhibitor, reporting binding affinity (Kd) and docking scores, but contains no pharmacokinetic parameters (CL, V, ka, etc.). |
| PD | Puhl_2022 | not_relevant | 0 | 0 | The paper reports PD parameters (Kd, EC50) for carvedilol, not pindolol, and only provides a docking score for pindolol without experimental concentration-effect data. |
| popPK | Rick_1995 | irrelevant | 0 | 0 | no_text gate: only 164 chars of text extracted (&lt; 400) |
| PD | Rick_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacology of 5-hydroxytryptamine (5-HT) on rat neurons and does not mention pindolol or report any exposure-response or dose-response data for it. |
| popPK | Sarsero_2003 | irrelevant | 0 | 0 | The paper is a pharmacodynamic study on beta-adrenoceptor function in human myocardium, not a pharmacokinetic study, and pindolol is only mentioned as a reference partial agonist. |
| popPK | Schoeffter_1988 | irrelevant | 0 | 0 | no_text gate: only 150 chars of text extracted (&lt; 400) |
| PD | Schoeffter_1988 | not_relevant | 0 | 0 | The paper investigates the mechanism of action of centrally acting hypotensive agents on adenylate cyclase in calf hippocampus and does not report pharmacokinetic or pharmacodynamic exposure-response data for pindolol. |
| popPK | Schwarz_1982 | relevant | 9 | 2 | The paper is a primary PK study for pindolol reporting a compartmental model, but specific numeric values for clearance, volume, or rate constants are not present in the provided text, only qualitative descriptions and half-lives of radioactivity. |
| popPK | Scott_1994 | irrelevant | 0 | 0 | The study is a pharmacological investigation of 5-HT1A receptor agonists in rats where pindolol is used only as a non-selective antagonist to confirm receptor mediation, with no pharmacokinetic parameters reported. |
| PGx | Segrave_2005 | not_relevant | 0 | 0 | The paper is a review of clinical trials regarding the efficacy of pindolol augmentation in depression and does not report specific pharmacogenomic effects on PK or PD parameters. |
| popPK | Shimizu_1996 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on 5-HT7 receptors in astrocytes where pindolol is used only as a pharmacological probe, not a subject of PK analysis. |
| PD | Shimizu_1996 | not_relevant | 0 | 0 | The paper reports that pindolol did not inhibit the response, providing no numeric PD parameters or concentration-effect relationship for pindolol. |
| popPK | Sidorova_2022 | irrelevant | 0 | 0 | The paper is an in-vitro study on the anticancer activity of beta-blockers in cell lines and does not report any pharmacokinetic parameters for pindolol. |
| PGx | Smeraldi_1998 | not_relevant | 0 | 0 | The paper reports a pharmacogenomic effect on the clinical response (HDRS scores) to fluvoxamine, not on the pharmacokinetic or pharmacodynamic parameters of pindolol. |
| PD | Stupack_1999 | not_relevant | 0 | 0 | The paper investigates the effect of beta-blockers on amantadine uptake in rat renal tubules and does not report pharmacodynamic or exposure-response parameters for pindolol. |
| popPK | Sánchez_1995 | irrelevant | 0 | 0 | The paper is a behavioral pharmacology study in mice where pindolol is used as a probe drug to test serotonergic mechanisms, and it does not report any pharmacokinetic parameters. |
| PD | Ujhelyi_1996 | not_relevant | 2 | 1 | The paper reports a qualitative reduction in beta-blocking activity due to increased clearance but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect curve. |
| popPK | Unsworth_1992 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Unsworth_1992 | not_relevant | 0 | 0 | The paper focuses on 5-HT1B receptor regulation in opossum kidney cells and does not mention pindolol or report any pharmacodynamic parameters for it. |
| popPK | Van_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of receptor mechanisms in mouse trachea where pindolol is used as a tool compound, not a PK study. |
| PD | Van_1991 | not_relevant | 0 | 0 | The paper reports PD parameters (EC50, Emax) for serotonin (5-HT), not for pindolol; pindolol is used only as a qualitative antagonist to characterize the receptor subtype. |
| PD | Van_1998 | not_relevant | 3 | 2 | The paper reports a qualitative dose-response shift for alnespirone caused by pindolol pretreatment, but does not provide numeric PD parameters (e.g., EC50, Emax) or a quantitative concentration-effect curve for pindolol itself. |
| popPK | Visser_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of the radioligand S-[18F]fluorocarazolol, using pindolol only as a competitive blocker/comparator to validate receptor binding, not as the subject drug for PK parameter estimation. |
| popPK | Wagner_1983 | irrelevant | 2 | 0 | The paper is a methodological study validating the Wagner-Nelson method, and while it mentions pindolol, it only reports the accuracy of the estimated infusion rate constant (98.7% of known) rather than standard disposition parameters like clearance or volume. |
| PGx | Weizman_2000 | not_relevant | 0 | 0 | The paper discusses the effect of 5-HTTLPR polymorphism on response to SSRIs, not on the pharmacokinetics or pharmacodynamics of pindolol. |
| popPK | Wesslau_1992 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of beta-adrenergic signaling in rat adipocytes and does not report any pharmacokinetic parameters for pindolol. |
| PD | Wesslau_1992 | not_relevant | 3 | 2 | The paper reports an EC50 for pindolol in the context of a mechanistic study on Gi proteins and cAMP priming, but it is a qualitative/semi-quantitative mention within a broader physiological analysis rather than a dedicated PD or exposure-response modeling study. |
| popPK | Williamson_1989 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adrenoceptor mechanisms in rat atria, not a pharmacokinetic study, and reports no disposition parameters for pindolol. |
| PD | Yue_1995 | not_relevant | 0 | 0 | The paper reports that pindolol had weak or no consistent effects, providing no numeric PD parameters or extractable dose-response relationship for pindolol. |
| popPK | Yukawa_1990 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding and functional assay using pindolol as a radioligand, not a pharmacokinetic study reporting disposition parameters. |
| PD | Yukawa_1990 | not_relevant | 0 | 0 | The paper focuses on beta-2 adrenergic receptor binding and functional studies on eosinophils and does not report pharmacodynamic or exposure-response relationships for pindolol. |
| popPK | Zhu_1996 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of smooth muscle contractile responses in diabetic rats, not a pharmacokinetic study, and reports no disposition parameters for pindolol. |
| popPK | de_2000 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study on beta-adrenergic receptor activity in bovine tracheal smooth muscle and does not report pharmacokinetic parameters for pindolol. |
| PD | de_2000 | not_relevant | 1 | 0 | The paper investigates constitutive receptor activity and inverse agonism in bovine tracheal smooth muscle; while pindolol is mentioned in a qualitative rank order of efficacy, no numeric PD parameters (EC50, Emax, etc.) or exposure-response curves for pindolol are reported. |
| PGx | Ågesen_2019_2 | not_relevant | 0 | 0 | The paper reviews general pharmacokinetic variability of beta-blockers and mentions pindolol only in the context of low-to-moderate variability, without reporting any specific gene variant or genotype effects. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
