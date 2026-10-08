<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01B&quot;,&quot;href&quot;:&quot;atc/C01B.md&quot;},{&quot;label&quot;:&quot;cibenzoline&quot;}]"></div>

# cibenzoline

- **generic name:** cibenzoline
- **ATC codes:** `C01BG07`
- **DrugBank:** [DB13358](https://go.drugbank.com/drugs/DB13358) · **PubChem:** not captured
- **molar mass:** 262.356 g/mol (C18H18N2) — DrugBank
- **groups:** investigational

## About

Cibenzoline (cifenline) is an antiarrhythmic agent of class I, developed for treating cardiac rhythm disorders. It is not an approved medicine today; it has investigational status and is not authorised in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q867171](https://www.wikidata.org/wiki/Q867171) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cibenzoline | parent | 262.356 | C18H18N2 | DrugBank | — | Brazzell_1985 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-08 17:04 | 18:20 | 0/1/0 | 11/0/0 | 0/0/0 | 331,718/38,627 | ollama / qwen3.8:27b-mtp-q8_0 | 15 | 17/1 | 6/9 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.267). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Brazzell_1985_reference](drugs/drug_cibenzoline/Cibenzoline_Brazzell1985_reference.md) | — | 1-compartment (no model) | 7 | Brazzell RK et al., Pharmacokinetics and pharmacodynamics o…, Journal of clinical pharmac… (1985) | [10.1002/j.1552-4604.1985.tb02869.x](https://doi.org/10.1002/j.1552-4604.1985.tb02869.x) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Brazzell_1984_PVC](drugs/drug_cibenzoline/pd_Brazzell_1984_PVC.md) | premature ventricular complex (PVC) frequency ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Brazzell RK et al., Cibenzoline plasma concentration and an…, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.35](https://doi.org/10.1038/clpt.1984.35) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Brazzell_1984_VC](drugs/drug_cibenzoline/pd_Brazzell_1984_VC.md) | ventricular couplet (VC) frequency ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Brazzell RK et al., Cibenzoline plasma concentration and an…, Clinical pharmacology and t… (1984) | [10.1038/clpt.1984.35](https://doi.org/10.1038/clpt.1984.35) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hiramatsu_2004_Ikr](drugs/drug_cibenzoline/pd_Hiramatsu_2004_Ikr.md) | HERG current ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Hiramatsu M et al., Block of HERG current expressed in HEK2…, Heart and vessels (2004) | [10.1007/s00380-003-0750-8](https://doi.org/10.1007/s00380-003-0750-8) |
| <span class="pk-badge pk-badge--green">extracted</span> | [Holazo_1986_PVCs_hr_or_VCs_hr](drugs/drug_cibenzoline/pd_Holazo_1986_PVCs_hr_or_VCs_hr.md) | premature ventricular contractions (PVCs) per hour or ventricular contractions (VCs) per hour ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Holazo AA et al., Pharmacokinetic and pharmacodynamic mod…, Journal of clinical pharmac… (1986) | [10.1002/j.1552-4604.1986.tb03535.x](https://doi.org/10.1002/j.1552-4604.1986.tb03535.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Holck_1986_ICa](drugs/drug_cibenzoline/pd_Holck_1986_ICa.md) | Ca2+ current ← cibenzoline · direct Emax (saturable) effect | — | Holck M et al., Inhibition of the myocardial Ca2+ inwar…, British journal of pharmaco… (1986) | [10.1111/j.1476-5381.1986.tb14588.x](https://doi.org/10.1111/j.1476-5381.1986.tb14588.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Holck_1986_KCl_induced_contractures](drugs/drug_cibenzoline/pd_Holck_1986_KCl_induced_contractures.md) | KCl-induced contractures ← cibenzoline · direct Emax (saturable) effect | — | Holck M et al., Inhibition of the myocardial Ca2+ inwar…, British journal of pharmaco… (1986) | [10.1111/j.1476-5381.1986.tb14588.x](https://doi.org/10.1111/j.1476-5381.1986.tb14588.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Holck_1986_contractile_force_development](drugs/drug_cibenzoline/pd_Holck_1986_contractile_force_development.md) | contractile force development ← cibenzoline · direct Emax (saturable) effect | — | Holck M et al., Inhibition of the myocardial Ca2+ inwar…, British journal of pharmaco… (1986) | [10.1111/j.1476-5381.1986.tb14588.x](https://doi.org/10.1111/j.1476-5381.1986.tb14588.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM popPK screen).">rat</span> | [Horie_1992_NP_NPc](drugs/drug_cibenzoline/pd_Horie_1992_NP_NPc.md) | cardiac KATP channel activities ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Horie M et al., Comparative studies of ATP sensitive po…, Cardiovascular research (1992) | [10.1093/cvr/26.11.1087](https://doi.org/10.1093/cvr/26.11.1087) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM popPK screen).">rat</span> | [Horie_1992_NP_NPc_2](drugs/drug_cibenzoline/pd_Horie_1992_NP_NPc_2.md) | cardiac KATP channel activities ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Horie M et al., Comparative studies of ATP sensitive po…, Cardiovascular research (1992) | [10.1093/cvr/26.11.1087](https://doi.org/10.1093/cvr/26.11.1087) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM popPK screen).">rat</span> | [Horie_1992_NP_NPc_3](drugs/drug_cibenzoline/pd_Horie_1992_NP_NPc_3.md) | pancreatic KATP channel activities ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Horie M et al., Comparative studies of ATP sensitive po…, Cardiovascular research (1992) | [10.1093/cvr/26.11.1087](https://doi.org/10.1093/cvr/26.11.1087) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Ishida-Takahashi_1996_IRI](drugs/drug_cibenzoline/pd_Ishida_Takahashi_1996_IRI.md) | insulin secretory activity ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Ishida-Takahashi A et al., Block of pancreatic ATP-sensitive K+ ch…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15349.x](https://doi.org/10.1111/j.1476-5381.1996.tb15349.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">rat</span> | [Ishida-Takahashi_1996_NPo_NPo](drugs/drug_cibenzoline/pd_Ishida_Takahashi_1996_NPo_NPo.md) | KATP channel activity ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Ishida-Takahashi A et al., Block of pancreatic ATP-sensitive K+ ch…, British journal of pharmaco… (1996) | [10.1111/j.1476-5381.1996.tb15349.x](https://doi.org/10.1111/j.1476-5381.1996.tb15349.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM popPK screen).">pig</span> | [Matsuoka_1991_Fc](drugs/drug_cibenzoline/pd_Matsuoka_1991_Fc.md) | contractile force ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Matsuoka S et al., Comparison of Ca2+ channel inhibitory e…, General pharmacology (1991) | [10.1016/0306-3623(91)90314-v](https://doi.org/10.1016/0306-3623(91)90314-v) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from the LLM popPK screen).">pig</span> | [Matsuoka_1991_Ica](drugs/drug_cibenzoline/pd_Matsuoka_1991_Ica.md) | Ica ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Matsuoka S et al., Comparison of Ca2+ channel inhibitory e…, General pharmacology (1991) | [10.1016/0306-3623(91)90314-v](https://doi.org/10.1016/0306-3623(91)90314-v) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sakuta_1993_KRN2391_induced_K_current](drugs/drug_cibenzoline/pd_Sakuta_1993_KRN2391_induced_K_current.md) | KRN2391-induced K+ current ← (±)-cibenzoline · direct Emax (saturable) effect | — | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Sakuta_1993_Y_26763_induced_K_current](drugs/drug_cibenzoline/pd_Sakuta_1993_Y_26763_induced_K_current.md) | Y-26763-induced K+ current ← (±)-cibenzoline · direct Emax (saturable) effect | — | Sakuta H et al., Antiarrhythmic drugs, clofilium and cib…, British journal of pharmaco… (1993) | [10.1111/j.1476-5381.1993.tb13655.x](https://doi.org/10.1111/j.1476-5381.1993.tb13655.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Takahashi_2011_C_ins](drugs/drug_cibenzoline/pd_Takahashi_2011_C_ins.md) | serum insulin concentration ← cibenzoline · indirect response — drug stimulates the production of serum insulin concentration | — | Takahashi Y et al., Pharmacodynamics of cibenzoline-induced…, Drug metabolism and pharmac… (2011) | [10.2133/dmpk.DMPK-10-RG-127](https://doi.org/10.2133/dmpk.DMPK-10-RG-127) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | [Tamura_2009_I_f](drugs/drug_cibenzoline/pd_Tamura_2009_I_f.md) | HCN4 channel current ← cibenzoline · direct Emax (saturable) effect | — | Tamura A et al., Effects of antiarrhythmic drugs on the…, Journal of pharmacological… (2009) | [10.1254/jphs.08312fp](https://doi.org/10.1254/jphs.08312fp) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span> | [Yamakawa_2012_I_NCX](drugs/drug_cibenzoline/pd_Yamakawa_2012_I_NCX.md) | outward I NCX ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Yamakawa T et al., Inhibitory effect of cibenzoline on Na+…, Journal of pharmacological… (2012) | [10.1254/jphs.12050sc](https://doi.org/10.1254/jphs.12050sc) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (pig), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">pig</span> | [Yamakawa_2012_I_NCX_2](drugs/drug_cibenzoline/pd_Yamakawa_2012_I_NCX_2.md) | inward I NCX ← cibenzoline · direct sigmoid Emax (Hill) effect | — | Yamakawa T et al., Inhibitory effect of cibenzoline on Na+…, Journal of pharmacological… (2012) | [10.1254/jphs.12050sc](https://doi.org/10.1254/jphs.12050sc) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 41 matched, 40 returned
- **screened:** 8  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Nawada_1994.pdf` | Nawada T et al., Evaluation of negative inotropic and an…, International journal of cl… (1994) | pd | 4 | not captured | [7952796](https://www.ncbi.nlm.nih.gov/pubmed/7952796) | metadata signals extractable PD data (IC50) |
| `Yamamoto_1999.pdf` | Yamamoto N et al., A comparison of the binding characteris…, Journal of cardiovascular p… (1999) | pd | 4 | [10.1097/00005344-199907000-00009](https://doi.org/10.1097/00005344-199907000-00009) | [10413067](https://www.ncbi.nlm.nih.gov/pubmed/10413067) | metadata signals extractable PD data (IC50) |
| `Niwa_2000.pdf` | Niwa T et al., Stereoselective metabolism of cibenzoli…, Drug metabolism and disposi… (2000) | pgx | 7 | not captured | [10950860](https://www.ncbi.nlm.nih.gov/pubmed/10950860) | metadata signals extractable PGX data (CYP2D, PK/PD-context) |

<sub>queue written 2026-10-08T16:54:34.413898+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Aronoff_1991 | not_relevant | 0 | 0 | The study investigates the effect of renal failure (a physiological condition) on cibenzoline pharmacokinetics, not the effect of a gene variant or genotype. |
| popPK | Brazzell_1984 | irrelevant | 0 | 0 | no_text gate: only 58 chars of text extracted (&lt; 400) |
| popPK | Galimberti_2011 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic assay measuring efficacy and potency (IC50) of cibenzoline on calcium waves, not a pharmacokinetic study reporting disposition parameters. |
| PD | Galimberti_2011 | not_relevant | 0 | 0 | The paper reports that cibenzoline had no significant effect on Ca2+ waves at the highest tested concentration (100 μM), providing no numeric PD parameters (such as IC50 or Emax) or derivable dose-response curve for this specific drug. |
| popPK | Hasannejad_2004 | irrelevant | 0 | 0 | no_text gate: only 81 chars of text extracted (&lt; 400) |
| PD | Hasannejad_2004 | not_relevant | 3 | 2 | The paper reports in vitro transporter kinetics (Km, IC50) for drug uptake/inhibition, which is a pharmacokinetic/transport mechanism study, not a pharmacodynamic (exposure-response or dose-response) analysis of drug effect. |
| popPK | Heusner_1985 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug-drug interactions where cibenzoline is a comparator inhibitor, not the subject of a pharmacokinetic parameter analysis. |
| PD | Heusner_1985 | not_relevant | 3 | 2 | The paper reports an IC50 &gt; 1 mM for cibenzoline in an in vitro metabolic inhibition assay, which is a pharmacokinetic interaction parameter, not a pharmacodynamic exposure-response relationship for cibenzoline itself. |
| popPK | Hiiro_2023 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of negative inotropic effects in guinea pig tissue and does not report pharmacokinetic parameters for cibenzoline. |
| popPK | Hiramatsu_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology experiment measuring channel block (IC50) in HEK293 cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Holazo_1986 | relevant | 9 | 0 | The paper describes a PK/PD modeling study of cibenzoline in humans, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Holck_1986 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological and contractility investigation reporting IC50 values for calcium current inhibition, not pharmacokinetic disposition parameters. |
| popPK | Horie_1992 | irrelevant | 0 | 0 | no_text gate: only 138 chars of text extracted (&lt; 400) |
| popPK | Ishida-Takahashi_1996 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cibenzoline's effect on KATP channels and insulin secretion in rat pancreatic islets, reporting no pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Kakumoto_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of MDR1 transport inhibition by various drugs, and cibenzoline is only a comparator agent with no pharmacokinetic parameters reported. |
| PD | Kakumoto_2002 | not_relevant | 0 | 0 | The paper reports IC50 values for amiodarone, DEA, quinidine, and dipyridamole, but cibenzoline is only tested qualitatively or without reported numeric PD parameters. |
| popPK | Komatsu_2015 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for digoxin, not cibenzoline. |
| PD | Komatsu_2015 | not_relevant | 0 | 0 | The paper focuses on the population pharmacokinetics of digoxin, not cibenzoline, and does not report any pharmacodynamic or exposure-response parameters. |
| popPK | Matsuoka_1991 | irrelevant | 0 | 0 | no_text gate: only 95 chars of text extracted (&lt; 400) |
| popPK | Miyamoto_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic investigation of antiarrhythmic effects in dogs and does not report any pharmacokinetic parameters for cibenzoline. |
| PD | Miyamoto_2000 | not_relevant | 3 | 2 | The paper reports qualitative changes in arrhythmic ratio and QTc for cibenzoline but does not provide numeric dose-response parameters (e.g., ED50, Emax) or a quantitative concentration-effect curve for the drug itself. |
| popPK | Nawada_1994 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |
| PD | Nawada_1994 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric parameters required to evaluate PD relationships. |
| PGx | Niwa_2000 | not_relevant | 0 | 0 | The paper investigates stereoselective metabolism and enzyme involvement (CYP2D6/3A4) in vitro but does not report pharmacogenomic effects of specific gene variants on PK/PD parameters. |
| popPK | Plosker_2010 | irrelevant | 0 | 0 | The paper is a review of pilsicainide where cibenzoline is only mentioned as a comparator in a clinical trial, with no pharmacokinetic parameters reported. |
| PD | Plosker_2010 | not_relevant | 1 | 0 | The text is a qualitative review of clinical efficacy and safety for pilsicainide and cibenzoline, containing no numeric PD parameters, concentration-effect data, or dose-response curves. |
| popPK | Rydberg_1997 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics and pharmacodynamics of glibenclamide and its metabolites, not cibenzoline. |
| PD | Rydberg_1997 | not_relevant | 0 | 0 | The paper reports PD parameters for glibenclamide and its metabolites, not for cibenzoline. |
| popPK | Sakuta_1993 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of K+ channel blockade in Xenopus oocytes, reporting IC50 values rather than pharmacokinetic disposition parameters. |
| popPK | Sakuta_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel inhibition in Xenopus oocytes and does not report pharmacokinetic parameters for cibenzoline. |
| popPK | Satoh_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of ionic currents in rat cells, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Tabuchi_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study investigating cibenzoline's inhibition of gastric H+,K+-ATPase, reporting IC50 and Ki values rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Takahashi_2011 | relevant | 9 | 0 | The study describes a two-compartment PK model with Michaelis-Menten elimination for cibenzoline in rats, but no specific numeric parameter values (CL, V, etc.) are provided in the evidence. |
| popPK | Tamura_2009 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of ion channel effects, not a pharmacokinetic study, and reports no disposition parameters for cibenzoline. |
| popPK | Wu_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of electrophysiological effects in guinea pig atrial myocytes and does not report pharmacokinetic parameters. |
| popPK | Yamakawa_2012 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of cibenzoline's effect on NCX currents in isolated myocytes, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Yamamoto_1999 | irrelevant | 0 | 0 | no_text gate: only 113 chars of text extracted (&lt; 400) |
| PD | Yamamoto_1999 | not_relevant | 0 | 0 | The paper focuses on in vitro receptor binding characteristics (Ki, Bmax) of class I antiarrhythmics, not in vivo pharmacodynamic exposure-response or dose-response relationships. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-08 16:46 UTC</sub>
