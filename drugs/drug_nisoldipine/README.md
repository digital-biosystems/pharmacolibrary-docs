<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C08C&quot;,&quot;href&quot;:&quot;atc/C08C.md&quot;},{&quot;label&quot;:&quot;nisoldipine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Nisoldipine_Huang1990_reference&quot;,&quot;label&quot;:&quot;Huang_1990_reference&quot;,&quot;href&quot;:&quot;drugs/drug_nisoldipine/Nisoldipine_Huang1990_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# nisoldipine

- **generic name:** nisoldipine
- **ATC codes:** `C08CA07`
- **DrugBank:** [DB00401](https://go.drugbank.com/drugs/DB00401) · **PubChem:** [CID 4499](https://pubchem.ncbi.nlm.nih.gov/compound/4499)
- **molar mass:** 388.4144 g/mol (C20H24N2O6) — DrugBank
- **groups:** approved

## About

**Description.** Nisoldipine is a 1,4-dihydropyridine calcium channel blocker. It acts primarily on vascular smooth muscle cells by stabilizing voltage-gated L-type calcium channels in their inactive conformation. By inhibiting the influx of calcium in smooth muscle cells, nisoldipine prevents calcium-dependent smooth muscle contraction and subsequent vasoconstriction. Nisoldipine may be used in alone or in combination with other agents in the management of hypertension.

**Indication.** For the treatment of hypertension. It may be used alone or in combination with other antihypertensive agents.

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| nisoldipine | parent | 388.414 | C20H24N2O6 | DrugBank | [4499](https://pubchem.ncbi.nlm.nih.gov/compound/4499) | Huang_1990 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 11:31 | 15:27 | 0/1/0 | 0/0/0 | 0/0/0 | 131,877/13,407 | ollama / qwen3.8:27b-mtp-q8_0 | 5 | 2/3 | 5/0 | 0 |

## popPK records

| status | detail | model structure | params | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Huang_1990_reference](drugs/drug_nisoldipine/Nisoldipine_Huang1990_reference.md) | 1-compartment (no model) | 7 | Huang Y et al., Pharmacokinetics of m-nisoldipine in ra…, Zhongguo yao li xue bao = A… (1990) | — |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=nisoldipine) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | bile duct | <sub>“…on with 87% of the radiolabeled drug recovered in urine and feces. The absolute bioavailab…”</sub> | prose |
| absorption | blood-brain barrier | `ABCB1` inhibitor | DrugBank actor |
| absorption | kidney | `ABCB1` inhibitor | DrugBank actor |
| absorption | liver | `ABCB1` inhibitor | DrugBank actor |
| absorption | placenta | `ABCB1` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCB1` inhibitor | DrugBank actor |
| absorption | testis | `ABCB1` inhibitor | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate, `CYP3A7` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | <sub>“…Although 60-80% of an oral dose undergoes urinary excretion, only traces of unchanged niso…”</sub> | prose |

<sub>Actors without a tissue in the table: CACNA1C (inhibitor), CACNA1D (inhibitor), CACNA1S (inhibitor), CACNA2D1 (inhibitor), CACNB2 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 54 matched, 45 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_16 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Huang_1990.pdf` | Huang Y et al., Pharmacokinetics of m-nisoldipine in ra…, Zhongguo yao li xue bao = A… (1990) | popPK | 10 | not captured | [2130609](https://pubmed.ncbi.nlm.nih.gov/2130609) | The paper reports quantitative pharmacokinetic parameters (CL, Vd, half-lives) for m-nisoldipine (a nisoldipine metabolite) in animals, with all numeric values explicitly present in the text. |
| `Krosuri_2026.pdf` | Krosuri P et al., Pharmacokinetic Studies and Toxicity As…, Cardiovascular & hematologi… (2026) | popPK | 8 | [10.2174/011871529X435644260126080638](https://doi.org/10.2174/011871529X435644260126080638) | [41941298](https://pubmed.ncbi.nlm.nih.gov/41941298) | The study reports pharmacokinetic parameters for nisoldipine analogues, but specific numeric values for clearance, volume, or half-life for nisoldipine itself are not explicitly listed in the provided text (only relative bioavailability and analogue data are detailed). |
| `Schaefer_1997.pdf` | Schaefer HG et al., Pharmacokinetic-pharmacodynamic modelli…, European journal of clinica… (1997) | pd | 5 | [10.1007/s002280050233](https://doi.org/10.1007/s002280050233) | [9112062](https://www.ncbi.nlm.nih.gov/pubmed/9112062) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `van_1988.pdf` | van Harten J et al., Pharmacokinetics and hemodynamic effect…, Clinical pharmacology and t… (1988) | pd | 5 | [10.1038/clpt.1988.40](https://doi.org/10.1038/clpt.1988.40) | [3345623](https://www.ncbi.nlm.nih.gov/pubmed/3345623) | metadata signals extractable PD data (sigmoid) |
| `Liu_1994.pdf` | Liu JJ et al., Synergistic effect of nisoldipine and n…, The Journal of pharmacology… (1994) | pd | 4 | not captured | [8301585](https://www.ncbi.nlm.nih.gov/pubmed/8301585) | metadata signals extractable PD data (EC50) |
| `Pijl_1993.pdf` | Pijl AJ et al., Hemodynamic and antiischemic effects of…, Journal of cardiovascular p… (1993) | pd | 4 | [10.1097/00005344-199309000-00006](https://doi.org/10.1097/00005344-199309000-00006) | [7504127](https://www.ncbi.nlm.nih.gov/pubmed/7504127) | metadata signals extractable PD data (EC50) |
| `Zhang_1994.pdf` | Zhang ZH et al., Ketanserin inhibits depolarization-acti…, Circulation research (1994) | pd | 4 | [10.1161/01.res.75.4.711](https://doi.org/10.1161/01.res.75.4.711) | [7923617](https://www.ncbi.nlm.nih.gov/pubmed/7923617) | metadata signals extractable PD data (EC50) |
| `Nagaya_2025.pdf` | Nagaya Y et al., In vitro-in vivo scaling of cytochrome…, Drug metabolism and disposi… (2025) | pgx | 8 | [10.1016/j.dmd.2025.100065](https://doi.org/10.1016/j.dmd.2025.100065) | [40199158](https://www.ncbi.nlm.nih.gov/pubmed/40199158) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |
| `Bailey_2004.pdf` | Bailey DG et al., Interactions between grapefruit juice a…, American journal of cardiov… (2004) | pgx | 7 | [10.2165/00129784-200404050-00002](https://doi.org/10.2165/00129784-200404050-00002) | [15449971](https://www.ncbi.nlm.nih.gov/pubmed/15449971) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Heinig_1998.pdf` | Heinig R, Clinical pharmacokinetics of nisoldipin…, Clinical pharmacokinetics (1998) | pgx | 7 | [10.2165/00003088-199835030-00003](https://doi.org/10.2165/00003088-199835030-00003) | [9784933](https://www.ncbi.nlm.nih.gov/pubmed/9784933) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Hisaka_2009.pdf` | Hisaka A et al., A proposal for a pharmacokinetic intera…, Clinical pharmacokinetics (2009) | pgx | 7 | [10.2165/11317220-000000000-00000](https://doi.org/10.2165/11317220-000000000-00000) | [19743887](https://www.ncbi.nlm.nih.gov/pubmed/19743887) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Komura_2002.pdf` | Komura H et al., Species difference in nisoldipine oxida…, Drug metabolism and pharmac… (2002) | pgx | 7 | [10.2133/dmpk.17.427](https://doi.org/10.2133/dmpk.17.427) | [15618694](https://www.ncbi.nlm.nih.gov/pubmed/15618694) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Marques_2002.pdf` | Marques MP et al., Dynamic and kinetic disposition of niso…, European journal of clinica… (2002) | pgx | 7 | [10.1007/s00228-002-0528-4](https://doi.org/10.1007/s00228-002-0528-4) | [12483453](https://www.ncbi.nlm.nih.gov/pubmed/12483453) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ohno_2007.pdf` | Ohno Y et al., General framework for the quantitative…, Clinical pharmacokinetics (2007) | pgx | 7 | [10.2165/00003088-200746080-00005](https://doi.org/10.2165/00003088-200746080-00005) | [17655375](https://www.ncbi.nlm.nih.gov/pubmed/17655375) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Ozdemir_1998.pdf` | Ozdemir M et al., Interaction between grapefruit juice an…, European journal of drug me… (1998) | pgx | 7 | [10.1007/BF03189827](https://doi.org/10.1007/BF03189827) | [9625273](https://www.ncbi.nlm.nih.gov/pubmed/9625273) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Sun_2018.pdf` | Sun Y et al., Effects of m-nisoldipine on the activit…, Xenobiotica; the fate of fo… (2018) | pgx | 7 | [10.1080/00498254.2017.1358831](https://doi.org/10.1080/00498254.2017.1358831) | [28756727](https://www.ncbi.nlm.nih.gov/pubmed/28756727) | metadata signals extractable PGX data (CYP1A2, PK/PD-context) |

<sub>queue written 2026-09-29T11:24:13.393303+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bai_2005 | irrelevant | 0 | 0 | The study is an in-vitro electrophysiology investigation where nisoldipine is used only as a pharmacological tool to block calcium channels, not as the subject of pharmacokinetic analysis. |
| PD | Bai_2005 | not_relevant | 0 | 0 | The paper investigates the electrophysiological effects of testosterone on cardiac myocytes; nisoldipine is used only as a tool compound (inhibitor) to block L-type calcium currents, not as the subject of a pharmacodynamic or exposure-response analysis. |
| PGx | Bailey_2004 | not_relevant | 0 | 0 | The paper discusses drug-food interactions (grapefruit juice) and does not report any pharmacogenomic effects (gene variants) on nisoldipine PK/PD. |
| popPK | Balligand_1994 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of vascular contractions and does not report any pharmacokinetic parameters for nisoldipine. |
| PGx | Fuhr_1998 | not_relevant | 0 | 0 | The paper discusses drug-drug interactions with grapefruit juice, not pharmacogenomic effects of gene variants on nisoldipine PK/PD. |
| popPK | Hegyi_2012 | irrelevant | 0 | 0 | The study is an electrophysiological investigation of tetrodotoxin effects on calcium channels where nisoldipine is used only as a diagnostic agent to confirm current identity, with no pharmacokinetic parameters reported. |
| PD | Hegyi_2012 | not_relevant | 0 | 0 | The paper studies the pharmacology of Tetrodotoxin (TTX) on calcium channels; nisoldipine is used only as a negative control to confirm current identity, and no dose-response or PD parameters are reported for nisoldipine. |
| PGx | Heinig_1998 | not_relevant | 0 | 0 | The paper describes general clinical pharmacokinetics and drug interactions but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| popPK | Herington_2015 | irrelevant | 0 | 0 | The study is a high-throughput screening and ex vivo contractility assay for uterine modulators, not a pharmacokinetic study, and nisoldipine is only a test compound with no PK parameters reported. |
| PGx | Hisaka_2009 | not_relevant | 0 | 0 | The paper focuses on drug-drug interactions (DDIs) involving CYP3A4 inhibitors, not pharmacogenomic effects of gene variants on nisoldipine. |
| PGx | Katoh_2000 | not_relevant | 0 | 0 | The paper investigates in vitro CYP inhibition by nisoldipine to predict drug-drug interactions, but does not report any pharmacogenomic effects (gene variants) on PK or PD parameters. |
| PGx | Kogure_2014 | not_relevant | 0 | 0 | The paper focuses on predicting grapefruit juice-drug interactions using pharmacokinetic profiles and does not report any pharmacogenomic effects (gene variants) on nisoldipine. |
| PGx | Komura_2002 | not_relevant | 0 | 0 | The study investigates species differences in enzyme activity, not the effect of human genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| PGx | Komura_2008 | not_relevant | 0 | 0 | The paper is a review on species differences in intestinal CYP3A metabolism and does not report pharmacogenomic effects of gene variants on nisoldipine PK/PD. |
| PGx | Kong_2022 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of cyclosporine (CsA) metabolism and the drug-drug interaction between CsA and nisoldipine, but does not report how genetic variants affect the PK/PD parameters of nisoldipine itself. |
| popPK | Krosuri_2026 | relevant | 8 | 2 | The study reports pharmacokinetic parameters for nisoldipine analogues, but specific numeric values for clearance, volume, or half-life for nisoldipine itself are not explicitly listed in the provided text (only relative bioavailability and analogue data are detailed). |
| popPK | Lin_1993 | irrelevant | 0 | 0 | The paper is a mechanistic cell biology study where nisoldipine is used only as a pharmacological tool to block calcium channels, not as the subject of a pharmacokinetic analysis. |
| PD | Lin_1993 | not_relevant | 0 | 0 | The paper reports PD parameters for ATP, not nisoldipine; nisoldipine is only mentioned as a blocker that did not affect the ATP-induced response. |
| popPK | Liu_1994 | irrelevant | 0 | 0 | no_text gate: only 84 chars of text extracted (&lt; 400) |
| PD | Liu_1994 | not_relevant | 0 | 0 | The provided text is only a title and does not contain the full text, data, or numeric PD parameters required to assess the exposure-response relationship. |
| PGx | Marques_2002 | not_relevant | 0 | 0 | The study investigates the effect of a disease state (type-2 diabetes) on pharmacokinetics, not a genetic variant or genotype. |
| PGx | Nagaya_2025 | not_relevant | 0 | 0 | The paper uses nisoldipine as a probe substrate to validate a pharmacokinetic prediction method (RAF) but does not report any pharmacogenomic effects (gene variants) on its PK or PD parameters. |
| PGx | Ohno_2007 | not_relevant | 0 | 0 | The paper focuses on CYP3A4-mediated drug-drug interactions and does not report pharmacogenomic effects (gene variants) on nisoldipine PK/PD. |
| PGx | Ozdemir_1998 | not_relevant | 0 | 0 | The study investigates the interaction between grapefruit juice and diazepam, not the pharmacogenomics of nisoldipine. |
| popPK | Pijl_1993 | irrelevant | 0 | 0 | no_text gate: only 109 chars of text extracted (&lt; 400) |
| PGx | Satoh_2003 | not_relevant | 0 | 0 | The paper investigates the inhibitory effects of nisoldipine on CYP3A4-mediated estradiol metabolism (drug-estrogen interaction), not the effect of a gene variant on nisoldipine's PK or PD parameters. |
| popPK | Schaefer_1997 | irrelevant | 2 | 0 | The study focuses on pharmacodynamic modeling (Emax, EC50) and food interaction effects, reporting only Cmax values without providing quantitative disposition parameters like clearance, volume, or half-life. |
| PGx | Sun_2018 | not_relevant | 0 | 0 | The study investigates the effect of m-nisoldipine on CYP enzyme activity (drug-drug interaction potential) rather than the effect of a gene variant on nisoldipine's PK/PD. |
| PGx | Takara_2012 | not_relevant | 0 | 0 | The study examines the effect of nisoldipine on ABCG2/BCRP transport in cell lines, not the effect of a gene variant on nisoldipine's PK/PD. |
| PGx | Xia_2024 | not_relevant | 0 | 0 | The paper investigates a drug-drug interaction (nisoldipine inhibiting ivacaftor metabolism) and does not report any pharmacogenomic effects (gene variants) on PK/PD parameters. |
| PGx | Yuan_2014 | not_relevant | 0 | 0 | The study investigates in vitro metabolism and enzyme identification (CYP2C19, CYP3A4) but does not report pharmacogenomic effects of specific gene variants on PK or PD parameters. |
| popPK | Zhang_1994 | irrelevant | 0 | 0 | no_text gate: only 98 chars of text extracted (&lt; 400) |
| PD | Zhang_1994 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of ketanserin on rat ventricular myocytes and does not mention nisoldipine or report any pharmacodynamic parameters for it. |
| popPK | van_1988 | irrelevant | 0 | 0 | no_text gate: only 91 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 11:24 UTC</sub>
