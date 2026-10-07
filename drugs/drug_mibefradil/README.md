<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;mibefradil&quot;}]"></div>

# mibefradil

- **generic name:** mibefradil
- **ATC codes:** `C08CX01`
- **DrugBank:** [DB01388](https://go.drugbank.com/drugs/DB01388) · **PubChem:** [CID 60663](https://pubchem.ncbi.nlm.nih.gov/compound/60663)
- **molar mass:** 495.6287 g/mol (C29H38FN3O3) — DrugBank
- **groups:** approved, investigational, withdrawn

## About

Mibefradil is a calcium channel blocker that was used to treat high blood pressure and angina. It has been withdrawn from the market because it caused dangerous interactions with other medicines.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q6827783](https://www.wikidata.org/wiki/Q6827783) and the WHO ATC classification; not checked by a person.</small>

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mibefradil | parent | 495.629 | C29H38FN3O3 | DrugBank | [60663](https://pubchem.ncbi.nlm.nih.gov/compound/60663) | Welker_1998, Welker_1998_2 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 04:13 | 41:24 | 0/0/2 | 4/1/0 | 0/0/0 | 421,485/115,151 | ollama / qwen3.8:27b-mtp-q8_0 | 10 | 1/5 | 9/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--stale">stale</span> <span class="pk-badge pk-badge--orange" title="a second model re-read this paper; the two readings agree on 0.0 of the compared fields. The first reading is what the record holds.">cross-check: partial</span><br><sub>STALE — current validate: needs_review</sub><br><sub>blocking: disposition incomplete — only clearance/elimination extracted — the engineer ne…</sub><br><sub>route_to: `human_review`</sub> | [Welker_1998_reference](drugs/drug_mibefradil/Mibefradil_Welker1998_reference.md) | — | 1-compartment (no model) | 4 | Welker HA et al., Mibefradil pharmacokinetic and pharmaco…, International journal of cl… (1998) | — |
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.231). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: disposition incomplete — no disposition parameter from this paper; review-gap-f…</sub><br><sub>route_to: `human_review`</sub> | [Welker_1998_2_reference](drugs/drug_mibefradil/Mibefradil_Welker1998v2_reference.md) | — | 1-compartment (no model) | 3 | Welker HA et al., Clinical pharmacokinetics of mibefradil, Clinical pharmacokinetics (1998) | [10.2165/00003088-199835060-00001](https://doi.org/10.2165/00003088-199835060-00001) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chouabe_2000_HERG](drugs/drug_mibefradil/pd_Chouabe_2000_HERG.md) | HERG K+ channel current ← mibefradil · direct Emax (saturable) effect | — | Chouabe C et al., Effects of calcium channel blockers on…, Therapie (2000) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Chouabe_2000_KvLQT1_IsK](drugs/drug_mibefradil/pd_Chouabe_2000_KvLQT1_IsK.md) | KvLQT1-IsK K+ channel current ← mibefradil · direct Emax (saturable) effect | — | Chouabe C et al., Effects of calcium channel blockers on…, Therapie (2000) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Hoischen_1998_contraction_amplitude](drugs/drug_mibefradil/pd_Hoischen_1998_contraction_amplitude.md) | contraction amplitude ← mibefradil · direct Emax (saturable) effect | — | Hoischen S et al., T- and L-type Ca2+-channel antagonists…, Journal of cardiovascular p… (1998) | [10.1097/00005344-199808000-00022](https://doi.org/10.1097/00005344-199808000-00022) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Perchenet_2000_hKv1_5](drugs/drug_mibefradil/pd_Perchenet_2000_hKv1_5.md) | hKv1.5 current ← mibefradil · inhibition effect | — | Perchenet L et al., Characterization of mibefradil block of…, The Journal of pharmacology… (2000) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Todorovic_1998_T_current](drugs/drug_mibefradil/pd_Todorovic_1998_T_current.md) | T-type Ca2+ current ← mibefradil · direct sigmoid Emax (Hill) effect | — | Todorovic SM et al., Pharmacological properties of T-type Ca…, Journal of neurophysiology (1998) | [10.1152/jn.1998.79.1.240](https://doi.org/10.1152/jn.1998.79.1.240) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span> | [Mullan_2017_Relative_Dilation](drugs/drug_mibefradil/pd_Mullan_2017_Relative_Dilation.md) | Relative Dilation ← mibefradil · direct sigmoid Emax (Hill) effect | — | Mullan B et al., T-type voltage-gated Ca2+ channels do n…, Pharmacology research & per… (2017) | [10.1002/prp2.320](https://doi.org/10.1002/prp2.320) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=mibefradil) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor/substrate | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor/substrate | DrugBank actor |
| metabolism | brain | `CYP2D6` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` inhibitor | DrugBank actor |
| metabolism | liver | `CYP1A2` inhibitor, `CYP2D6` inhibitor, `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor, `CYP3A7` inhibitor | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `CYP3A5` inhibitor | DrugBank actor |
| — | adrenal gland | `CYP11B1` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1F (inhibitor), CACNA1G (inhibitor), CACNA1H (inhibitor), CACNA1I (inhibitor), CACNA1S (inhibitor), CACNB1 (inhibitor), CACNB2 (inhibitor), CACNB3 (inhibitor), CACNB4 (inhibitor), CYP11B2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 201 matched, 92 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 2  ·  rejected 0  ·  stale 1
- **scholar-agent fallback query used:** not captured

## Full text wanted

_2 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Welker_1998_2.pdf` | Welker HA et al., Clinical pharmacokinetics of mibefradil, Clinical pharmacokinetics (1998) | popPK | 10 | [10.2165/00003088-199835060-00001](https://doi.org/10.2165/00003088-199835060-00001) | [9884814](https://pubmed.ncbi.nlm.nih.gov/9884814) | The text explicitly reports quantitative pharmacokinetic parameters for mibefradil, including clearance (5.7-7.5 L/h), volume of distribution (180 L), and half-life (22 hours). |
| `Marsh_2006.pdf` | Marsh RE et al., Fractal michaelis-menten kinetics under…, Pharmaceutical research (2006) | popPK | 8 | [10.1007/s11095-006-9090-6](https://doi.org/10.1007/s11095-006-9090-6) | [17063399](https://pubmed.ncbi.nlm.nih.gov/17063399) | The paper describes a pharmacokinetic model for mibefradil in dogs, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-07T03:40:58.350685+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Andersson_2012 | irrelevant | 0 | 0 | The paper is a mechanistic study on TRPA1 and hydrogen sulfide where mibefradil is used only as a pharmacological tool (T-type calcium channel inhibitor), with no pharmacokinetic parameters reported. |
| PGx | Backman_1999 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (mibefradil inhibiting CYP3A4) in a general population, not the effect of a specific gene variant or genotype on pharmacokinetics or pharmacodynamics. |
| popPK | Bader_2006 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of ion channels in HeLa cells where mibefradil is used only as a pharmacological tool to block volume-regulated anion channels, not as a subject of pharmacokinetic analysis. |
| PGx | Bohets_2000 | not_relevant | 0 | 0 | The paper focuses on the metabolism of cisapride and drug-drug interactions, not the pharmacogenomics of mibefradil. |
| popPK | Brixius_1998 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of mibefradil's effects on cardiac tissue and does not report pharmacokinetic parameters. |
| PGx | Bui_2008 | not_relevant | 0 | 0 | The paper compares the CYP inhibition profiles of mibefradil and its derivative NNC55-0396 but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Burt_2012 | not_relevant | 0 | 0 | The paper investigates the mechanism of CYP3A4 inhibition by mibefradil using recombinant enzymes and does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Chouabe_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation of channel blocking (EC50 values) and does not report pharmacokinetic disposition parameters. |
| popPK | Chouabe_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology assay measuring channel blocking potency (EC50), not pharmacokinetic disposition parameters. |
| popPK | Duggan_2000 | irrelevant | 0 | 0 | The study is a pharmacodynamic/mechanistic investigation of mibefradil's effect on aortic contractions in rats, not a pharmacokinetic study reporting disposition parameters. |
| PGx | Foti_2011 | not_relevant | 0 | 0 | The paper describes the in vitro mechanism of CYP3A4 inactivation by mibefradil (heme destruction) but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Fu_2026 | irrelevant | 0 | 0 | This is a review article discussing metabolite-mediated drug-drug interactions and regulatory guidelines, with no original quantitative pharmacokinetic parameter values for mibefradil. |
| PGx | Haarhoff_2017 | not_relevant | 0 | 0 | The paper compares CYP3A inhibition in cynomolgus monkeys vs. humans and does not report any pharmacogenomic effects (gene variants) on mibefradil's PK or PD. |
| popPK | Hansen_2001 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium channel expression and function in renal vessels, using mibefradil only as a pharmacological antagonist, and does not report any pharmacokinetic parameters for mibefradil. |
| popPK | Hansen_2011 | irrelevant | 0 | 0 | The study is a mechanistic investigation of calcium channel function in human renal vasculature, not a pharmacokinetic study of mibefradil. |
| popPK | Hashiguchi_2017 | irrelevant | 0 | 0 | The paper is a mechanistic electrophysiology study on ghrelin and NPY neurons where mibefradil is used only as a pharmacological tool to block T-type calcium channels, not as the subject of a pharmacokinetic analysis. |
| popPK | Hoischen_1998 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of cardiac contractility in guinea pig myocytes and does not report pharmacokinetic parameters. |
| PGx | Küng_1995 | not_relevant | 0 | 0 | The paper investigates the pharmacodynamic effects of mibefradil on porcine coronary arteries in an ex vivo setting and does not report any pharmacogenomic effects (gene variants/genotypes) on PK or PD parameters. |
| popPK | Lenglet_2002 | irrelevant | 0 | 0 | The study is a mechanistic investigation of 5-HT signaling in rat glomerulosa cells where mibefradil is used only as a T-type calcium channel blocker, with no pharmacokinetic parameters reported. |
| PGx | Lim_2005 | not_relevant | 0 | 0 | The paper reports in vitro mechanism-based inactivation of CYP enzymes by mibefradil, not a pharmacogenomic effect on PK/PD parameters. |
| PGx | Ma_2000 | not_relevant | 0 | 0 | The paper investigates CYP3A inhibition by calcium channel blockers in vitro and does not report any pharmacogenomic effects on the PK or PD of mibefradil. |
| popPK | Marsh_2006 | relevant | 8 | 0 | The paper describes a pharmacokinetic model for mibefradil in dogs, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | McNaughton_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper focusing on the mechanism of action of BW619C89, using mibefradil only as a positive control, and reports no pharmacokinetic parameters. |
| PGx | Miller_1998 | not_relevant | 0 | 0 | The paper is a review of fibrates and mentions mibefradil only as a CYP3A4 inhibitor in the context of drug interactions, without reporting any pharmacogenomic effects on mibefradil's PK or PD. |
| popPK | Mullan_2017 | irrelevant | 0 | 0 | The study is a mechanistic investigation of T-type calcium channels in mouse arteries using mibefradil as a pharmacological tool, and it reports no pharmacokinetic parameters (clearance, volume, half-life) for mibefradil. |
| popPK | Nagar_2024 | irrelevant | 0 | 0 | The paper is a methodological study on PBPK modeling frameworks and does not report specific pharmacokinetic parameters for mibefradil. |
| popPK | Perchenet_2000 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological analysis of mibefradil's effect on ion channels, not a pharmacokinetic study. |
| PGx | Prueksaritanont_1999 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (mibefradil inhibiting statin metabolism) in vitro, not the effect of a gene variant on mibefradil's PK/PD. |
| PGx | Rougée_2023 | not_relevant | 0 | 0 | The paper investigates the effect of allosteric modulators on CYP3A4 inhibition, not the impact of genetic variants on mibefradil pharmacokinetics or pharmacodynamics. |
| PGx | Sevrioukova_2019 | not_relevant | 0 | 0 | The paper describes the structural interaction of mibefradil with CYP3A4 but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Sun_2008 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of T-type calcium channel interactions with toxins, using mibefradil only as a pharmacological tool to characterize channel properties, not as a subject of pharmacokinetic analysis. |
| popPK | Todorovic_1998 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiological investigation of T-type calcium channel blockade in rat neurons, not a pharmacokinetic study of mibefradil. |
| PGx | Varis_2000 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (mibefradil inhibiting CYP3A4 affecting methylprednisolone PK) in a general population, not a pharmacogenomic effect based on gene variants. |
| PGx | Veronese_2003 | not_relevant | 0 | 0 | The study investigates the effect of mibefradil on CYP3A4 activity in a general volunteer population, not the effect of a specific gene variant on mibefradil's PK/PD. |
| PGx | Wang_1999 | not_relevant | 0 | 0 | The paper reports in vitro inhibition of CYP3A4 by mibefradil but does not investigate the effect of any gene variant or genotype on mibefradil's pharmacokinetics or pharmacodynamics. |
| PD | Welker_1998 | not_relevant | 1 | 0 | The paper is a clinical pharmacokinetics review that mentions a population PK/PD analysis was conducted but only reports PK parameters (CL, Vd, t1/2) and qualitative effects (CYP3A4 inhibition), without providing any numeric PD parameters (Emax, EC50, etc.) or concentration-effect curves. |
| PGx | Welker_1998_2 | not_relevant | 0 | 0 | The paper describes general clinical pharmacokinetics and CYP3A4 inhibition but does not report any pharmacogenomic effects (gene variants) on PK parameters. |
| popPK | Xia_2003 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology paper characterizing a cell line, using mibefradil only as a pharmacological tool to inhibit calcium channels, not as a subject of pharmacokinetic analysis. |
| popPK | Xia_2004 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology and molecular biology investigation of calcium channels in HL-1 cells, using mibefradil only as a pharmacological tool to characterize T-type channels, and reports no pharmacokinetic parameters. |
| PGx | Yamazoe_2020 | not_relevant | 0 | 0 | The paper discusses the structural binding mechanisms of mibefradil to CYP3A4 but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Yeo_2001 | not_relevant | 0 | 0 | The paper investigates drug-drug interactions (verapamil/diltiazem vs simvastatin) and does not report any pharmacogenomic effects (gene variants) on mibefradil. |
| PGx | Zhou_2008 | not_relevant | 0 | 0 | The paper is a review on CYP3A4 mechanism-based inhibition and does not report any pharmacogenomic effects (gene variants) on mibefradil PK/PD. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 03:41 UTC</sub>
