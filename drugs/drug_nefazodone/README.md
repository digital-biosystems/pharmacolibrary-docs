<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N06A&quot;,&quot;href&quot;:&quot;atc/N06A.md&quot;},{&quot;label&quot;:&quot;nefazodone&quot;}]"></div>

# nefazodone

- **generic name:** nefazodone
- **ATC codes:** `N06AX06`
- **DrugBank:** [DB01149](https://go.drugbank.com/drugs/DB01149) · **PubChem:** [CID 4449](https://pubchem.ncbi.nlm.nih.gov/compound/4449)
- **molar mass:** 470.007 g/mol (C25H32ClN5O2) — DrugBank
- **groups:** approved, withdrawn

## About

Nefazodone is an atypical antidepressant used to treat depression and related mood disorders. It is given orally as a tablet, which is well absorbed from the digestive tract. Although withdrawn in many regions due to liver toxicity, it remains available in the United States.

<small>Summary written by `qwen3.8-27b` from [Wikidata Q416632](https://www.wikidata.org/wiki/Q416632), [Wikipedia](https://en.wikipedia.org/wiki/Nefazodone?oldid=1358676122) (CC BY-SA 4.0), DrugBank's routes and dosage forms and the WHO ATC classification; not checked by a person.</small>

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral">Not simulated</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Shin_2014_hERG_inhibition](drugs/drug_nefazodone/pd_Shin_2014_hERG_inhibition.md) | hERG channel inhibition ← nefazodone · direct sigmoid Emax (Hill) effect | — | Shin DS et al., A novel assessment of nefazodone-induce…, Toxicology and applied phar… (2014) | [10.1016/j.taap.2013.12.012](https://doi.org/10.1016/j.taap.2013.12.012) |
| <span class="pk-badge pk-badge--red">Rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 1.00).">in vitro</span> | [Störmer_2001_Rh123_B_to_A_transport](drugs/drug_nefazodone/pd_St_rmer_2001_Rh123_B_to_A_transport.md) | Rh123 B to A transport ← nefazodone · inhibition effect | — | Störmer E et al., P-glycoprotein interactions of nefazodo…, Journal of clinical pharmac… (2001) | [10.1177/00912700122010609](https://doi.org/10.1177/00912700122010609) |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">Curated (human-checked)</span></td><td>Authored or checked by a person against the paper.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces paper</span></td><td>The model built from the extracted parameters reproduces the paper's reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">Reproduces with caveats</span></td><td>Reproduces the paper's reference values, but an advisory check is open (for example, covariate scenarios not evaluated).</td></tr><tr><td><span class="pk-badge pk-badge--blue">Simulated</span></td><td>The model is built and runs, and no check contradicts it, but no value the paper reported was compared with its simulation (none reported, or none extracted). Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">Not simulated</span></td><td>Extracted and checked against closed-form rules, but no simulation has compared it with the paper yet. Not a verdict.</td></tr><tr><td><span class="pk-badge pk-badge--orange">Needs review</span></td><td>Incomplete, inconsistent or implausible extraction, or a failed replication; the values are unverified.</td></tr><tr><td><span class="pk-badge pk-badge--red">Rejected</span></td><td>Not accepted; the values are shown for inspection only.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Reviewed before the paper was last screened; a new review is pending, so the status comes from the automatic checks.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

<details class="pk-pipeline"><summary>Pipeline details</summary>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-11-24 02:20 | 0:04 | 0/0/0 | 1/1/0 | 0/0/0 | 4,426/173 | einfracz / qwen3.8-27b | 5 | 5/1 | 2/3 | 0 |

## Coverage

- **PubMed hits:** 142 matched, 96 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_23 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Störmer_2001.pdf` | Störmer E et al., P-glycoprotein interactions of nefazodo…, Journal of clinical pharmac… (2001) | pd | 5 | [10.1177/00912700122010609](https://doi.org/10.1177/00912700122010609) | [11452702](https://www.ncbi.nlm.nih.gov/pubmed/11452702) | metadata signals extractable PD data (IC50) |
| `Caccia_1998.pdf` | Caccia S, Metabolism of the newer antidepressants…, Clinical pharmacokinetics (1998) | pgx | 8 | [10.2165/00003088-199834040-00002](https://doi.org/10.2165/00003088-199834040-00002) | [9571301](https://www.ncbi.nlm.nih.gov/pubmed/9571301) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
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
| `Richelson_1998.pdf` | Richelson E, Pharmacokinetic interactions of antidep…, The Journal of clinical psy… (1998) | pgx | 7 |  | [9720479](https://www.ncbi.nlm.nih.gov/pubmed/9720479) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Taylor_1999.pdf` | Taylor D et al., The effect of nefazodone on clozapine p…, International clinical psyc… (1999) | pgx | 7 |  | [10435773](https://www.ncbi.nlm.nih.gov/pubmed/10435773) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ucar_2000.pdf` | Ucar M et al., HMG-CoA reductase inhibitors and myotox…, Drug safety (2000) | pgx | 7 | [10.2165/00002018-200022060-00003](https://doi.org/10.2165/00002018-200022060-00003) | [10877038](https://www.ncbi.nlm.nih.gov/pubmed/10877038) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Wójcikowski_2013.pdf` | Wójcikowski J et al., Effect of antidepressant drugs on cytoc…, Pharmacological reports : PR (2013) | pgx | 7 | [10.1016/s1734-1140(13)71482-8](https://doi.org/10.1016/s1734-1140(13)71482-8) | [24399720](https://www.ncbi.nlm.nih.gov/pubmed/24399720) | metadata signals extractable PGX data (CYP2C11, PK/PD-context) |
| `Mazzarino_2018.pdf` | Mazzarino M et al., A further insight into the metabolic pr…, Drug testing and analysis (2018) | pgx | 5 | [10.1002/dta.2538](https://doi.org/10.1002/dta.2538) | [30395700](https://www.ncbi.nlm.nih.gov/pubmed/30395700) | metadata signals extractable PGX data (CYP3A4) |
| `Pollock_1996.pdf` | Pollock BG et al., Bupropion plasma levels and CYP2D6 phen…, Therapeutic drug monitoring (1996) | pgx | 5 | [10.1097/00007691-199610000-00010](https://doi.org/10.1097/00007691-199610000-00010) | [8885123](https://www.ncbi.nlm.nih.gov/pubmed/8885123) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-11-24 02:20 UTC</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abernethy_2001 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics and pharmacodynamics of the drugs terfenadine and loratadine; nefazodone is used as a CYP3A inhibitor/comparator and its specific disposition parameters (CL, V, etc.) are not reported. |
| PGx | Abernethy_2001 | not_relevant | 0 | 0 | The study reports a drug-drug interaction (nefazodone inhibiting CYP3A substrates) in a general population, not a pharmacogenomic effect based on a specific gene variant or genotype. |
| popPK | Alderman_2001 | irrelevant | 0 | 0 | The paper reports a case study of zopiclone pharmacokinetics in the presence of nefazodone (co-administered/inhibitor), not the disposition parameters of nefazodone itself. |
| PGx | Alderman_2001 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction between zopiclone and nefazodone, not a pharmacogenomic effect based on gene variants. |
| popPK | Barbhaiya_1996 | irrelevant | 2 | 0 | The study focuses on the interaction effect on haloperidol, and while nefazodone PK was measured, specific quantitative parameters (CL, V, t1/2) for nefazodone are not provided in the evidence, only qualitative statements that they were unaffected. |
| PD | Barbhaiya_1996 | not_relevant | 2 | 1 | The study reports qualitative changes in psychomotor performance and PK parameters (AUC, Cmax) but does not provide numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for nefazodone. |
| PGx | Barbhaiya_1996 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions and does not report on the effects of gene variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Caccia_1998 | irrelevant | 1 | 0 | This is a review article that discusses the metabolism of nefazodone qualitatively but does not report original quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life values. |
| PGx | Caccia_1998 | not_relevant | 2 | 5 | This is a general review of antidepressant metabolism that mentions nefazodone's metabolism is saturable but does not report specific pharmacogenomic effects of gene variants on nefazodone's PK/PD parameters. |
| popPK | Choi_2015 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of drug-induced liver injury using HepG2 cells and does not report pharmacokinetic parameters for nefazodone. |
| PGx | Choi_2015 | not_relevant | 0 | 0 | The paper studies DILI prediction mechanisms using a HepG2/microsome model, not a pharmacogenomic effect on PK/PD parameters. |
| popPK | Conca_1999 | irrelevant | 0 | 0 | The paper reports a case study on pharmacodynamic interactions (seizure duration) during ECT and contains no quantitative pharmacokinetic parameters for nefazodone. |
| PD | Conca_1999 | not_relevant | 1 | 0 | The paper is a single case report describing a qualitative pharmacodynamic interaction (change in anesthetic dosage) without providing any numeric concentration-effect data, dose-response curves, or PD parameters for nefazodone. |
| PGx | Conca_1999 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction (DDI) involving nefazodone and midazolam, but does not report any effect of a gene variant or genotype on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Corsini_1999 | irrelevant | 0 | 0 | The paper is a review on statins where nefazodone is only mentioned as an interacting agent in the context of drug interactions, with no PK parameters reported for nefazodone. |
| PD | Corsini_1999 | not_relevant | 0 | 0 | The text is a review of statins that mentions nefazodone only in the context of a drug-drug interaction (CYP3A4 inhibition) causing increased statin bioavailability, without reporting any pharmacodynamic or exposure-response data for nefazodone itself. |
| PGx | Corsini_1999 | not_relevant | 0 | 0 | The paper discusses statin pharmacology and mentions a drug interaction with nefazodone, but does not report any pharmacogenomic effects (gene variants) on the PK or PD parameters of nefazodone. |
| popPK | Costa_2025 | irrelevant | 0 | 0 | no_text gate: only 90 chars of text extracted (&lt; 400) |
| PD | Costa_2025 | not_relevant | 0 | 0 | The paper focuses on the metabolism and forensic aspects of nefazodone and related compounds, with no pharmacodynamic or exposure-response analysis. |
| PGx | Costa_2025 | not_relevant | 2 | 2 | The paper focuses on metabolic pathways and forensic identification of nefazodone and related compounds, not on the impact of specific genetic variants on PK/PD parameters. |
| popPK | Daniel_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP inhibition on caffeine oxidation, not a pharmacokinetic study of nefazodone disposition. |
| PGx | Daniel_2003 | not_relevant | 0 | 0 | The paper investigates the in vitro inhibitory effects of nefazodone on caffeine metabolism via CYP enzymes, which is a drug-drug interaction study, not a pharmacogenomic study involving gene variants or genotypes affecting nefazodone's PK/PD. |
| popPK | Daniel_2006 | irrelevant | 0 | 0 | The study investigates the interaction between nefazodone and CYP2C6 enzyme activity (inhibition/induction) in rat liver microsomes, not the pharmacokinetic disposition parameters (CL, V, T1/2) of nefazodone itself. |
| PGx | Daniel_2006 | not_relevant | 0 | 0 | The study reports pharmacokinetic interactions (CYP2C6 inhibition/induction) in rats, but does not investigate gene variants or pharmacogenomic effects. |
| PGx | Daval_2020 | not_relevant | 0 | 0 | Paper is a budesonide trial protocol for COVID-19 hyposmia; no pharmacogenomic data on nefazodone PK/PD. |
| popPK | DeVane_1998 | irrelevant | 2 | 0 | The paper is a qualitative review summarizing pharmacological characteristics without reporting specific quantitative PK parameter values for nefazodone. |
| PD | DeVane_1998 | not_relevant | 1 | 0 | The text is a qualitative review summarizing pharmacological characteristics and does not provide specific numeric PD parameters or exposure-response data for nefazodone. |
| PGx | DeVane_1998 | not_relevant | 0 | 0 | The paper is a general review comparing the pharmacology of various antidepressants and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | DeVane_2002 | irrelevant | 0 | 0 | The paper is a qualitative review focusing on the pharmacology and mechanism of action of nefazodone, containing no original quantitative pharmacokinetic parameter values (CL, V, ka, etc.). |
| PD | DeVane_2002 | not_relevant | 2 | 0 | The text is a review article summarizing the pharmacology and mechanism of action of nefazodone without presenting specific numeric PD parameters, concentration-effect curves, or PK/PD modeling results. |
| PGx | DeVane_2002 | not_relevant | 0 | 0 | The paper is a general pharmacological review of nefazodone and does not report pharmacogenomic effects (gene variants influencing PK/PD). |
| popPK | DeVane_2004 | irrelevant | 1 | 0 | This is a CYP3A4 inhibition study where nefazodone is a co-administered drug affecting the probe drug (alprazolam), not a pharmacokinetic study reporting disposition parameters for nefazodone itself. |
| PGx | DeVane_2004 | not_relevant | 0 | 1 | The study evaluates the general inhibitory effect of nefazodone on CYP3A4 in a non-genotyped population, reporting no specific pharmacogenomic effect based on genetic variants. |
| popPK | Desmarais_2010 | irrelevant | 0 | 0 | The paper is a clinical review regarding drug interactions with tamoxifen and does not report pharmacokinetic parameters for nefazodone. |
| PGx | Desmarais_2010 | not_relevant | 0 | 0 | The paper is a clinical review on drug interactions for tamoxifen users and does not report pharmacogenomic effects on nefazodone PK or PD. |
| popPK | Dockens_1995 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of theophylline, with nefazodone serving as a co-administered agent, and no quantitative PK parameters for nefazodone are reported. |
| PD | Dockens_1995 | not_relevant | 0 | 0 | The study reports a lack of interaction and provides only mean PK parameters and qualitative PD comparisons (FEV1) without any concentration-effect modeling or numeric PD parameters for nefazodone. |
| PGx | Dockens_1995 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction study and does not investigate any genetic variants or pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of nefazodone or theophylline. |
| popPK | Dockens_1996 | irrelevant | 3 | 0 | Nefazodone is a co-administered interacting agent, not the subject drug, and its PK parameters are stated as unaffected without reporting specific numeric values. |
| PD | Dockens_1996 | not_relevant | 1 | 0 | The study reports PK changes in digoxin and qualitative lack of ECG changes, but provides no numeric PD parameters or concentration-effect relationship for nefazodone. |
| PGx | Dockens_1996 | not_relevant | 0 | 0 | The study reports a pharmacokinetic drug-drug interaction between nefazodone and digoxin, but does not investigate gene variants or genotypes. |
| popPK | Dresser_2000 | irrelevant | 0 | 0 | no_text gate: only 101 chars of text extracted (&lt; 400) |
| PD | Dresser_2000 | not_relevant | 0 | 0 | The provided text is only the title of a review article and does not contain the full text, data, or numeric PD parameters required to assess the relationship. |
| PGx | Dresser_2000 | not_relevant | 0 | 0 | The paper discusses CYP3A4 inhibition generally but does not report specific pharmacogenomic effects (genotype-based) on nefazodone PK/PD parameters. |
| popPK | Ellingrod_1995 | irrelevant | 2 | 0 | The text is a general overview/abstract describing mechanisms and clinical efficacy without providing specific quantitative PK parameter values (e.g., CL, V, t1/2). |
| PGx | Ellingrod_1995 | not_relevant | 0 | 0 | The text describes the general pharmacology, clinical efficacy, and drug-drug interactions of nefazodone but does not report any pharmacogenomic studies or genotype-specific PK/PD parameters. |
| popPK | Findling_2000 | relevant | 10 | 2 | The paper describes a pharmacokinetic study of nefazodone in humans, but the provided abstract contains only qualitative descriptions of half-lives and variability without specific numeric parameter values (CL, V, t1/2) or tables. |
| popPK | Gallelli_2017 | irrelevant | 0 | 0 | no_text gate: only 71 chars of text extracted (&lt; 400) |
| PD | Gallelli_2017 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions in cocaine users and does not report any pharmacodynamic or exposure-response analysis for nefazodone. |
| PGx | Gallelli_2017 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions in cocaine users, not pharmacogenomic effects (gene variants) on nefazodone PK/PD. |
| popPK | Goldberg_1997 | irrelevant | 1 | 0 | This is a narrative review article summarizing clinical trials and pharmacokinetic properties without reporting original quantitative population-pharmacokinetic parameter values (CL, V, etc.) for nefazodone. |
| PD | Goldberg_1997 | not_relevant | 1 | 0 | The text is a qualitative review of antidepressants in the elderly and mentions PK changes (clearance, plasma concentrations) but provides no numeric PD parameters, dose-response curves, or exposure-response analysis for nefazodone. |
| PGx | Goldberg_1997 | not_relevant | 0 | 0 | The paper discusses age-related and organ impairment-related pharmacokinetic changes but does not report any effects of specific genetic variants or genotypes on nefazodone's PK/PD parameters. |
| popPK | Greene_1997 | irrelevant | 2 | 0 | The paper is a review that provides only qualitative descriptions and relative changes (e.g., 18% increase) without reporting the specific quantitative PK parameters (CL, V, ka, t1/2) required for extraction. |
| PGx | Greene_1997 | not_relevant | 0 | 0 | The paper reviews general clinical pharmacokinetics and drug interactions but does not report any specific pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Hasselstrøm_2006 | irrelevant | 0 | 0 | The study focuses on the in vitro metabolism of quetiapine, and nefazodone is only mentioned as a co-administered inhibitor (comparator), not as the subject drug. |
| PGx | Hasselstrøm_2006 | not_relevant | 0 | 0 | The paper investigates quetiapine metabolism and mentions nefazodone only as a CYP3A4 inhibitor in a drug-drug interaction context, not as the target drug for a pharmacogenomic study. |
| popPK | Hayasaka_2015 | irrelevant | 0 | 0 | The paper reports dose equivalence ratios based on clinical trial data, not pharmacokinetic parameters. |
| PD | Hayasaka_2015 | not_relevant | 1 | 0 | The paper reports dose equivalence ratios derived from clinical trial data but does not provide a pharmacodynamic model, concentration-effect curve, or numeric PD parameters (e.g., Emax, EC50) for nefazodone. |
| PGx | Hayasaka_2015 | not_relevant | 0 | 0 | The paper reports general dose equivalences for antidepressants based on clinical trials, with no information on pharmacogenomics, gene variants, or genotype-specific PK/PD parameters for nefazodone. |
| popPK | Hesse_2000 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP2B6 metabolism of bupropion, and nefazodone is only used as an inhibitor/co-administered agent without reporting its own pharmacokinetic parameters. |
| PD | Hesse_2000 | not_relevant | 1 | 2 | The paper reports an in vitro IC50 for nefazodone inhibiting bupropion metabolism, which is a pharmacokinetic interaction parameter, not a pharmacodynamic exposure-response relationship for nefazodone's therapeutic effect. |
| PGx | Hesse_2000 | not_relevant | 0 | 0 | The paper reports in vitro CYP2B6 inhibition of bupropion by nefazodone, not a pharmacogenomic effect (gene variant) on nefazodone's PK/PD. |
| popPK | Hong_2021 | irrelevant | 0 | 0 | The paper is an in-vitro study focused on hepatotoxicity (liver toxicity) modeling, not pharmacokinetic disposition parameters. |
| PGx | Hong_2021 | not_relevant | 0 | 0 | The paper describes a 3D cell culture model for hepatotoxicity screening and does not investigate the impact of genetic variants on the pharmacokinetics or pharmacodynamics of nefazodone. |
| popPK | Izzo_2009 | irrelevant | 0 | 0 | This paper is a review of herbal drug interactions, and nefazodone appears only as a co-prescribed drug in a single case report of an interaction, with no PK parameters reported. |
| PGx | Izzo_2009 | not_relevant | 0 | 0 | The paper discusses herbal drug interactions, not pharmacogenomic effects of gene variants on nefazodone PK/PD. |
| popPK | Kalgutkar_2003 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of haloperidol metabolism, where nefazodone is used only as an inhibitor probe, not as the subject drug for pharmacokinetic parameter estimation. |
| PD | Kalgutkar_2003 | not_relevant | 0 | 0 | The paper focuses on in vitro CYP3A4/5 metabolism of haloperidol and reports IC50 values for enzyme inhibition by nefazodone, which is a pharmacokinetic/drug-interaction parameter, not a pharmacodynamic exposure-response relationship for nefazodone itself. |
| PGx | Kalgutkar_2003 | not_relevant | 0 | 0 | The paper investigates CYP3A4/5 effects on haloperidol metabolism and DDI with nefazodone, not nefazodone's PK/PD. |
| popPK | Khouzam_2000 | irrelevant | 2 | 0 | The paper is a review article that summarizes general pharmacokinetic properties but does not present original quantitative disposition parameters (CL, V, ka) or population models in the evidence provided. |
| PD | Khouzam_2000 | not_relevant | 1 | 0 | The text is a general review summary that mentions pharmacodynamics but does not provide specific numeric PD parameters or exposure-response data. |
| PGx | Khouzam_2000 | not_relevant | 0 | 0 | The paper is a general pharmacological review of nefazodone and does not report specific pharmacogenomic associations or genetic variants affecting its PK/PD parameters. |
| popPK | Kilts_2006 | irrelevant | 0 | 0 | This is a neuroimaging (PET) study of neural processing in social anxiety disorder, not a pharmacokinetic study, and reports no drug disposition parameters. |
| PGx | Kilts_2006 | not_relevant | 0 | 0 | The paper studies the neural correlates of social anxiety and response to nefazodone using PET, but does not report any pharmacogenomic effects on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Kostrubsky_2006 | irrelevant | 0 | 0 | The study is an in-vitro and in-vivo mechanistic investigation of hepatotoxicity (inhibiting BSEP) and does not report pharmacokinetic disposition parameters like clearance or volume. |
| PGx | Kostrubsky_2006 | not_relevant | 0 | 0 | The study evaluates general hepatotoxicity mechanisms using in vitro systems and intact rats, without reporting on gene variants or genotypes affecting nefazodone's PK/PD parameters. |
| popPK | Kot_2007 | irrelevant | 1 | 0 | The study focuses on the indirect effect of nefazodone on caffeine metabolism (probe drug) in rats and does not report quantitative pharmacokinetic parameters for nefazodone itself. |
| PGx | Kot_2007 | not_relevant | 0 | 0 | The study investigates the effect of nefazodone administration on caffeine metabolism in rats (drug-drug interaction), not the effect of a genetic variant on nefazodone's pharmacokinetics or pharmacodynamics. |
| popPK | Kotlyar_2003 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for methylprednisolone (the subject drug) while using nefazodone as a co-administered inhibitor, not nefazodone's own PK. |
| PGx | Kotlyar_2003 | not_relevant | 0 | 0 |  |
| popPK | Kroboth_1995 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic effects of nefazodone co-administered with benzodiazepines, and while PK data were collected for separate analyses, no quantitative PK parameters for nefazodone are provided in the evidence. |
| PGx | Kroboth_1995 | not_relevant | 0 | 0 | The study evaluates a pharmacokinetic/pharmacodynamic drug-drug interaction between nefazodone and benzodiazepines, but does not investigate the influence of any gene variant, genotype, or phenotype on these parameters. |
| popPK | Kudo_1999 | irrelevant | 0 | 0 | The paper is a review of haloperidol pharmacokinetics and only mentions nefazodone as a co-administered drug in interaction studies, providing no PK parameters for nefazodone. |
| PGx | Kudo_1999 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of haloperidol and does not report pharmacogenomic effects on nefazodone parameters. |
| popPK | Laizure_2000 | irrelevant | 0 | 0 | The provided text is a clinical update or review discussing mechanism and safety, containing no quantitative pharmacokinetic parameters (CL, V, etc.) for nefazodone. |
| PGx | Laizure_2000 | not_relevant | 0 | 0 | The text is a general review of nefazodone's clinical properties, interactions, and toxicity, containing no information on genetic variants or their effects on PK/PD parameters. |
| popPK | Lam_2003 | irrelevant | 0 | 0 | no_text gate: only 125 chars of text extracted (&lt; 400) |
| PGx | Lam_2003 | not_relevant | 0 | 0 | The paper reports drug-drug interactions involving nefazodone, not pharmacogenomic effects of gene variants on nefazodone. |
| popPK | Levin_2010 | irrelevant | 0 | 0 | The paper is a case report on a fentanyl-diltiazem interaction where nefazodone is only listed as a comparative CYP3A4 inhibitor with no pharmacokinetic data provided. |
| PGx | Levin_2010 | not_relevant | 0 | 0 | The paper discusses a drug-drug interaction between diltiazem and fentanyl, and only mentions nefazodone in a list of other CYP3A4 inhibitors without reporting any pharmacogenomic effect on nefazodone's PK or PD. |
| popPK | Mazzarino_2018 | irrelevant | 0 | 0 | The study focuses on the in-vitro metabolic profile of SR9009, with nefazodone appearing only as a drug used to induce cytochrome P450 inhibition for drug-drug interaction assessment. |
| PGx | Mazzarino_2018 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of SR9009, not nefazodone; nefazodone is mentioned only as a drug causing a drug-drug interaction effect on SR9009 metabolism. |
| popPK | Michalets_2000 | irrelevant | 0 | 0 | The paper is a review of drug interactions with cisapride, and nefazodone is only mentioned as a CYP3A4 inhibitor to avoid, with no pharmacokinetic parameter values reported for nefazodone. |
| PGx | Michalets_2000 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions of cisapride and mentions nefazodone as a CYP3A4 inhibitor, but it does not report pharmacogenomic effects (gene variants) on the PK or PD of nefazodone. |
| popPK | Ohno_2007 | irrelevant | 0 | 0 | Nefazodone is listed only as an inhibitor used to calculate interaction parameters (IR(CYP3A4)) in a CYP3A4 drug interaction prediction model; no pharmacokinetic disposition parameters (CL, V, ka, t1/2) for nefazodone itself are reported. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper is a methodological framework for predicting CYP3A4-mediated drug-drug interactions using in vivo data; it does not report any pharmacogenomic effects (gene variants) on the PK/PD of nefazodone or any other drug. |
| popPK | Olyaei_1998 | irrelevant | 1 | 0 | The paper is a case report describing a drug interaction where nefazodone is a co-administered agent affecting tacrolimus levels, not a study reporting quantitative PK parameters (CL, V, etc.) for nefazodone itself. |
| PGx | Olyaei_1998 | not_relevant | 0 | 0 | The paper describes a drug-drug interaction between nefazodone and tacrolimus, but does not report any effect of a gene variant or genotype on nefazodone's pharmacokinetics or pharmacodynamics. |
| popPK | Owens_1997 | irrelevant | 0 | 0 | The study reports receptor and transporter binding affinities (Ki values) for nefazodone, not pharmacokinetic disposition parameters such as clearance, volume, or half-life. |
| PD | Owens_1997 | not_relevant | 0 | 0 | The paper reports in vitro radioligand binding affinities (Ki) for receptors and transporters, which is a pharmacological characterization, but it does not report an in vivo or ex vivo exposure-response or dose-response relationship with numeric PD parameters (e.g., Emax, EC50) for the drug's effect. |
| PGx | Owens_1997 | not_relevant | 0 | 0 | The paper reports static receptor binding affinities (Ki) for nefazodone and other antidepressants but does not involve genetic variants or pharmacogenomic effects on PK/PD parameters. |
| popPK | Palleria_2020 | irrelevant | 0 | 0 | This is a review article discussing drug-drug interactions that does not report original quantitative pharmacokinetic parameters for nefazodone. |
| PD | Palleria_2020 | not_relevant | 1 | 0 | The paper is a narrative review discussing potential pharmacokinetic interactions and qualitative pharmacodynamic profiles, but it does not report any specific numeric PD parameters or exposure-response data for nefazodone. |
| PGx | Palleria_2020 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions between statins and antidepressants and does not investigate pharmacogenomic effects on nefazodone pharmacokinetics or pharmacodynamics. |
| popPK | Pollock_1996 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of bupropion, and nefazodone is only mentioned in the introduction as an exception to CYP2D6 metabolism without providing any quantitative data for it. |
| PGx | Pollock_1996 | not_relevant | 0 | 0 | The paper investigates bupropion, not nefazodone. |
| popPK | Pozo_2026 | irrelevant | 0 | 0 | The study is an in-vitro characterization of 3D iPSC-derived hepatocytes where nefazodone is used solely as a cytotoxicity probe, with no pharmacokinetic parameters reported. |
| PGx | Pozo_2026 | not_relevant | 0 | 0 | The study evaluates drug-induced liver injury (DILI) in in vitro 3D hepatocyte models and does not report pharmacogenomic effects on the PK or PD of nefazodone. |
| popPK | Pullar_2000 | irrelevant | 0 | 0 | The paper is an in-vitro pharmacological study comparing receptor affinity and uptake inhibition, containing no pharmacokinetic parameters for nefazodone. |
| PD | Pullar_2000 | not_relevant | 0 | 0 | The paper reports in vitro pharmacological binding and functional assay parameters (Ki, IC50, EC50) for a new compound (LY367265) compared to nefazodone, but does not report an in vivo pharmacodynamic or exposure-response relationship for nefazodone. |
| PGx | Pullar_2000 | not_relevant | 0 | 0 | The paper compares the receptor binding and in vitro potency of LY367265 and nefazodone, but does not report any genetic variant effects on their pharmacokinetics or pharmacodynamics. |
| popPK | Richelson_1997 | irrelevant | 0 | 0 | This is a review paper focusing on CYP450 enzyme inhibition and drug-drug interactions, not a primary pharmacokinetic study reporting quantitative disposition parameters for nefazodone. |
| PGx | Richelson_1997 | not_relevant | 0 | 0 | The paper reviews drug-drug interactions and CYP enzyme inhibition, not pharmacogenomic effects of genetic variants on nefazodone. |
| popPK | Richelson_1998 | irrelevant | 0 | 0 | The paper is a review of pharmacokinetic interactions and CYP inhibition mechanisms for a class of antidepressants, not an original study reporting quantitative disposition parameters (CL, V, etc.) for nefazodone. |
| PGx | Richelson_1998 | not_relevant | 0 | 0 | The text discusses drug-drug interactions and CYP enzymes generally but does not report specific pharmacogenomic effects of gene variants on nefazodone. |
| popPK | Rotzinger_2002 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of CYP3A4 metabolism and does not report in-vivo pharmacokinetic parameters such as clearance or volume for nefazodone. |
| PGx | Rotzinger_2002 | not_relevant | 2 | 1 | The study investigates metabolic pathways using microsomes and heterologous enzymes but does not report genetic variant-specific effects on PK/PD parameters. |
| popPK | Salazar_1995 | irrelevant | 2 | 0 | The study focuses on the pharmacokinetics of warfarin (the subject drug of interest in the interaction context), while nefazodone is a co-administered agent whose PK parameters (only minimum concentrations mentioned) are not quantitatively reported as the primary data of interest. |
| PD | Salazar_1995 | not_relevant | 0 | 0 | The study reports PK parameters and qualitative safety outcomes (prothrombin ratio) but does not provide numeric PD parameters or an exposure-response relationship for nefazodone. |
| PGx | Salazar_1995 | not_relevant | 0 | 0 | The study evaluates drug-drug interaction in a general population without reporting any pharmacogenomic (gene variant) effects. |
| popPK | Salazar_1995_2 | irrelevant | 2 | 0 | The study is a drug interaction study where nefazodone is a co-administered agent and no quantitative pharmacokinetic parameter values (e.g., CL, V, ka) for nefazodone are reported in the evidence. |
| PD | Salazar_1995_2 | not_relevant | 2 | 1 | The paper reports qualitative changes in pharmacodynamic endpoints (tachycardia, double product) and PK parameters, but does not provide numeric PD parameters (e.g., Emax, EC50) or a concentration-effect curve for nefazodone. |
| PGx | Salazar_1995_2 | not_relevant | 0 | 0 | The study reports a drug-drug interaction between nefazodone and propranolol, not a pharmacogenomic effect (gene variant impact) on a PK/PD parameter. |
| popPK | Schmider_1996 | irrelevant | 0 | 0 | The study is an in-vitro investigation of CYP450 inhibition using Ki values, which are mechanistic parameters, not pharmacokinetic disposition parameters like clearance or volume of distribution. |
| PGx | Schmider_1996 | not_relevant | 0 | 0 | The paper studies CYP inhibition of dextromethorphan by nefazodone in vitro, not the pharmacokinetics/pharmacodynamics of nefazodone itself affected by gene variants. |
| popPK | Shin_2014 | irrelevant | 0 | 0 | The study reports in vitro electrophysiological data (hERG inhibition IC50) and molecular binding site analysis, which are mechanistic/toxicological studies rather than pharmacokinetic disposition parameters. |
| PGx | Shin_2014 | not_relevant | 0 | 0 | The paper investigates the mechanism of nefazodone-induced hERG channel inhibition in HEK-293 cells, which is a preclinical toxicology study, not a clinical pharmacogenomic study of PK or PD parameters in humans. |
| popPK | Shubbar_2020 | irrelevant | 0 | 0 | The study investigates the in vitro interaction of nefazodone with ABC transporters in porcine brain endothelial cells and contains no pharmacokinetic parameters for nefazodone. |
| PGx | Shubbar_2020 | not_relevant | 0 | 0 | The paper investigates the effect of nefazodone on ABC transporter-mediated transport of amyloid-beta in cell cultures, not the effect of a gene variant on the PK or PD of nefazodone. |
| popPK | Silva_2016 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on mitochondrial toxicity in HepG2 cells and does not report pharmacokinetic parameters for nefazodone. |
| PD | Silva_2016 | not_relevant | 3 | 2 | The paper describes in vitro cellular toxicity mechanisms and mentions dose-response curves for viability to select concentrations, but it does not report a pharmacodynamic model or numeric PD parameters (e.g., EC50, Emax) for the drug's therapeutic or toxic effect in a PK/PD context. |
| popPK | Störmer_2001 | irrelevant | 1 | 0 | This is an in-vitro mechanistic study on P-glycoprotein interactions, not a study reporting quantitative disposition parameters (CL, V, ka, etc.) for nefazodone. |
| PGx | Störmer_2001 | not_relevant | 0 | 0 | The study investigates the interaction of the drug with P-glycoprotein in cell culture, not the effect of a genetic variant on the drug's pharmacokinetics or pharmacodynamics. |
| popPK | Taylor_1999 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetic interaction of clozapine and its metabolite norclozapine, with nefazodone serving only as a co-administered inhibitor rather than the subject of quantitative PK parameter reporting. |
| PGx | Taylor_1999 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (nefazodone inhibiting clozapine metabolism) but does not report a pharmacogenomic effect (gene variant/genotype) on PK or PD parameters. |
| popPK | Ucar_2000 | irrelevant | 0 | 0 | The paper is a review of HMG-CoA reductase inhibitor myotoxicity and mentions nefazodone only as a concomitant drug that inhibits metabolism, not as a subject of PK characterization. |
| PGx | Ucar_2000 | not_relevant | 0 | 0 | The text discusses nefazodone as a CYP3A4 inhibitor affecting HMG-CoA reductase inhibitors, not a pharmacogenomic effect on nefazodone's own PK/PD. |
| popPK | Wen_2008 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of trazodone metabolism and reactive metabolite formation, with no population PK parameters reported for nefazodone. |
| PGx | Wen_2008 | not_relevant | 0 | 0 | The paper describes the mechanism of reactive metabolite formation for trazodone and m-CPP, noting nefazodone only as a source of m-CPP, but does not report any pharmacokinetic or pharmacodynamic parameters for nefazodone or any gene variant effect on them. |
| popPK | Wójcikowski_2013 | irrelevant | 0 | 0 | The study is an in vitro/in vivo mechanistic investigation of CYP2C11 enzyme activity (inhibition/induction) using nefazodone as a probe drug, not a pharmacokinetic study of nefazodone disposition parameters (CL, V, etc.). |
| PGx | Wójcikowski_2013 | not_relevant | 0 | 0 | The study investigates the effect of nefazodone on CYP2C11 activity in rats, but does not report a pharmacogenomic effect (gene variant) on the PK/PD of nefazodone. |
| popPK | Zhou_2025 | irrelevant | 0 | 0 | The paper is a network meta-analysis of efficacy and dose-response relationships, not a pharmacokinetic study, and contains no PK parameters for nefazodone. |
| PD | Zhou_2025 | not_relevant | 2 | 1 | The paper is a network meta-analysis that qualitatively describes nefazodone's dose-response curve as "fairly flat" but does not provide specific numeric PD parameters (e.g., Emax, EC50) or a quantitative concentration-effect model for nefazodone. |
| PGx | Zhou_2025 | not_relevant | 0 | 0 | The study is a meta-analysis on antidepressant dosing and does not report any pharmacogenomic effect on PK/PD parameters. |
| popPK | von_1996 | irrelevant | 0 | 0 | The study focuses on triazolam pharmacokinetics and in vitro metabolism, with nefazodone serving only as a minor in vitro inhibitor reference. |
| PD | von_1996 | not_relevant | 0 | 0 | The paper focuses on the in vitro inhibition of triazolam metabolism by nefazodone (reporting Ki values) and the in vivo PK/PD interaction between triazolam and ketoconazole; it does not report a pharmacodynamic or exposure-response relationship for nefazodone itself. |
| PGx | von_1996 | not_relevant | 0 | 0 | The paper studies triazolam pharmacokinetics and interactions with ketoconazole; nefazodone is only mentioned as a weak in vitro inhibitor and no pharmacogenomic data for nefazodone are reported. |


</details>

---
<sub>Research data extracted by software from published papers; not clinically validated and not for dosing decisions. [Report a problem with this page](https://github.com/pharmacolibrary/pharmacolibrary.github.io/issues/new?title=%5Bnefazodone%5D&body=Drug%3A%20nefazodone%0APage%3A%20https%3A//pharmacolibrary.github.io/%23/drugs/drug_nefazodone/%0ABuild%3A%20scholarv2%0A%0AWhat%20is%20wrong%3A%0A)</sub>  
<sub>Pharmacolibrary</sub>
