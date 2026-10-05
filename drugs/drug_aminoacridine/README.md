<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;aminoacridine&quot;}]"></div>

# aminoacridine

- **generic name:** aminoacridine
- **ATC codes:** `D08AA02`
- **DrugBank:** [DB11561](https://go.drugbank.com/drugs/DB11561) · **PubChem:** [CID 7019](https://pubchem.ncbi.nlm.nih.gov/compound/7019)
- **molar mass:** 194.237 g/mol (C13H10N2) — DrugBank
- **groups:** investigational

## About

Aminoacridine (aminacrine) is an acridine-derivative antiseptic used topically on the skin to prevent or treat local infection. It is classified as investigational in DrugBank, so its current clinical use appears limited or uncertain.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q513937](https://www.wikidata.org/wiki/Q513937) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 17:38 | 2:30 | 0/0/0 | 0/0/0 | 0/0/0 | 4,839/399 | ollama / qwen3.8:27b-mtp-q8_0 | 0 | 2/1 | 0/0 | 0 |

## popPK records

_not available_

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 78 matched, 71 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Galli_1992.pdf` | Galli A et al., In vitro protection of acetylcholineste…, Biochemical pharmacology (1992) | pd | 4 | [10.1016/0006-2952(92)90323-b](https://doi.org/10.1016/0006-2952(92)90323-b) | [1610407](https://www.ncbi.nlm.nih.gov/pubmed/1610407) | metadata signals extractable PD data (EC50) |
| `Järlebark_1992.pdf` | Järlebark L et al., Tetrahydroaminoacridine and related com…, European journal of pharmac… (1992) | pd | 4 | [10.1016/0922-4106(92)90042-t](https://doi.org/10.1016/0922-4106(92)90042-t) | [1541327](https://www.ncbi.nlm.nih.gov/pubmed/1541327) | metadata signals extractable PD data (IC50) |
| `Sobolevskiĭ_2000.pdf` | Sobolevskiĭ AI et al., [Study functional architecture of NMDA…, Rossiiskii fiziologicheskii… (2000) | pd | 4 | not captured | [11081218](https://www.ncbi.nlm.nih.gov/pubmed/11081218) | metadata signals extractable PD data (IC50) |
| `Xu_2025.pdf` | Xu B et al., Quinacrine Inhibits Hepatocellular Carc…, Anti-cancer agents in medic… (2025) | pd | 4 | [10.2174/0118715206304652241105063112](https://doi.org/10.2174/0118715206304652241105063112) | [39844408](https://www.ncbi.nlm.nih.gov/pubmed/39844408) | metadata signals extractable PD data (IC50) |
| `Spaldin_1994.pdf` | Spaldin V et al., The effect of enzyme inhibition on the…, British journal of clinical… (1994) | pgx | 5 | [10.1111/j.1365-2125.1994.tb04316.x](https://doi.org/10.1111/j.1365-2125.1994.tb04316.x) | [7946932](https://www.ncbi.nlm.nih.gov/pubmed/7946932) | metadata signals extractable PGX data (CYP2D6) |

<sub>queue written 2026-09-29T17:38:44.571776+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Albin_1988 | irrelevant | 0 | 0 | The study is an in-vitro receptor binding assay (mechanistic) and does not report pharmacokinetic disposition parameters for aminoacridine. |
| popPK | Allescher_1992 | irrelevant | 0 | 0 | The study is a mechanistic pharmacology paper on neurotensin in rat ileum where 9-aminoacridine is used only as a tool compound, not as the subject of a PK study. |
| PD | Allescher_1992 | not_relevant | 0 | 0 | The paper studies neurotensin pharmacology; 9-aminoacridine is only mentioned as an ineffective control agent without any dose-response or PD parameter analysis. |
| popPK | Anderson_2006 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study focusing on the synthesis and in-vitro anti-malarial activity (IC50) of 9-aminoacridine analogs, containing no pharmacokinetic data. |
| popPK | Antosova_2011 | irrelevant | 0 | 0 | The paper is a structure-activity relationship study on amyloid aggregation and does not report any pharmacokinetic parameters for aminoacridine. |
| popPK | Brooks_2007 | irrelevant | 0 | 0 | The paper describes in silico screening and enzymatic inhibition (IC50) of a 9-aminoacridine compound, containing no pharmacokinetic or disposition parameters. |
| popPK | Carland_2010 | irrelevant | 0 | 0 | The paper focuses on the synthesis, cytotoxicity, and DNA binding of platinum-aminoacridine conjugates, containing no pharmacokinetic data. |
| popPK | Clarke_2009 | irrelevant | 0 | 0 | The paper describes an analytical method for characterizing glycans on monoclonal antibodies using an aminoacridine derivative as a label, not a pharmacokinetic study of aminoacridine as a drug. |
| popPK | Eberle_2009 | irrelevant | 0 | 0 | The paper focuses on the synthesis and in-vitro antiprotozoal activity of mepacrine-based inhibitors, with no pharmacokinetic parameters reported for aminoacridine. |
| PD | Eberle_2009 | not_relevant | 3 | 2 | The paper reports static IC50 and Ki values for enzyme inhibition and parasite viability, but does not provide time-dependent concentration-effect data, PK/PD modeling, or dynamic PD parameters (e.g., Emax, EC50 over time) required for an extractable pharmacodynamic relationship. |
| popPK | El-Sayed_2022 | irrelevant | 0 | 0 | The study focuses on the synthesis and in vitro antimicrobial/antitumor evaluation of 9-aminoacridine conjugates, containing no pharmacokinetic data or disposition parameters. |
| popPK | Ferguson_2015 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of antiproliferative activity and does not report pharmacokinetic parameters for aminoacridine. |
| popPK | Fitten_1988 | irrelevant | 2 | 0 | The study focuses on behavioral effects of tacrine (1,2,3,4-tetrahydro-9-aminoacridine) in monkeys and does not report quantitative pharmacokinetic parameters (CL, V, etc.) for the specific drug aminoacridine. |
| PD | Fitten_1988 | not_relevant | 4 | 2 | The study establishes a dose-response relationship and identifies an optimal dose (5.0 mg/day) based on serum concentrations, but the provided text does not contain the specific numeric concentration-effect data points or PD parameters (e.g., EC50, Emax) required to derive a quantitative PD curve. |
| popPK | Forsberg_2011 | irrelevant | 0 | 0 | The paper describes a method for screening acetylcholinesterase inhibitors and reports IC50/Ki values for 9-aminoacridine, but contains no pharmacokinetic disposition parameters (CL, V, ka, etc.). |
| popPK | Galli_1992 | irrelevant | 0 | 0 | no_text gate: only 127 chars of text extracted (&lt; 400) |
| popPK | Gayle_2002 | irrelevant | 0 | 0 | The paper describes in-vitro binding and inhibition of an RNA-protein complex by an aminoacridine derivative, reporting no pharmacokinetic parameters. |
| popPK | Gourdie_1990 | irrelevant | 0 | 0 | The paper focuses on structure-activity relationships and cytotoxicity of acridine-linked aniline mustards, not the pharmacokinetics of aminoacridine. |
| PD | Gourdie_1990 | not_relevant | 3 | 2 | The paper reports structure-activity relationships and IC50 values for cytotoxicity, but does not provide a pharmacokinetic-pharmacodynamic (PK/PD) model or exposure-response analysis with numeric PD parameters like Emax or EC50 derived from concentration-time data. |
| popPK | Grzesiek_1988 | irrelevant | 0 | 0 | The study investigates the biophysical properties of 9-aminoacridine as a pH probe in liposomes, not its pharmacokinetic disposition parameters. |
| PD | Grzesiek_1988 | not_relevant | 0 | 0 | The paper investigates the biophysical mechanism of 9-aminoacridine as a pH probe in liposomes (binding, dimerization, fluorescence kinetics) rather than a pharmacodynamic drug response in a biological system. |
| popPK | He_2008 | irrelevant | 0 | 0 | The paper focuses on the synthesis and cytotoxicity of aminoacridine derivatives, reporting no pharmacokinetic parameters. |
| popPK | Healy_2006 | irrelevant | 0 | 0 | The paper is an in-vitro genotoxicity study using 9-aminoacridine as a mutagen, not a pharmacokinetic study, and contains no PK parameters. |
| popPK | Hess_2005 | irrelevant | 0 | 0 | The paper reports in-vitro cytotoxicity (IC50) data for platinum-acridine conjugates, not pharmacokinetic parameters for aminoacridine. |
| popPK | Hicks_2001 | irrelevant | 2 | 0 | The study focuses on extravascular transport and diffusion parameters for DACA (with aminoacridine/DAPA as a comparator) rather than reporting systemic population pharmacokinetic parameters (CL, V, ka) for aminoacridine. |
| popPK | Holmes_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of platinum complexes containing an aminoacridine moiety, reporting IC50 values rather than pharmacokinetic parameters. |
| popPK | Ishigami-Yuasa_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on WNK signaling inhibitors and does not report any pharmacokinetic parameters for aminoacridine. |
| popPK | Jarrott_2017 | irrelevant | 0 | 0 | The paper discusses tacrine, not aminoacridine, and contains no pharmacokinetic parameters for the target drug. |
| popPK | Jehn_1989 | irrelevant | 2 | 0 | The paper is a review of leukemia treatments that mentions amsacrine (an aminoacridine) but provides no quantitative pharmacokinetic parameter values (CL, V, etc.), only qualitative descriptions of clearance. |
| popPK | Jeong_2024 | irrelevant | 0 | 0 | The study focuses on chicoric acid, not aminoacridine. |
| PD | Jeong_2024 | not_relevant | 0 | 0 | The paper focuses on the pharmacokinetics of chicoric acid, not aminoacridine, and contains no pharmacodynamic or exposure-response data. |
| popPK | Jin_2012 | irrelevant | 0 | 0 | The study investigates MBAA (6-chloro-2-methoxy-N-(2-methoxybenzyl) acridin-9-amine), a different compound, rather than the specific drug aminoacridine. |
| popPK | Jones_2023 | irrelevant | 0 | 0 | The paper is an in-vitro medicinal chemistry study reporting antiviral activity (IC50) and cytotoxicity, not pharmacokinetic parameters for aminoacridine. |
| PD | Jones_2023 | not_relevant | 3 | 2 | The paper reports single-point IC50 and CC50 values for antiviral activity and cytotoxicity, but does not provide full dose-response curves, Emax, or any PK/PD modeling parameters. |
| popPK | Järlebark_1992 | irrelevant | 0 | 0 | no_text gate: only 78 chars of text extracted (&lt; 400) |
| PD | Järlebark_1992 | not_relevant | 0 | 0 | The paper reports on the interference of the drug with fluorescent dyes (fura-2/indo-1), which is a methodological artifact, not a pharmacodynamic exposure-response relationship. |
| popPK | Kaniakova_2018 | irrelevant | 0 | 0 | The paper focuses on the mechanism of action and neuroprotective activity of 7-methoxytacrine (a tacrine derivative) and does not report pharmacokinetic parameters for aminoacridine. |
| popPK | Kukan_1994 | irrelevant | 0 | 0 | The study investigates the pharmacokinetics of tacrine, not aminoacridine. |
| PGx | Mayer_2007 | not_relevant | 0 | 0 | The paper describes a fluorescence assay for measuring CYP-mediated N-dealkylation of acridine derivatives but does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| popPK | Munawar_2020 | irrelevant | 0 | 0 | The paper focuses on molecular docking, synthesis, and in vitro biological evaluation (AChE inhibition) of aminoacridine derivatives, containing no pharmacokinetic data. |
| popPK | Nagaeva_2015 | irrelevant | 0 | 0 | The paper is an in-vitro electrophysiology study investigating the pharmacological effect of 9-aminoacridine on ion channels, not a pharmacokinetic study. |
| popPK | Ntuli_2018 | irrelevant | 0 | 0 | The paper is a mutagenicity study using 9-aminoacridine as a diagnostic mutagen, not a pharmacokinetic study of aminoacridine. |
| PD | Ntuli_2018 | not_relevant | 0 | 0 | The paper investigates the mutagenic and antimutagenic activity of Sutherlandia frutescens extracts and compounds, not the pharmacodynamics of aminoacridine. |
| popPK | Osborne_1996 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of tetrahydro-9-aminoacridine's effects on neuronal currents and does not report any pharmacokinetic parameters. |
| popPK | Phanstiel_2000 | irrelevant | 0 | 0 | The paper is a mechanistic study on the synthesis and cytotoxicity of polyamine-acridine conjugates, reporting no pharmacokinetic parameters for aminoacridine. |
| PD | Phanstiel_2000 | not_relevant | 3 | 2 | The paper reports qualitative comparisons of IC50 values and inhibition at a single concentration (10 microM) for a series of analogs, but does not provide a dose-response curve or specific numeric PD parameters for aminoacridine itself. |
| popPK | Ritchie_1988 | irrelevant | 0 | 0 | The paper is a mechanistic study on mutagenesis in Salmonella typhimurium and does not report any pharmacokinetic parameters for aminoacridine. |
| PD | Ritchie_1988 | not_relevant | 3 | 2 | The paper reports qualitative dose-response shifts (e.g., 2-fold higher concentration required) for a mutagenicity assay in bacterial strains, but does not provide numeric PD parameters (Emax, EC50) or a formal PK/PD model for the drug. |
| popPK | Ryan_2013 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on efficacy and cell death pathways, reporting no pharmacokinetic parameters for aminoacridine. |
| popPK | Sládeková_2025 | irrelevant | 0 | 0 | The study focuses on the drug FKK6, not aminoacridine, and does not report pharmacokinetic parameters for the target drug. |
| PD | Sládeková_2025 | not_relevant | 0 | 0 | The paper reports qualitative efficacy and safety data for FKK6 (not aminoacridine) at fixed doses without providing concentration-effect curves, PK/PD modeling, or numeric PD parameters like Emax or EC50. |
| popPK | Smith_1997 | irrelevant | 0 | 0 | The study focuses on the pharmacological activity and safety of P10358, mentioning aminoacridine only as a structural comparison for hepatotoxicity, and contains no pharmacokinetic parameters for aminoacridine. |
| popPK | Smolen_1987 | irrelevant | 0 | 0 | The paper studies neutrophil secretion kinetics using 9-aminoacridine as a fluorescent probe, not as a subject drug for pharmacokinetic analysis. |
| popPK | Sobolevskiĭ_2000 | irrelevant | 0 | 0 | no_text gate: only 77 chars of text extracted (&lt; 400) |
| PD | Sobolevskiĭ_2000 | not_relevant | 0 | 0 | The paper focuses on the functional architecture of NMDA receptors and does not report pharmacodynamic or exposure-response data for aminoacridine. |
| popPK | Solomon_2017 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on novel quinacrine analogs (not aminoacridine itself) and reports only in-vitro cytotoxicity and mechanistic data, with no pharmacokinetic parameters. |
| PGx | Spaldin_1994 | not_relevant | 2 | 5 | The study examines inter-individual variability in tacrine metabolism and enzyme inhibition in vitro, but does not report a specific pharmacogenomic effect (genotype-to-phenotype mapping) on a PK/PD parameter. |
| PGx | Spaldin_1995 | not_relevant | 0 | 0 | The study investigates tacrine as a probe substrate for CYP1A2 activity in vitro and does not report pharmacogenomic effects of gene variants on the PK/PD of aminoacridine. |
| popPK | Styrt_1985 | irrelevant | 0 | 0 | The paper is a mechanistic study on neutrophil membrane lysis using 9-aminoacridine as a diagnostic tracer, not a pharmacokinetic study of aminoacridine. |
| PD | Styrt_1985 | not_relevant | 0 | 0 | The paper studies the detergent digitonin, not the drug aminoacridine; aminoacridine is only mentioned as a fluorescent tracer to validate subcellular localization. |
| popPK | Tonelli_2011 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral study of acridine derivatives and does not report any pharmacokinetic parameters for aminoacridine. |
| popPK | Traykov_1999 | irrelevant | 2 | 1 | The study focuses on cerebral PET imaging and regional brain kinetics of a radiolabeled analog (MTHA) rather than reporting systemic population pharmacokinetic parameters (CL, V, Q) for the drug aminoacridine. |
| popPK | Vivas_1993 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic analysis of receptor binding and signaling, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Wakelin_2003 | irrelevant | 0 | 0 | The paper is a mechanistic study on DNA binding and cytotoxicity of bisintercalating diacridines, containing no pharmacokinetic parameters for aminoacridine. |
| popPK | Wang_2001 | irrelevant | 0 | 0 | The paper is a mechanistic study on the synthesis and topoisomerase II inhibitory properties of polyamine-acridine conjugates, containing no pharmacokinetic data for aminoacridine. |
| popPK | Xu_2025 | irrelevant | 0 | 0 | no_text gate: only 99 chars of text extracted (&lt; 400) |
| PD | Xu_2025 | not_relevant | 0 | 0 | The paper focuses on quinacrine (not aminoacridine) and does not report extractable numeric PD parameters or exposure-response relationships for the specified drug. |
| popPK | Young_1981 | irrelevant | 0 | 0 | The paper is a mechanistic study on frameshift mutagenesis in Salmonella, not a pharmacokinetic study, and contains no disposition parameters for aminoacridine. |
| PD | Young_1981 | not_relevant | 3 | 1 | The paper discusses qualitative dose-response behavior and structural selectivity in the Ames test but does not provide numeric PD parameters or extractable concentration-effect curves. |
| popPK | Zhang_2013 | irrelevant | 0 | 0 | Aminoacridine is used only as an internal standard for the pharmacokinetic study of harmine and harmaline, not as the subject drug. |
| popPK | al-Jafari_1996 | irrelevant | 0 | 0 | The study is an in-vitro enzymatic inhibition assay of acetylcholinesterase, not a pharmacokinetic study, and reports no disposition parameters for aminoacridine. |
| popPK | de_1988 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of GABA release inhibition and does not report pharmacokinetic parameters for aminoacridine. |
| popPK | de_2006 | irrelevant | 0 | 0 | The paper describes an in-vitro assay for acetylcholinesterase inhibition and reports IC50 values, not pharmacokinetic parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
