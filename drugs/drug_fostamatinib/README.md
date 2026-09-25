<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;B02B&quot;,&quot;href&quot;:&quot;atc/B02B.md&quot;},{&quot;label&quot;:&quot;fostamatinib&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Fostamatinib_Bostrm2014_reference&quot;,&quot;label&quot;:&quot;Bostr\u00f6m_2014_reference&quot;,&quot;href&quot;:&quot;drugs/drug_fostamatinib/Fostamatinib_Bostrm2014_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# fostamatinib

- **generic name:** fostamatinib
- **ATC codes:** `B02BX09`
- **DrugBank:** [DB12010](https://go.drugbank.com/drugs/DB12010)
- **groups:** approved, investigational

## About

**Description.** Fostamatinib has been investigated for the treatment and basic science of Rheumatoid Arthritis and Immune Thrombocytopenic Purpura (ITP). It was approved on April 17, 2018, under the trade name Tavalisse for use in ITP [L2644, L52150]. Fostamatinib has also been granted orphan drug status by the FDA [L2644].

Recently, fostamatinib has been identified as a potential therapeutic for controlling acute respiratory distress syndrome (ARDS) in patients with severe COVID-19 through its ability to modulate the SYK kinase.[A235008, A235013, A235018]

**Indication.** Fostamatinib is indicated for use in the treatment of chronic immune thrombocytopenia (ITP) in patients who have had insufficient response to previous therapy [L52150].

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-18 22:33 | 1:07 | 0/1/0 | 0/0/0 | 0/0/0 | 31,485/1,107 | ollama / qwen3.8:27b-mtp-q8_0 | 6 | 0/6 | 6/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). The first reading is what the record holds.">cross-checked ✓</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Boström_2014_reference](drugs/drug_fostamatinib/Fostamatinib_Bostrm2014_reference.md) | Boström E et al., Exposure vs. response of blood pressure…, Journal of clinical pharmac… (2014) | [10.1002/jcph.341](https://doi.org/10.1002/jcph.341) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=fostamatinib) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` inhibitor | DrugBank actor |
| absorption | liver | `ABCG2` inhibitor | DrugBank actor |
| absorption | mammary gland | `ABCG2` inhibitor | DrugBank actor |
| absorption | small intestine | `ABCG2` inhibitor | DrugBank actor |
| distribution | blood | `SLC29A1` inhibitor | DrugBank actor |
| distribution | liver | `SLC29A1` inhibitor | DrugBank actor |
| metabolism | bile duct | <sub>“…jugate [A32936]. A 3,5 benzene diol metabolite forms in the feces via processing of the O-…”</sub> | prose |
| metabolism | kidney | `UGT1A9` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor, `UGT1A9` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` inhibitor/substrate, `UGT1A1` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>“…About 80% of R406 is excreted in the feces, primarily as the O-glucuronide conjugate and t…”</sub> | prose |
| excretion | kidney | <sub>“…gut bacteria [L52150]. The remaining 20% is excreted in the urine as the N-glucuronide con…”</sub> | prose |
| excretion | small intestine | <sub>“…ronide conjugate and the O-desmethyl metabolite produced by gut bacteria [L52150]. The rem…”</sub> | prose |

<sub>Actors without a tissue in the table: AAK1 (inhibitor), ABCB5 (substrate), ABL1 (inhibitor), ABL2 (inhibitor), ACVR1 (inhibitor), ACVR1B (inhibitor), ADORA3 (target), ALK (inhibitor), ALOX5 (inhibitor), ANKK1 (inhibitor), AURKA (inhibitor), AURKB (inhibitor), AURKC (inhibitor), AXL (inhibitor), BLK (inhibitor), BMP2K (inhibitor), BMPR1B (inhibitor), BMPR2 (inhibitor), BMX (inhibitor), BRAF (inhibitor), BTK (inhibitor), CAMK1 (inhibitor), CAMK1D (inhibitor), CAMK1G (inhibitor), CAMK2A (inhibitor), CAMK2B (inhibitor), CAMK2D (inhibitor), CAMK2G (inhibitor), CAMKK1 (inhibitor), CAMKK2 (inhibitor), CASK (inhibitor), CDC42BPG (inhibitor), CDK1 (inhibitor), CDK15 (inhibitor), CDK16 (inhibitor), CDK17 (inhibitor), CDK4 (inhibitor), CDKL1 (inhibitor), CDKL2 (inhibitor), CHEK1 (inhibitor), CHEK2 (inhibitor), CILK1 (inhibitor), CIT (inhibitor), CLASP1 (inhibitor), CLK1 (inhibitor), CLK2 (inhibitor), CLK3 (inhibitor), CLK4 (inhibitor), COQ8A (inhibitor), COQ8B (inhibitor), CSF1R (inhibitor), CSK (inhibitor), CSN3 (inhibitor), CSNK1A1 (inhibitor), CSNK2A1 (inhibitor), CSNK2A2 (inhibitor), CTSL (inhibitor), CTSS (inhibitor), DAPK1 (inhibitor), DAPK2 (inhibitor), DAPK3 (inhibitor), DCLK1 (inhibitor), DCLK2 (inhibitor), DCLK3 (inhibitor), DDR1 (inhibitor), DDR2 (inhibitor), DYRK1A (inhibitor), DYRK1B (inhibitor), EGFR (inhibitor), EIF2AK1 (inhibitor), EIF2AK2 (inhibitor), EIF2AK4 (inhibitor), EPHA1 (inhibitor), EPHA2 (inhibitor), EPHA3 (inhibitor), EPHA4 (inhibitor), EPHA5 (inhibitor), EPHA6 (inhibitor), EPHA7 (inhibitor), EPHA8 (inhibitor), EPHB1 (inhibitor), EPHB2 (inhibitor), EPHB4 (inhibitor), EPHB6 (inhibitor), ERBB2 (inhibitor), ERBB4 (inhibitor), ERN1 (inhibitor), FAAH (inhibitor), FER (inhibitor), FES (inhibitor), FGFR1 (inhibitor), FGFR2 (inhibitor), FGFR3 (inhibitor), FGR (inhibitor), FLT1 (inhibitor), FLT3 (inhibitor), FLT4 (inhibitor), FRK (inhibitor), FYN (inhibitor), GAK (inhibitor), GSK3A (inhibitor), GSK3B (inhibitor), HCK (inhibitor), HIPK2 (inhibitor), HIPK3 (inhibitor), IKBKB (inhibitor), IKBKE (inhibitor), INSR (inhibitor), INSRR (inhibitor), IRAK1 (inhibitor), IRAK3 (inhibitor), IRAK4 (inhibitor), ITK (inhibitor), JAK1 (inhibitor), JAK2 (inhibitor), JAK3 (inhibitor), KDR (inhibitor), KIT (inhibitor), LATS1 (inhibitor), LCK (inhibitor), LIMK1 (inhibitor), LIMK2 (inhibitor), LRRK2 (inhibitor), LTK (inhibitor), LYN (inhibitor), MAP2K2 (inhibitor), MAP2K3 (inhibitor), MAP2K5 (inhibitor), MAP2K6 (inhibitor), MAP3K1 (inhibitor), MAP3K10 (inhibitor), MAP3K11 (inhibitor), MAP3K12 (inhibitor), MAP3K13 (inhibitor), MAP3K15 (inhibitor), MAP3K19 (inhibitor), MAP3K2 (inhibitor), MAP3K20 (inhibitor), MAP3K3 (inhibitor), MAP3K4 (inhibitor), MAP3K6 (inhibitor), MAP3K9 (inhibitor), MAP4K1 (inhibitor), MAP4K2 (inhibitor), MAP4K3 (inhibitor), MAP4K4 (inhibitor), MAP4K5 (inhibitor), MAPK10 (inhibitor), MAPK13 (inhibitor), MAPK14 (inhibitor), MAPK15 (inhibitor), MAPK4 (inhibitor), MAPK7 (inhibitor), MAPK9 (inhibitor), MAPKAPK5 (inhibitor), MARK1 (inhibitor), MARK2 (inhibitor), MARK3 (inhibitor), MARK4 (inhibitor), MAST1 (inhibitor), MATK (inhibitor), MELK (inhibitor), MERTK (inhibitor), MET (inhibitor), MINK1 (inhibitor), MKNK1 (inhibitor), MKNK2 (inhibitor), MST1R (inhibitor), MTOR (inhibitor), MUSK (inhibitor), MYLK (inhibitor), MYLK2 (inhibitor), MYLK3 (inhibitor), MYLK4 (inhibitor), MYO3A (inhibitor), NEK1 (inhibitor), NEK11 (inhibitor), NEK2 (inhibitor), NEK3 (inhibitor), NEK4 (inhibitor), NEK5 (inhibitor), NEK9 (inhibitor), NIM1K (inhibitor), NTRK1 (inhibitor), NTRK2 (inhibitor), NTRK3 (inhibitor), NUAK1 (inhibitor), NUAK2 (inhibitor), OXSR1 (inhibitor), PAK1 (inhibitor), PAK2 (inhibitor), PAK3 (inhibitor), PAK4 (inhibitor), PAK5 (inhibitor), PAK6 (inhibitor), PDE5A (inhibitor), PDGFRA (inhibitor), PDGFRB (inhibitor), PDPK1 (inhibitor), PHKG1 (inhibitor), PI4KB (inhibitor), PIK3C2B (inhibitor), PIK3C2G (inhibitor), PIK3CD (inhibitor), PIK3CG (inhibitor), PIM1 (inhibitor), PIM3 (inhibitor), PIP4K2B (inhibitor), PIP4K2C (inhibitor), PKMYT1 (inhibitor), PKN1 (inhibitor), PKN2 (inhibitor), PLK1 (inhibitor), PLK2 (inhibitor), PLK3 (inhibitor), PLK4 (inhibitor), PRKAA1 (inhibitor), PRKACA (inhibitor), PRKACB (inhibitor), PRKCD (inhibitor), PRKCE (inhibitor), PRKCG (inhibitor), PRKCI (inhibitor), PRKCQ (inhibitor), PRKD1 (inhibitor), PRKG2 (inhibitor), PRP4K (inhibitor), PTK2 (inhibitor), PTK2B (inhibitor), PTK6 (inhibitor), RAF1 (inhibitor), RET (inhibitor), RIOK1 (inhibitor), RIOK2 (inhibitor), RIOK3 (inhibitor), RIPK1 (inhibitor), RIPK2 (inhibitor), RIPK4 (inhibitor), ROCK2 (inhibitor), ROS1 (inhibitor), RPS6KA1 (inhibitor), RPS6KA3 (inhibitor), RPS6KA6 (inhibitor), SBK1 (inhibitor), SBK3 (inhibitor), SGK3 (inhibitor), SIK1 (inhibitor), SIK2 (inhibitor), SIK3 (inhibitor), SLC18A2 (inhibitor), SLK (inhibitor), SNRK (inhibitor), SRC (inhibitor), SRMS (inhibitor), STK10 (inhibitor), STK16 (inhibitor), STK17A (inhibitor), STK17B (inhibitor), STK24 (inhibitor), STK26 (inhibitor), STK3 (inhibitor), STK32A (inhibitor), STK33 (inhibitor), STK35 (inhibitor), STK36 (inhibitor), STK38 (inhibitor), STK38L (inhibitor), STK39 (inhibitor), SYK (inhibitor), TAOK1 (inhibitor), TAOK2 (inhibitor), TAOK3 (inhibitor), TBK1 (inhibitor), TEC (inhibitor), TEK (inhibitor), TESK1 (inhibitor), TGFBR1 (inhibitor), TGFBR2 (inhibitor), TIE1 (inhibitor), TLK1 (inhibitor), TLK2 (inhibitor), TNIK (inhibitor), TNK1 (inhibitor), TNK2 (inhibitor), TNNI3K (inhibitor), TSSK1B (inhibitor), TTK (inhibitor), TXK (inhibitor), TYK2 (inhibitor), TYRO3 (inhibitor), ULK1 (inhibitor), ULK2 (inhibitor), ULK3 (inhibitor), WEE1 (inhibitor), YES1 (inhibitor), ZAP70 (inhibitor).</sub>

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 15 matched, 15 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_3 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Boström_2014.pdf` | Boström E et al., Exposure vs. response of blood pressure…, Journal of clinical pharmac… (2014) | popPK | 9 | [10.1002/jcph.341](https://doi.org/10.1002/jcph.341) | [24895144](https://pubmed.ncbi.nlm.nih.gov/24895144) | The paper reports a population PK model for the active metabolite R406 with a specific CL/F value (18.7 L/h), but other parameters like volume and half-life are not explicitly listed in the provided text. |
| `Maringwa_2015.pdf` | Maringwa J et al., Pharmacokinetic-pharmacodynamic modelin…, Journal of clinical pharmac… (2015) | pd | 5 | [10.1002/jcph.406](https://doi.org/10.1002/jcph.406) | [25280085](https://www.ncbi.nlm.nih.gov/pubmed/25280085) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Moore_2019.pdf` | Moore DC et al., Fostamatinib for the treatment of immun…, American journal of health-… (2019) | pgx | 7 | [10.1093/ajhp/zxz052](https://doi.org/10.1093/ajhp/zxz052) | [30951590](https://www.ncbi.nlm.nih.gov/pubmed/30951590) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-09-18T22:32:07.980615+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Ahmadinia_2026 | not_relevant | 0 | 0 | The paper is a narrative review of immunopathogenic mechanisms and therapeutic targets in autoimmune HIT, and does not report pharmacogenomic effects on the PK or PD of fostamatinib. |
| PGx | Costa_2025 | not_relevant | 0 | 0 | The paper is a review of autoimmune hemolytic anemia pathogenesis and treatments, mentioning fostamatinib only as a therapeutic option without reporting any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Duran_2019 | not_relevant | 0 | 0 | The paper investigates the effect of the drug R406 (fostamatinib metabolite) on P-glycoprotein-mediated drug resistance in cell lines, but does not report any pharmacogenomic effects (gene variants/genotypes) on the PK or PD of fostamatinib. |
| PGx | Flinn_2016 | not_relevant | 0 | 0 | The paper reports clinical efficacy based on cell-of-origin subtypes (GCB/ABC) but does not report pharmacokinetic or pharmacodynamic parameters or specific gene variants affecting drug metabolism. |
| PGx | Gkouskou_2024 | not_relevant | 0 | 0 | The paper is a review on nutrigenetics and obesity that only mentions fostamatinib in the context of in silico predictions for repurposing, without reporting any pharmacogenomic effects on its PK or PD parameters. |
| popPK | Maringwa_2015 | irrelevant | 2 | 0 | The paper focuses on pharmacodynamic modeling of efficacy (ACR20) rather than reporting quantitative pharmacokinetic disposition parameters (CL, V, etc.) for fostamatinib. |
| PGx | Martin_2016 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (CYP3A4 inhibitors/inducers) rather than pharmacogenomic effects of gene variants on PK/PD parameters. |
| PGx | Moore_2019 | not_relevant | 0 | 0 | The paper is a general review of fostamatinib's pharmacology and clinical use, mentioning CYP3A4 metabolism but not reporting any specific pharmacogenomic effects of gene variants on PK or PD parameters. |
| popPK | Thoma_2015 | irrelevant | 0 | 0 | The paper describes a different Syk inhibitor (Compound 5) and does not report pharmacokinetic parameters for fostamatinib. |
| PD | Thoma_2015 | not_relevant | 0 | 0 | The text is an abstract that mentions activity in a rat PK/PD model but provides no numeric PD parameters, curves, or specific exposure-response data. |
| PGx | Xu_2025 | not_relevant | 0 | 0 | The paper identifies fostamatinib as a potential anti-aging drug via computational screening but does not report any pharmacogenomic effects on its PK or PD parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-18 22:32 UTC</sub>
