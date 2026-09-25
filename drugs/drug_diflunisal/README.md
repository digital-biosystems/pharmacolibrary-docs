<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02B&quot;,&quot;href&quot;:&quot;atc/N02B.md&quot;},{&quot;label&quot;:&quot;diflunisal&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Diflunisal_Gao1998_reference&quot;,&quot;label&quot;:&quot;Gao_1998_reference&quot;,&quot;href&quot;:&quot;drugs/drug_diflunisal/Diflunisal_Gao1998_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# diflunisal

- **generic name:** diflunisal
- **ATC codes:** `N02BA11`
- **DrugBank:** [DB00861](https://go.drugbank.com/drugs/DB00861)
- **groups:** approved

## About

**Description.** Diflunisal, a salicylate derivative, is a nonsteroidal anti-inflammatory agent (NSAIA) with pharmacologic actions similar to other prototypical NSAIAs. Diflunisal possesses anti-inflammatory, analgesic and antipyretic activity. Though its mechanism of action has not been clearly established, most of its actions appear to be associated with inhibition of prostaglandin synthesis via the arachidonic acid pathway. Diflunisal is used to relieve pain accompanied with inflammation and in the symptomatic treatment of rheumatoid arthritis and osteoarthritis.

**Indication.** For symptomatic treatment of mild to moderate pain accompanied by inflammation (e.g. musculoskeletal trauma, post-dental extraction, post-episiotomy), osteoarthritis, and rheumatoid arthritis.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-21 02:18 | 12:58 | 0/1/0 | 3/0/0 | 0/0/0 | 180,859/18,058 | ollama / qwen3.8:27b-mtp-q8_0 | 11 | 7/4 | 9/2 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: partial</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Gao_1998_reference](drugs/drug_diflunisal/Diflunisal_Gao1998_reference.md) | Gao L et al., [Determination of diflunisal in plasma…, Yao xue xue bao = Acta phar… (1998) | — |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Kasuya_2013](drugs/drug_diflunisal/pd_Kasuya_2013_unknown.md) | Kasuya F et al., Effect of the non-steroidal anti-inflam…, Journal of enzyme inhibitio… (2013) | [10.3109/14756366.2011.636742](https://doi.org/10.3109/14756366.2011.636742) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Serlin_1980](drugs/drug_diflunisal/pd_Serlin_1980_free_fraction_of_warfarin.md) | Serlin MJ et al., The effect of diflunisal on the steady…, British journal of clinical… (1980) | [10.1111/j.1365-2125.1980.tb04847.x](https://doi.org/10.1111/j.1365-2125.1980.tb04847.x) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Şenkardeş_2016_2](drugs/drug_diflunisal/pd_enkarde_2016_2_anti_HCV_activity.md) | Şenkardeş (2016) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> | [Şenkardeş_2016_2](drugs/drug_diflunisal/pd_enkarde_2016_2_antiproliferative_activity.md) | Şenkardeş (2016) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=diflunisal) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `ALB` unknown | DrugBank actor |
| metabolism | kidney | `UGT1A9` inhibitor | DrugBank actor |
| metabolism | liver | `UGT1A9` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…ministered dose. Little or no diflunisal is excreted in the feces.…”</sub> | prose |
| excretion | kidney | `SLC22A6` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: PTGS1 (inhibitor), PTGS2 (inhibitor), TTR (unknown), UGT1A8 (substrate).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 81 matched, 60 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Gao_1998.pdf` | Gao L et al., [Determination of diflunisal in plasma…, Yao xue xue bao = Acta phar… (1998) | popPK | 8 | not captured | [11939069](https://pubmed.ncbi.nlm.nih.gov/11939069) | The study reports pharmacokinetic parameters for diflunisal in humans, specifically providing half-life values (T1/2 alpha and beta) but lacking other quantitative disposition parameters like clearance or volume. |
| `Ray_1983.pdf` | Ray JE et al., High-performance liquid chromatographic…, Journal of pharmaceutical s… (1983) | popPK | 8 | [10.1002/jps.2600721209](https://doi.org/10.1002/jps.2600721209) | [6663474](https://pubmed.ncbi.nlm.nih.gov/6663474) | The paper describes a PK study of diflunisal using a two-compartment model, but the specific numeric values for clearance, volume, or half-life are not provided in the text, only AUC ratios. |
| `Mano_2006.pdf` | Mano Y et al., In vitro drug interaction between diflu…, Biopharmaceutics & drug dis… (2006) | pd | 5 | [10.1002/bdd.507](https://doi.org/10.1002/bdd.507) | [16733833](https://www.ncbi.nlm.nih.gov/pubmed/16733833) | metadata signals extractable PD data (IC50) |
| `Vietri_2000.pdf` | Vietri M et al., Inhibition of human liver phenol sulfot…, European journal of clinica… (2000) | pd | 5 | [10.1007/s002280050725](https://doi.org/10.1007/s002280050725) | [10853883](https://www.ncbi.nlm.nih.gov/pubmed/10853883) | metadata signals extractable PD data (IC50) |
| `Abe_2018.pdf` | Abe DO et al., Diflunisal-adjoined cobalt(iii)-polypyr…, Dalton transactions (Cambri… (2018) | pd | 4 | [10.1039/c8dt03448f](https://doi.org/10.1039/c8dt03448f) | [30225483](https://www.ncbi.nlm.nih.gov/pubmed/30225483) | metadata signals extractable PD data (IC50) |
| `Choi_2005.pdf` | Choi JS et al., Role of monocarboxylic acid transporter…, The Journal of pharmacy and… (2005) | pd | 4 | [10.1211/jpp.57.9.0013](https://doi.org/10.1211/jpp.57.9.0013) | [16105239](https://www.ncbi.nlm.nih.gov/pubmed/16105239) | metadata signals extractable PD data (IC50) |
| `Kasuya_2001.pdf` | Kasuya F et al., Inhibitory effect of quinolone antimicr…, Biochemical pharmacology (2001) | pd | 4 | [10.1016/s0006-2952(01)00667-0](https://doi.org/10.1016/s0006-2952(01)00667-0) | [11434910](https://www.ncbi.nlm.nih.gov/pubmed/11434910) | metadata signals extractable PD data (IC50) |
| `McDougall_1988.pdf` | McDougall P et al., Action of the nonsteroidal anti-inflamm…, Biochemical pharmacology (1988) | pd | 4 | [10.1016/0006-2952(88)90790-3](https://doi.org/10.1016/0006-2952(88)90790-3) | [3355604](https://www.ncbi.nlm.nih.gov/pubmed/3355604) | metadata signals extractable PD data (IC50) |
| `Pacifici_1991.pdf` | Pacifici GM et al., Conjugation of benzoic acid with glycin…, Developmental pharmacology… (1991) | pd | 4 | [10.1159/000457499](https://doi.org/10.1159/000457499) | [1811921](https://www.ncbi.nlm.nih.gov/pubmed/1811921) | metadata signals extractable PD data (IC50) |
| `Squires_1993.pdf` | Squires RF et al., Indomethacin/ibuprofen-like anti-inflam…, Molecular pharmacology (1993) | pd | 4 | not captured | [8388990](https://www.ncbi.nlm.nih.gov/pubmed/8388990) | metadata signals extractable PD data (EC50) |
| `Squires_1999.pdf` | Squires RF et al., Honokiol and magnolol increase the numb…, Neurochemical research (1999) | pd | 4 | [10.1023/a:1021116502548](https://doi.org/10.1023/a:1021116502548) | [10591411](https://www.ncbi.nlm.nih.gov/pubmed/10591411) | metadata signals extractable PD data (EC50) |
| `Ghosal_2011.pdf` | Ghosal A et al., Characterization of human liver enzymes…, Drug metabolism and disposi… (2011) | pgx | 7 | [10.1124/dmd.110.036996](https://doi.org/10.1124/dmd.110.036996) | [21123164](https://www.ncbi.nlm.nih.gov/pubmed/21123164) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Kiang_2005.pdf` | Kiang TK et al., UDP-glucuronosyltransferases and clinic…, Pharmacology & therapeutics (2005) | pgx | 5 | [10.1016/j.pharmthera.2004.10.013](https://doi.org/10.1016/j.pharmthera.2004.10.013) | [15781124](https://www.ncbi.nlm.nih.gov/pubmed/15781124) | metadata signals extractable PGX data (UGT1A7) |

<sub>queue written 2026-09-21T02:06:00.730176+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Bergamo_1989 | not_relevant | 2 | 1 | The paper reports qualitative comparative effects and percentage changes in renal function and thromboxane for standard doses, but does not provide concentration-effect data, dose-response curves, or numeric PD parameters (e.g., EC50, Emax) for diflunisal. |
| popPK | Berk_2026 | irrelevant | 0 | 0 | The paper is a clinical efficacy study of diflunisal for amyloidosis and does not report any pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Brouwers_1994 | irrelevant | 0 | 0 | The paper is a review of NSAID drug interactions and does not report any quantitative pharmacokinetic parameters for diflunisal. |
| PD | Brouwers_1994 | not_relevant | 1 | 0 | The text is a qualitative review of NSAID drug interactions and mentions diflunisal only in the context of concentration changes, without providing any numeric PD parameters or exposure-response data. |
| PD | Chen_2005 | not_relevant | 0 | 0 | The paper reports in vitro IC50s and in vivo ED50s for novel compounds, with diflunisal serving only as a qualitative reference for analgesic activity without providing specific numeric PD parameters or exposure-response data for diflunisal. |
| PD | Cheng_2007 | not_relevant | 1 | 0 | The paper reports qualitative pharmacodynamic effects (prolonged profile) and bioavailability ratios, but does not provide numeric PD parameters (Emax, EC50) or an exposure-response curve for diflunisal. |
| PD | Choi_2005 | not_relevant | 3 | 2 | The paper reports IC50 and Ki values for the inhibition of benzoic acid transport by NSAIDs in Caco-2 cells, which is a pharmacokinetic/transport mechanism study, not a pharmacodynamic (therapeutic effect) exposure-response relationship for diflunisal. |
| PGx | Ghosal_2011 | not_relevant | 0 | 0 | The paper focuses on the biotransformation of boceprevir and only mentions diflunisal as an inhibitor of AKR enzymes, without reporting any pharmacogenomic effects on diflunisal's PK or PD parameters. |
| popPK | Gupta_1991 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium binding in tracheal cartilage where diflunisal is used only as a non-specific inhibitor/control agent, not as the subject of pharmacokinetic analysis. |
| PD | Gupta_1991 | not_relevant | 0 | 0 | The paper studies calcium sequestration in tracheal cartilage and KCl concentration-response curves; diflunisal is only mentioned as a single-point inhibitor of calcium uptake, with no dose-response or PD parameters reported for it. |
| PD | Gøtzsche_1989 | not_relevant | 2 | 1 | The text is a qualitative review summary stating that dose-response effects were small, but it does not provide specific numeric PD parameters (e.g., EC50, Emax) or detailed dose-effect curves for diflunisal. |
| PGx | Herman_1994 | not_relevant | 2 | 5 | The paper attributes metabolic variability to environmental factors (smoking, oral contraceptives) rather than genetic polymorphisms. |
| popPK | Hung_1998 | irrelevant | 2 | 2 | The study is an in-vitro/in-situ rat liver perfusion experiment focusing on diflunisal esters, not a systemic pharmacokinetic study reporting standard disposition parameters (CL, V, ka) for diflunisal as the subject drug. |
| PGx | Ji_2025 | not_relevant | 0 | 0 | The paper compares the binding affinities and stabilization kinetics of TTR stabilizers (including diflunisal) but does not report any pharmacogenomic effects on PK or PD parameters. |
| PGx | Jin_1993 | not_relevant | 0 | 0 | The paper describes the cloning and expression of a UGT enzyme and its substrate specificity for diflunisal, but does not report any pharmacogenomic study linking genetic variants to changes in PK or PD parameters in humans. |
| PD | Johnson_1991 | not_relevant | 1 | 0 | The text is a qualitative review of NSAID therapy in the elderly and mentions diflunisal only in the context of dosage reduction for renal disease, without providing any numeric pharmacodynamic parameters or exposure-response data. |
| PGx | Joo_2015 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of UGTs by diflunisal, not a pharmacogenomic effect of a gene variant on diflunisal's PK or PD. |
| popPK | Kasuya_2013 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of enzyme inhibition (IC50 values) in mouse mitochondria, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Kiang_2005 | not_relevant | 0 | 0 | The paper discusses UGT-mediated drug-drug interactions and states that diflunisal glucuronidation is not affected by investigated drugs, but it does not report pharmacogenomic effects (gene variants) on diflunisal PK/PD. |
| popPK | Knights_2009 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of aldosterone glucuronidation inhibition by NSAIDs, not a pharmacokinetic study reporting disposition parameters for diflunisal. |
| PD | Knights_2009 | not_relevant | 3 | 3 | The paper reports in vitro enzyme inhibition kinetics (IC50/Ki) of aldosterone glucuronidation by diflunisal, which is a mechanistic pharmacology study, not a pharmacodynamic exposure-response or dose-response relationship for the drug's clinical effect. |
| PGx | Knights_2009 | not_relevant | 0 | 0 | The study investigates the inhibition of aldosterone glucuronidation by diflunisal in vitro, not the effect of genetic variants on diflunisal's pharmacokinetics or pharmacodynamics. |
| PD | Lin_2020 | not_relevant | 0 | 0 | The paper discusses patisiran, not diflunisal, and reports clinical outcomes rather than numeric pharmacodynamic parameters. |
| popPK | Lomoio_2025 | irrelevant | 0 | 0 | The paper is an in silico structural and docking study of transthyretin variants, and diflunisal is only listed as a ligand in a molecular property table without any pharmacokinetic parameters. |
| PD | Lomoio_2025 | not_relevant | 0 | 0 | The paper is an in silico structural and docking study of TTR variants and ligands (including diflunisal) and does not report any pharmacokinetic or pharmacodynamic exposure-response or dose-response data. |
| PD | Macdonald_1990 | not_relevant | 0 | 0 | The paper reports only pharmacokinetic parameters (clearance, metabolic pathways) and does not contain any pharmacodynamic or exposure-response data. |
| popPK | Maier_2021 | irrelevant | 0 | 0 | The paper is a microbiology study on antibiotic effects on gut bacteria and does not involve diflunisal or pharmacokinetic parameters. |
| PD | Maier_2021 | not_relevant | 0 | 0 | The paper focuses on antibiotic activity spectra and antidote screening for gut bacteria; diflunisal is mentioned only as a tested compound in a single-point survival assay without dose-response modeling or PD parameter estimation. |
| PGx | Mano_2005 | not_relevant | 0 | 0 | The paper reports in vitro enzyme inhibition of UGT1A1 by diflunisal, but does not investigate the effect of genetic variants or genotypes on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Mano_2007 | not_relevant | 0 | 0 | The study investigates the in vitro inhibitory potential of diflunisal on UGT2B7, not the effect of a gene variant on diflunisal's PK or PD. |
| popPK | McDougall_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mitochondrial calcium movements, not a pharmacokinetic study, and diflunisal is only a comparator agent. |
| PGx | Omura_2021 | not_relevant | 0 | 0 | The paper focuses on the metabolism of dotinurad, and diflunisal is only mentioned as an inhibitor in an in vitro assay, not as the subject of a pharmacogenomic study. |
| popPK | Ray_1983 | relevant | 8 | 2 | The paper describes a PK study of diflunisal using a two-compartment model, but the specific numeric values for clearance, volume, or half-life are not provided in the text, only AUC ratios. |
| popPK | Serlin_1980 | irrelevant | 2 | 0 | The study focuses on the interaction between diflunisal and warfarin, reporting warfarin pharmacokinetic changes and diflunisal concentrations, but does not provide quantitative disposition parameters (CL, V, ka) for diflunisal itself. |
| PGx | Sha_2024 | not_relevant | 0 | 0 | The paper investigates the biochemical properties of a TTR mutation and the in vitro efficacy of diflunisal as a stabilizer, but does not report pharmacokinetic or pharmacodynamic parameters of diflunisal in humans. |
| popPK | Smith_2004 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of GABA(A) receptor modulation and does not report pharmacokinetic parameters for diflunisal. |
| popPK | Squires_1993 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on GABA receptor binding where diflunisal is only a negative comparator and no pharmacokinetic parameters are reported. |
| PD | Squires_1993 | not_relevant | 0 | 0 | The paper reports that diflunisal failed to potentiate the GABA-antagonistic effect of norfloxacin and does not provide any numeric PD parameters or concentration-effect data for diflunisal. |
| popPK | Squires_1999 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay where diflunisal is used only as a comparator compound, and no pharmacokinetic parameters are reported. |
| PD | Squires_1999 | not_relevant | 0 | 0 | The paper focuses on honokiol and magnolol; diflunisal is only mentioned as a comparative monophenol in a qualitative statement without providing specific numeric PD parameters (EC50, Emax) for it. |
| PGx | Takahashi_2014 | not_relevant | 0 | 0 | The paper evaluates the clinical efficacy of diflunisal in patients with a specific TTR mutation but does not report pharmacokinetic or pharmacodynamic parameters of the drug itself. |
| popPK | Tempero_1977 | relevant | 4 | 5 | The paper is a review that reports qualitative PK parameters (half-life, protein binding, excretion) for diflunisal, but lacks the specific compartmental model parameters (CL, V, Q, ka) required for population PK extraction. |
| PD | Tempero_1977 | not_relevant | 2 | 1 | The paper is a review that qualitatively describes pharmacodynamic effects (uricosuria, PG inhibition) and PK properties but does not provide numeric PD parameters or quantitative exposure-response curves. |
| PD | Todd_1985 | not_relevant | 0 | 0 | The text is a qualitative review of suprofen that mentions diflunisal only as a comparator for efficacy, without providing any numeric PD parameters or exposure-response data for diflunisal. |
| PD | Todd_1986 | not_relevant | 0 | 0 | The paper is a review of pirprofen and only mentions diflunisal as a comparator for analgesic activity without providing any specific pharmacodynamic or exposure-response data for diflunisal. |
| PD | Wallace_1987 | not_relevant | 1 | 0 | The text is a review discussing plasma protein binding changes in the elderly and mentions diflunisal only as an example of a drug with altered free fraction, without providing any concentration-effect data, dose-response curves, or numeric PD parameters. |
| popPK | Woodward_1994 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of GABAA receptor modulation, not a pharmacokinetic study, and reports no disposition parameters for diflunisal. |
| popPK | unknown_2017 | irrelevant | 0 | 0 | no_text gate: only 20 chars of text extracted (&lt; 400) |
| PD | unknown_2017 | not_relevant | 0 | 0 | The provided text is a header for conference proceedings and contains no scientific content, data, or analysis regarding diflunisal or any pharmacodynamic relationship. |
| popPK | unknown_2022 | irrelevant | 0 | 0 | no_text gate: only 75 chars of text extracted (&lt; 400) |
| PD | unknown_2022 | not_relevant | 0 | 0 | The provided text is only a title of a conference abstract collection and contains no data, analysis, or mention of diflunisal pharmacodynamics. |
| popPK | Şenkardeş_2016_2 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on diflunisal derivatives for anti-HCV and anticancer activity, containing no pharmacokinetic data. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-21 02:06 UTC</sub>
