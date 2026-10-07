<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;nefazodone&quot;}]"></div>

# nefazodone

- **generic name:** nefazodone
- **ATC codes:** `N06AX06`
- **DrugBank:** [DB01149](https://go.drugbank.com/drugs/DB01149) · **PubChem:** [CID 4449](https://pubchem.ncbi.nlm.nih.gov/compound/4449)
- **molar mass:** 470.007 g/mol (C25H32ClN5O2) — DrugBank
- **groups:** approved, withdrawn

## About

Nefazodone is an antidepressant that was used to treat depression and has also been studied for conditions such as post-traumatic stress disorder and neurotic disorders. It has been withdrawn from the market, mainly because of rare but serious liver injury, and is no longer widely available.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q416632](https://www.wikidata.org/wiki/Q416632) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 23:44 | 1:01 | 0/0/0 | 1/2/0 | 0/0/0 | 57,392/4,153 | ollama / glm-5.3-flash | 5 | 5/1 | 2/3 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Shin_2014_hERG_inhibition](drugs/drug_nefazodone/pd_Shin_2014_hERG_inhibition.md) | hERG channel activity inhibition ← nefazodone · inhibition effect | — | Shin DS et al., A novel assessment of nefazodone-induce…, Toxicology and applied phar… (2014) | [10.1016/j.taap.2013.12.012](https://doi.org/10.1016/j.taap.2013.12.012) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kostrubsky_2006_BSEP](drugs/drug_nefazodone/pd_Kostrubsky_2006_BSEP.md) | Bile salt export pump (BSEP) transport inhibition ← nefazodone · direct Emax (saturable) effect | — | Kostrubsky SE et al., Inhibition of hepatobiliary transport a…, Toxicological sciences : an… (2006) | [10.1093/toxsci/kfj095](https://doi.org/10.1093/toxsci/kfj095) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kostrubsky_2006_protein_synthesis_24_h](drugs/drug_nefazodone/pd_Kostrubsky_2006_protein_synthesis_24_h.md) | Protein synthesis inhibition in human hepatocytes (24 h incubation) ← nefazodone · direct Emax (saturable) effect | — | Kostrubsky SE et al., Inhibition of hepatobiliary transport a…, Toxicological sciences : an… (2006) | [10.1093/toxsci/kfj095](https://doi.org/10.1093/toxsci/kfj095) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kostrubsky_2006_protein_synthesis_6_h](drugs/drug_nefazodone/pd_Kostrubsky_2006_protein_synthesis_6_h.md) | Protein synthesis inhibition in human hepatocytes (6 h incubation) ← nefazodone · direct Emax (saturable) effect | — | Kostrubsky SE et al., Inhibition of hepatobiliary transport a…, Toxicological sciences : an… (2006) | [10.1093/toxsci/kfj095](https://doi.org/10.1093/toxsci/kfj095) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Kostrubsky_2006_taurocholate_efflux](drugs/drug_nefazodone/pd_Kostrubsky_2006_taurocholate_efflux.md) | Taurocholate efflux in human sandwich hepatocytes ← nefazodone · direct Emax (saturable) effect | — | Kostrubsky SE et al., Inhibition of hepatobiliary transport a…, Toxicological sciences : an… (2006) | [10.1093/toxsci/kfj095](https://doi.org/10.1093/toxsci/kfj095) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Störmer_2001_Rh123_B_to_A_transport](drugs/drug_nefazodone/pd_St_rmer_2001_Rh123_B_to_A_transport.md) | Rhodamine123 basolateral to apical transport across Caco-2 cell monolayers (inhibition by nefazodone) ← nefazodone · inhibition effect | — | Störmer E et al., P-glycoprotein interactions of nefazodo…, Journal of clinical pharmac… (2001) | [10.1177/00912700122010609](https://doi.org/10.1177/00912700122010609) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nefazodone) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inducer/inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inducer/inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inducer/inhibitor, `SLCO2B1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inducer/inhibitor | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor/substrate | DrugBank actor |
| metabolism | liver | `CYP2D6` inhibitor/substrate, `CYP3A4` inhibitor/substrate, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | liver | `ABCB11` substrate | DrugBank actor |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | prose |
| — | brain | `SLC6A4` inhibitor | DrugBank actor |
| — | platelet | `SLC6A4` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: ADRA1A (target), ADRA1B (other/unknown), ADRA2A (target), CYP2B (inhibitor), HTR1A (target), HTR2A (target), HTR2C (target), KCNH2 (target), SLC6A2 (inhibitor), SLC6A3 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 142 matched, 96 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_24 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Störmer_2001.pdf` | Störmer E et al., P-glycoprotein interactions of nefazodo…, Journal of clinical pharmac… (2001) | pd | 5 | [10.1177/00912700122010609](https://doi.org/10.1177/00912700122010609) | [11452702](https://www.ncbi.nlm.nih.gov/pubmed/11452702) | metadata signals extractable PD data (IC50) |
| `Caccia_1998.pdf` | Caccia S, Metabolism of the newer antidepressants…, Clinical pharmacokinetics (1998) | pgx | 8 | [10.2165/00003088-199834040-00002](https://doi.org/10.2165/00003088-199834040-00002) | [9571301](https://www.ncbi.nlm.nih.gov/pubmed/9571301) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Findling_2000.pdf` | Findling RL et al., Nefazodone pharmacokinetics in depresse…, Journal of the American Aca… (2000) | pgx | 8 | [10.1097/00004583-200008000-00016](https://doi.org/10.1097/00004583-200008000-00016) | [10939229](https://www.ncbi.nlm.nih.gov/pubmed/10939229) | metadata signals extractable PGX data (CYP2D6, PK/PD-context) |
| `Kudo_1999.pdf` | Kudo S et al., Pharmacokinetics of haloperidol: an upd…, Clinical pharmacokinetics (1999) | pgx | 8 | [10.2165/00003088-199937060-00001](https://doi.org/10.2165/00003088-199937060-00001) | [10628896](https://www.ncbi.nlm.nih.gov/pubmed/10628896) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Alderman_2001.pdf` | Alderman CP et al., Possible interaction of zopiclone and n…, The Annals of pharmacothera… (2001) | pgx | 7 | [10.1345/aph.1A074](https://doi.org/10.1345/aph.1A074) | [11724087](https://www.ncbi.nlm.nih.gov/pubmed/11724087) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Costa_2025.pdf` | Costa Alegre MD et al., Metabolism of m-CPP, trazodone, nefazod…, Drug metabolism reviews (2025) | pgx | 7 | [10.1080/03602532.2025.2465482](https://doi.org/10.1080/03602532.2025.2465482) | [39945551](https://www.ncbi.nlm.nih.gov/pubmed/39945551) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Daniel_2006.pdf` | Daniel WA et al., Direct and indirect interactions betwee…, European neuropsychopharmac… (2006) | pgx | 7 | [10.1016/j.euroneuro.2006.01.004](https://doi.org/10.1016/j.euroneuro.2006.01.004) | [16503401](https://www.ncbi.nlm.nih.gov/pubmed/16503401) | metadata signals extractable PGX data (CYP2C6, PK/PD-context) |
| `DeVane_2004.pdf` | DeVane CL et al., Comparative CYP3A4 inhibitory effects o…, Journal of clinical psychop… (2004) | pgx | 7 | [10.1097/01.jcp.0000104908.75206.26](https://doi.org/10.1097/01.jcp.0000104908.75206.26) | [14709940](https://www.ncbi.nlm.nih.gov/pubmed/14709940) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Dresser_2000.pdf` | Dresser GK et al., Pharmacokinetic-pharmacodynamic consequ…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200038010-00003](https://doi.org/10.2165/00003088-200038010-00003) | [10668858](https://www.ncbi.nlm.nih.gov/pubmed/10668858) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Gallelli_2017.pdf` | Gallelli L et al., Drug-Drug Interactions in Cocaine-users…, Current drug abuse reviews (2017) | pgx | 7 | [10.2174/1874473710666170920143344](https://doi.org/10.2174/1874473710666170920143344) | [29185916](https://www.ncbi.nlm.nih.gov/pubmed/29185916) | metadata signals extractable PGX data (CYP450, PK/PD-context) |
| `Greene_1997.pdf` | Greene DS et al., Clinical pharmacokinetics of nefazodone, Clinical pharmacokinetics (1997) | pgx | 7 | [10.2165/00003088-199733040-00002](https://doi.org/10.2165/00003088-199733040-00002) | [9342502](https://www.ncbi.nlm.nih.gov/pubmed/9342502) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Hasselstrøm_2006.pdf` | Hasselstrøm J et al., In vitro studies on quetiapine metaboli…, Drug metabolism and drug in… (2006) | pgx | 7 | [10.1515/dmdi.2006.21.3-4.187](https://doi.org/10.1515/dmdi.2006.21.3-4.187) | [16841513](https://www.ncbi.nlm.nih.gov/pubmed/16841513) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kalgutkar_2003.pdf` | Kalgutkar AS et al., Assessment of the contributions of CYP3…, Drug metabolism and disposi… (2003) | pgx | 7 | [10.1124/dmd.31.3.243](https://doi.org/10.1124/dmd.31.3.243) | [12584149](https://www.ncbi.nlm.nih.gov/pubmed/12584149) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kotlyar_2003.pdf` | Kotlyar M et al., Nefazodone inhibits methylprednisolone…, Journal of clinical psychop… (2003) | pgx | 7 | [10.1097/01.jcp.0000095343.32154.1d](https://doi.org/10.1097/01.jcp.0000095343.32154.1d) | [14624194](https://www.ncbi.nlm.nih.gov/pubmed/14624194) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Lam_2003.pdf` | Lam YW et al., Pharmacokinetic and pharmacodynamic int…, Journal of clinical pharmac… (2003) | pgx | 7 | [10.1177/0091270003259216](https://doi.org/10.1177/0091270003259216) | [14551182](https://www.ncbi.nlm.nih.gov/pubmed/14551182) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Michalets_2000.pdf` | Michalets EL et al., Drug interactions with cisapride: clini…, Clinical pharmacokinetics (2000) | pgx | 7 | [10.2165/00003088-200039010-00004](https://doi.org/10.2165/00003088-200039010-00004) | [10926350](https://www.ncbi.nlm.nih.gov/pubmed/10926350) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Richelson_1997.pdf` | Richelson E, Pharmacokinetic drug interactions of ne…, Mayo Clinic proceedings (1997) | pgx | 7 | [10.4065/72.9.835](https://doi.org/10.4065/72.9.835) | [9294531](https://www.ncbi.nlm.nih.gov/pubmed/9294531) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Richelson_1998.pdf` | Richelson E, Pharmacokinetic interactions of antidep…, The Journal of clinical psy… (1998) | pgx | 7 | not captured | [9720479](https://www.ncbi.nlm.nih.gov/pubmed/9720479) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Taylor_1999.pdf` | Taylor D et al., The effect of nefazodone on clozapine p…, International clinical psyc… (1999) | pgx | 7 | not captured | [10435773](https://www.ncbi.nlm.nih.gov/pubmed/10435773) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ucar_2000.pdf` | Ucar M et al., HMG-CoA reductase inhibitors and myotox…, Drug safety (2000) | pgx | 7 | [10.2165/00002018-200022060-00003](https://doi.org/10.2165/00002018-200022060-00003) | [10877038](https://www.ncbi.nlm.nih.gov/pubmed/10877038) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wójcikowski_2013.pdf` | Wójcikowski J et al., Effect of antidepressant drugs on cytoc…, Pharmacological reports : PR (2013) | pgx | 7 | [10.1016/s1734-1140(13)71482-8](https://doi.org/10.1016/s1734-1140(13)71482-8) | [24399720](https://www.ncbi.nlm.nih.gov/pubmed/24399720) | metadata signals extractable PGX data (CYP2C11, PK/PD-context) |
| `Mazzarino_2018.pdf` | Mazzarino M et al., A further insight into the metabolic pr…, Drug testing and analysis (2018) | pgx | 5 | [10.1002/dta.2538](https://doi.org/10.1002/dta.2538) | [30395700](https://www.ncbi.nlm.nih.gov/pubmed/30395700) | metadata signals extractable PGX data (CYP3A4) |
| `Pollock_1996.pdf` | Pollock BG et al., Bupropion plasma levels and CYP2D6 phen…, Therapeutic drug monitoring (1996) | pgx | 5 | [10.1097/00007691-199610000-00010](https://doi.org/10.1097/00007691-199610000-00010) | [8885123](https://www.ncbi.nlm.nih.gov/pubmed/8885123) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-10-06T23:43:04.282272+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_2001 | irrelevant | 2 | 0 | Nefazodone is a co-administered inhibitor used to study the PK/PD of terfenadine and loratadine, not the subject drug for PK parameter extraction. |
| PGx | Alderman_2001 | not_relevant | 0 | 0 | Reports a drug-drug interaction (nefazodone–zopiclone) via CYP3A4 inhibition, not a pharmacogenomic variant effect on nefazodone PK/PD. |
| popPK | Barbhaiya_1996 | irrelevant | 2 | 0 | The study focuses on the interaction with haloperidol and reports that nefazodone's pharmacokinetics were unaffected, but it does not provide specific quantitative disposition parameters (CL, V, ka) for nefazodone. |
| PD | Barbhaiya_1996 | not_relevant | 2 | 1 | The study reports qualitative changes in psychomotor performance and PK parameters (AUC, Cmax) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for nefazodone. |
| PGx | Caccia_1998 | not_relevant | 2 | 2 | Review mentions CYP2D6/2C19 polymorphism generally but reports no specific gene-variant effect on nefazodone PK/PD parameters. |
| PGx | Choi_2015 | not_relevant | 0 | 0 | In vitro cytotoxicity study with no gene variant/genotype/phenotype effects on nefazodone PK/PD parameters. |
| popPK | Conca_1999 | irrelevant | 0 | 0 | The paper is a case report focusing on pharmacodynamic interactions (EEG/seizure duration) during ECT and does not report any quantitative pharmacokinetic parameters for nefazodone. |
| PD | Conca_1999 | not_relevant | 1 | 0 | The paper is a single case report describing a qualitative pharmacodynamic interaction (change in anesthetic dosage) without providing any numeric concentration-effect data, dose-response curves, or PD parameters for nefazodone. |
| popPK | Corsini_1999 | irrelevant | 0 | 0 | The paper is a review of statins where nefazodone is mentioned only as a drug interaction agent, with no PK parameters reported for nefazodone. |
| PD | Corsini_1999 | not_relevant | 0 | 0 | The text is a review of statins that mentions nefazodone only in the context of a drug-drug interaction (CYP3A4 inhibition) causing increased statin bioavailability, without reporting any pharmacodynamic or exposure-response data for nefazodone itself. |
| popPK | Costa_2025 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Costa_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism and forensic aspects of nefazodone and related compounds, with no pharmacodynamic or exposure-response analysis. |
| PGx | Costa_2025 | not_relevant | 3 | 3 | Review of metabolism/clinical-forensic aspects of nefazodone and related drugs; no specific gene variant effect on a PK/PD parameter reported. |
| PGx | Daniel_2003 | not_relevant | 0 | 5 | In vitro rat microsomal drug-drug inhibition study; no gene variant/genotype/phenotype effect on nefazodone PK/PD reported. |
| PGx | Daniel_2006 | not_relevant | 2 | 5 | Study examines drug-drug/enzyme interactions of nefazodone on rat CYP2C6 activity, not a gene variant/genotype effect on nefazodone PK/PD. |
| PGx | Daval_2020 | not_relevant | 0 | 0 | Paper is a budesonide trial protocol for COVID-19 hyposmia; no pharmacogenomic data on nefazodone PK/PD. |
| popPK | DeVane_1998 | irrelevant | 1 | 0 | The paper is a review summarizing pharmacology without providing original quantitative PK parameter values for nefazodone. |
| PD | DeVane_1998 | not_relevant | 1 | 0 | The text is a qualitative review summarizing pharmacological characteristics and does not provide specific numeric PD parameters or exposure-response data for nefazodone. |
| popPK | DeVane_2002 | irrelevant | 1 | 0 | The paper is a review of the pharmacology and pharmacodynamics of nefazodone and does not report original quantitative pharmacokinetic parameters. |
| PD | DeVane_2002 | not_relevant | 2 | 0 | The text is a review article summarizing the pharmacology and mechanism of action of nefazodone without presenting specific numeric PD parameters, concentration-effect curves, or PK/PD modeling results. |
| PGx | DeVane_2004 | not_relevant | 0 | 0 | Nefazodone's effect on CYP3A4/alprazolam PK is a drug-drug interaction, not a gene variant/genotype/phenotype effect. |
| PGx | Desmarais_2010 | not_relevant | 1 | 1 | Nefazodone is only mentioned as a CYP3A inhibitor affecting tamoxifen metabolism; no gene variant effect on nefazodone PK/PD is reported. |
| popPK | Dockens_1995 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of theophylline, and while nefazodone is co-administered, no quantitative PK parameters (CL, V, etc.) for nefazodone are reported in the evidence. |
| PD | Dockens_1995 | not_relevant | 0 | 0 | The study reports a lack of interaction and provides only mean PK parameters and qualitative PD comparisons (FEV1) without any concentration-effect modeling or numeric PD parameters for nefazodone. |
| popPK | Dockens_1996 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of digoxin as the subject drug, and while it states that nefazodone's PK was unaffected, it does not report any quantitative disposition parameters (CL, V, etc.) for nefazodone. |
| PD | Dockens_1996 | not_relevant | 1 | 0 | The study reports PK changes in digoxin and qualitative lack of ECG changes, but provides no numeric PD parameters or concentration-effect relationship for nefazodone. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Dresser_2000 | not_relevant | 0 | 0 | The provided text is only the title of a review article and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Dresser_2000 | not_relevant | 3 | 2 | Paper concerns CYP3A4 inhibition of nefazodone, not a gene variant/genotype effect on PK/PD parameters. |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | Review describes nefazodone's PK/PD and CYP3A4 inhibition but no gene variant/genotype effect on its PK or PD parameters. |
| popPK | Gallelli_2017 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Gallelli_2017 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions in cocaine users and does not report any pharmacodynamic or exposure-response analysis for nefazodone. |
| PGx | Gallelli_2017 | not_relevant | 0 | 0 | Paper concerns drug-drug interactions in cocaine users, not pharmacogenomic effects on nefazodone PK/PD parameters. |
| popPK | Goldberg_1997 | irrelevant | 1 | 0 | The paper is a review discussing efficacy and general pharmacokinetic trends (e.g., reduced clearance in hepatic impairment) without reporting specific quantitative PK parameter values for nefazodone. |
| PD | Goldberg_1997 | not_relevant | 1 | 0 | The text is a qualitative review of antidepressants in the elderly and mentions PK changes (clearance, plasma concentrations) but provides no numeric PD parameters, dose-response curves, or exposure-response analysis for nefazodone. |
| PGx | Greene_1997 | not_relevant | 2 | 5 | Discusses CYP-mediated metabolism and interactions but no gene variant/genotype effect on nefazodone PK/PD parameters. |
| PGx | Hasselstrøm_2006 | not_relevant | 0 | 0 | Nefazodone is studied as a CYP3A4 inhibitor (DDI), not a gene variant effect on its own PK/PD. |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | The paper is a meta-analysis of dose equivalence in clinical trials and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for nefazodone. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for nefazodone. |
| popPK | Hesse_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6-mediated bupropion hydroxylation, and nefazodone is only mentioned as an inhibitor with an IC50 value, not as the subject of a pharmacokinetic study. |
| PD | Hesse_2000 | not_relevant | 1 | 2 | The paper reports an in vitro IC50 for nefazodone inhibiting bupropion metabolism, which is a pharmacokinetic interaction parameter, not a pharmacodynamic exposure-response relationship for nefazodone's therapeutic effect. |
| PGx | Hesse_2000 | not_relevant | 2 | 5 | Nefazodone appears only as an in vitro inhibitor (IC50) of bupropion hydroxylation; no gene variant/genotype effect on nefazodone PK/PD is reported. |
| popPK | Hong_2021 | irrelevant | 1 | 1 | In-vitro hepatotoxicity assay using nefazodone only as a toxicant; no PK disposition parameters reported. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | Nefazodone appears only in an herbal interaction case report (St John's wort); no gene variant/genotype effect on PK/PD parameters is reported. |
| popPK | Kalgutkar_2003 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolism of haloperidol, with nefazodone serving only as a CYP3A inhibitor/comparator rather than the subject drug for PK parameter estimation. |
| PD | Kalgutkar_2003 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP3A4/5 metabolism of haloperidol and reports IC50 values for enzyme inhibition by nefazodone, which is a pharmacokinetic/drug-interaction parameter, not a pharmacodynamic exposure-response relationship for nefazodone itself. |
| PGx | Kalgutkar_2003 | not_relevant | 2 | 3 | Nefazodone appears only as a CYP3A inhibitor in haloperidol metabolism; no gene variant effect on nefazodone PK/PD is reported. |
| popPK | Khouzam_2000 | irrelevant | 2 | 0 | The paper is a review article summarizing pharmacology and clinical efficacy, and the provided evidence contains no original quantitative pharmacokinetic parameter values for nefazodone. |
| PD | Khouzam_2000 | not_relevant | 1 | 0 | The text is a general review summary that mentions pharmacodynamics but does not provide specific numeric PD parameters or exposure-response data. |
| popPK | Kilts_2006 | irrelevant | 0 | 0 | PET neuroimaging study of nefazodone treatment response in social anxiety disorder; no PK parameters (CL, V, ka, half-life) reported anywhere. |
| popPK | Kostrubsky_2006 | irrelevant | 0 | 0 | The study focuses on in-vitro and in-vivo hepatotoxicity mechanisms (BSEP inhibition, cell toxicity) rather than quantitative pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Kot_2007 | not_relevant | 0 | 0 | Study examines drug effects on caffeine metabolism in rats, not gene variants affecting nefazodone PK/PD. |
| PGx | Kotlyar_2003 | not_relevant | 0 | 0 | Drug-drug interaction (nefazodone inhibiting CYP3A4), not a gene variant/genotype/phenotype effect. |
| popPK | Kroboth_1995 | irrelevant | 2 | 0 | The study is a pharmacodynamic assessment of coadministration, and while it mentions that full pharmacokinetic analyses were done for separate studies, no quantitative PK parameters for nefazodone are reported in the provided evidence. |
| PGx | Kudo_1999 | not_relevant | 0 | 0 | The paper concerns haloperidol pharmacokinetics; nefazodone appears only as a CYP3A4-mediated drug interaction, with no pharmacogenomic effect on nefazodone PK/PD parameters reported. |
| PGx | Laizure_2000 | not_relevant | 0 | 0 | Review discusses nefazodone's CYP3A4 inhibition and interactions but no gene variant effect on PK/PD parameters. |
| popPK | Lam_2003 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PGx | Lam_2003 | not_relevant | 0 | 0 | Drug-drug interaction study (CYP inhibitors), no gene variant/genotype/phenotype effects on nefazodone PK/PD. |
| PGx | Levin_2010 | not_relevant | 0 | 0 | Nefazodone only mentioned as a CYP3A4 inhibitor; no gene variant effect on its PK/PD reported. |
| PGx | Mazzarino_2018 | not_relevant | 0 | 0 | Nefazodone appears only as a CYP inhibitor in a DDI study of SR9009 metabolism; no gene variant effect on nefazodone PK/PD is reported. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | Paper discusses drug–drug interactions with cisapride, not pharmacogenomic effects on nefazodone PK/PD. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | Paper models CYP3A4 drug-drug interactions; nefazodone appears only as an inhibitor, with no gene variant/genotype effect on PK/PD. |
| PGx | Olyaei_1998 | not_relevant | 0 | 0 | Reports a drug-drug interaction (nefazodone inhibiting tacrolimus metabolism), not a pharmacogenomic variant effect on nefazodone PK/PD. |
| popPK | Owens_1997 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding affinities (Ki) rather than pharmacokinetic disposition parameters. |
| PD | Owens_1997 | not_relevant | 0 | 0 | The paper reports in vitro radioligand binding affinities (Ki) for receptors and transporters, which is a pharmacological characterization, but it does not report an in vivo or ex vivo exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for the drug's effect. |
| popPK | Palleria_2020 | irrelevant | 0 | 0 | The paper is a review of drug-drug interactions between statins and antidepressants and does not report original quantitative pharmacokinetic parameters for nefazodone. |
| PD | Palleria_2020 | not_relevant | 1 | 0 | The paper is a narrative review discussing potential pharmacokinetic interactions and qualitative pharmacodynamic profiles, but it does not report any specific numeric PD parameters or exposure-response data for nefazodone. |
| PGx | Pollock_1996 | not_relevant | 0 | 0 | The paper concerns bupropion, not nefazodone; nefazodone is only mentioned as not being metabolized by CYP2D6, with no pharmacogenomic PK/PD data for nefazodone. |
| PGx | Pozo_2026 | not_relevant | 0 | 0 | Paper evaluates nefazodone cytotoxicity in 3D vs 2D hepatocyte cultures; no gene variant/genotype effect on nefazodone PK/PD parameters is reported. |
| popPK | Pullar_2000 | irrelevant | 0 | 0 | Nefazodone is only a comparator in an in-vitro receptor/uptake study; no PK parameters for nefazodone are reported. |
| PD | Pullar_2000 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological binding and functional assay parameters (Ki, IC50, EC50) for a new compound (LY367265) compared to nefazodone, but does not report an in vivo pharmacodynamic or exposure-response relationship for nefazodone. |
| PGx | Richelson_1997 | not_relevant | 2 | 2 | Review of CYP-mediated drug-drug interactions with antidepressants; no gene variant effect on nefazodone PK/PD parameters reported. |
| PGx | Richelson_1998 | not_relevant | 0 | 0 | Review text only mentions CYP enzyme involvement with antidepressants generally; no gene variant effect on nefazodone PK/PD parameters reported. |
| PGx | Rotzinger_2002 | not_relevant | 3 | 3 | In vitro enzyme identification of CYP3A4 metabolism; no gene variant/genotype effect on PK/PD parameters reported. |
| popPK | Salazar_1995 | irrelevant | 2 | 0 | The study focuses on warfarin pharmacokinetics with nefazodone as a co-administered agent, and no quantitative PK parameters (CL, V, etc.) for nefazodone are provided in the evidence. |
| PD | Salazar_1995 | not_relevant | 0 | 0 | The study reports PK parameters and qualitative safety outcomes (prothrombin ratio) but does not provide numeric PD parameters or an exposure-response relationship for nefazodone. |
| popPK | Salazar_1995_2 | irrelevant | 2 | 0 | The study focuses on the interaction with propranolol and reports only relative changes in propranolol's PK, stating nefazodone's PK was "largely unaffected" without providing specific quantitative disposition parameters (CL, V, etc.) for nefazodone. |
| PD | Salazar_1995_2 | not_relevant | 2 | 1 | The paper reports qualitative changes in pharmacodynamic endpoints (tachycardia, double product) and PK parameters, but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for nefazodone. |
| PGx | Schmider_1996 | not_relevant | 0 | 0 | Paper studies nefazodone's inhibition of CYP enzymes in vitro, not a gene variant effect on nefazodone PK/PD. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of hERG channel inhibition and does not report any pharmacokinetic parameters for nefazodone. |
| PGx | Shubbar_2020 | not_relevant | 0 | 0 | In vitro drug effects on transporter activity; no gene variant/genotype or PK/PD parameter of nefazodone reported. |
| popPK | Silva_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial toxicity in HepG2 cells and does not report pharmacokinetic parameters for nefazodone. |
| PD | Silva_2016 | not_relevant | 3 | 2 | The paper describes in vitro cellular toxicity mechanisms and mentions dose-response curves for viability to select concentrations, but it does not report a pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for the drug's therapeutic or toxic effect in a PK/PD context. |
| popPK | Störmer_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of P-glycoprotein interactions in cell culture and does not report quantitative pharmacokinetic disposition parameters (CL, V, ka, etc.) for nefazodone. |
| PGx | Taylor_1999 | not_relevant | 0 | 0 | Drug-drug interaction (nefazodone inhibiting CYP3A4), not a gene variant/genotype effect on clozapine PK. |
| PGx | Ucar_2000 | not_relevant | 0 | 0 | Nefazodone is only mentioned as a CYP3A4 inhibitor raising statin myotoxicity risk; no gene variant effect on nefazodone PK/PD is reported. |
| PGx | Wen_2008 | not_relevant | 2 | 3 | In vitro CYP2D6-mediated bioactivation of m-CPP (a nefazodone metabolite) is described, but no genotype/phenotype effect on a PK/PD parameter of nefazodone is reported. |
| PGx | Wójcikowski_2013 | not_relevant | 0 | 0 | Study examines drug effects on rat CYP2C11 enzyme activity, not a gene variant/genotype effect on nefazodone PK/PD parameters. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a systematic review and network meta-analysis of antidepressant efficacy and dose-response relationships, not a pharmacokinetic study, and it reports no quantitative PK parameters for nefazodone. |
| PD | Zhou_2025 | not_relevant | 2 | 1 | The paper is a network meta-analysis that qualitatively describes nefazodone's dose-response curve as "fairly flat" but does not provide specific numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for nefazodone. |
| popPK | von_1996 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of triazolam, with nefazodone serving only as an in-vitro inhibitor probe rather than the subject drug for PK parameter estimation. |
| PD | von_1996 | not_relevant | 0 | 0 | The paper focuses on the in vitro inhibition of triazolam metabolism by nefazodone (reporting Ki values) and the in vivo PK/PD interaction between triazolam and ketoconazole; it does not report a pharmacodynamic or exposure-response relationship for nefazodone itself. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
