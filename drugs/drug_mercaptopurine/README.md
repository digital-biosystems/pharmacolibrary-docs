<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;mercaptopurine&quot;}]"></div>

# mercaptopurine

- **generic name:** mercaptopurine
- **ATC codes:** `L01BB02`
- **DrugBank:** [DB01033](https://go.drugbank.com/drugs/DB01033)
- **groups:** approved, investigational

## About

**Description.** An antimetabolite antineoplastic agent with immunosuppressant properties. It interferes with nucleic acid synthesis by inhibiting purine metabolism and is used, usually in combination with other drugs, in the treatment of or in remission maintenance programs for leukemia.

**Indication.** For remission induction and maintenance therapy of acute lymphatic leukemia.

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-15 06:06 | 8:56 | 0/3/0 | 0/2/0 | 0/0/0 | 266,820/18,080 | ollama / qwen3.8:27b-mtp-q8_0 | 19 | 2/5 | 7/0 | 0 |

## popPK records

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no structural parameters extracted (nothing to build)</sub><br><sub>route_to: `human_review`</sub> | [Hawwa_2008](drugs/drug_mercaptopurine/Mercaptopurine_Hawwa2008_reference.md) | Hawwa AF et al., Population pharmacokinetic and pharmaco…, British journal of clinical… (2008) | [10.1111/j.1365-2125.2008.03281.x](https://doi.org/10.1111/j.1365-2125.2008.03281.x) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Jost_2020](drugs/drug_mercaptopurine/Mercaptopurine_Jost2020_reference.md) | Jost F et al., Model-Based Simulation of Maintenance T…, Frontiers in physiology (2020) | [10.3389/fphys.2020.00217](https://doi.org/10.3389/fphys.2020.00217) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Rosario_2017_2](drugs/drug_mercaptopurine/Mercaptopurine_Rosario2017v2_reference.md) | Rosario M et al., A Review of the Clinical Pharmacokineti…, Clinical pharmacokinetics (2017) | [10.1007/s40262-017-0546-0](https://doi.org/10.1007/s40262-017-0546-0) |

## Pharmacodynamics (PD)

| status | detail | citation | doi |
|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> | [Gebhard_2023](drugs/drug_mercaptopurine/pd_Gebhard_2023_ANC.md) | Gebhard A et al., Pharmacokinetic-pharmacodynamic modelin…, Scientific reports (2023) | [10.1038/s41598-023-38414-0](https://doi.org/10.1038/s41598-023-38414-0) |
| <span class="pk-badge pk-badge--red">rejected</span> | [Tsukamoto_2017](drugs/drug_mercaptopurine/pd_Tsukamoto_2017_MTT_assay.md) | Tsukamoto M et al., Quantitative Evaluation of Drug Resista…, International journal of mo… (2017) | [10.3390/ijms18071435](https://doi.org/10.3390/ijms18071435) |

## Coverage

- **PubMed hits:** 25 matched, 20 returned
- **screened:** 3  ·  **relevant:** 3
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_5 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Arun_2024.pdf` | Arun B et al., Bioequivalence study followed by model-…, Pediatric blood & cancer (2024) | popPK | 10 | [10.1002/pbc.30813](https://doi.org/10.1002/pbc.30813) | [38110844](https://pubmed.ncbi.nlm.nih.gov/38110844) | The paper describes a population pharmacokinetic study for mercaptopurine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative results and simulation outcomes. |
| `Ding_1979.pdf` | Ding TL et al., Comparative bioavailability and pharmac…, Drug metabolism and disposi… (1979) | popPK | 10 | not captured | [43222](https://pubmed.ncbi.nlm.nih.gov/43222) | The paper reports quantitative pharmacokinetic parameters (half-life, clearance, volume of distribution) for mercaptopurine in rhesus monkeys, with all numeric values explicitly present in the text. |
| `Covell_1985.pdf` | Covell DG et al., Kinetic model for disposition of 6-merc…, The American journal of phy… (1985) | popPK | 9 | [10.1152/ajpregu.1985.248.2.R147](https://doi.org/10.1152/ajpregu.1985.248.2.R147) | [4038588](https://pubmed.ncbi.nlm.nih.gov/4038588) | The paper describes a compartmental PK model for mercaptopurine in monkeys, but the specific numeric parameter values are not present in the provided evidence. |
| `Hermann_1985.pdf` | Hermann T et al., Pharmacokinetics of elimination of 6-me…, Polish journal of pharmacol… (1985) | popPK | 9 | not captured | [3863097](https://pubmed.ncbi.nlm.nih.gov/3863097) | The paper describes a PK study of mercaptopurine in children with calculated half-lives, but the specific numeric values are not present in the provided evidence. |
| `Wierzba_1983.pdf` | Wierzba K et al., The effect of glutathione on 6-mercapto…, Polish journal of pharmacol… (1983) | popPK | 8 | not captured | [6687157](https://pubmed.ncbi.nlm.nih.gov/6687157) | The study reports a compartmental model for mercaptopurine in rabbits, but no specific numeric parameter values (CL, V, t1/2) are present in the provided evidence. |

<sub>queue written 2026-09-15T05:58:35.327070+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arun_2024 | relevant | 10 | 0 | The paper describes a population pharmacokinetic study for mercaptopurine, but the specific numeric parameter values (CL, V, etc.) are not present in the provided evidence, which only contains qualitative results and simulation outcomes. |
| popPK | Canal_1998 | irrelevant | 1 | 0 | The paper is a review discussing dose individualization strategies and mentions mercaptopurine only in the context of pharmacogenetics without reporting any quantitative pharmacokinetic parameters. |
| popPK | Covell_1985 | relevant | 9 | 0 | The paper describes a compartmental PK model for mercaptopurine in monkeys, but the specific numeric parameter values are not present in the provided evidence. |
| popPK | Gebhard_2023 | relevant | 9 | 4 | The paper develops a PK model for 6-mercaptopurine and provides some fixed parameter values (ka, ke, F) in the text, but the detailed parameter table (Supplementary Table S2) and specific volume/clearance values are referenced as being in supplementary material not fully included. |
| popPK | Hermann_1985 | relevant | 9 | 0 | The paper describes a PK study of mercaptopurine in children with calculated half-lives, but the specific numeric values are not present in the provided evidence. |
| popPK | Iseki_1996 | irrelevant | 0 | 0 | The study investigates in-vitro transport mechanisms of 6-mercaptopurine riboside in rat intestinal vesicles, not the pharmacokinetic disposition parameters of mercaptopurine. |
| PD | Iseki_1996 | not_relevant | 0 | 0 | The paper investigates intestinal transport mechanisms (Km, Hill equation) of 6-mercaptopurine riboside in membrane vesicles, not systemic pharmacodynamics or exposure-response relationships. |
| popPK | Klés_2003 | irrelevant | 2 | 0 | The study focuses on mechanistic modeling of micronucleus induction in mice rather than reporting standard quantitative disposition parameters (CL, V, ka) for mercaptopurine, and no numeric PK values are present in the evidence. |
| popPK | Kobayashi_1993 | irrelevant | 1 | 0 | The paper is a review discussing pharmacodynamic models and therapeutic drug monitoring, and while it mentions 6-mercaptopurine, it does not report original quantitative pharmacokinetic parameter values. |
| popPK | Lin_2025 | irrelevant | 0 | 0 | The paper is a medicinal chemistry study on anti-HCV compounds where mercaptopurine is only mentioned as a structural analog or starting material, with no pharmacokinetic data reported. |
| PD | Lin_2025 | not_relevant | 0 | 0 | The paper reports in vitro antiviral activity (EC50) for novel 6-chlorocoumarin conjugates, not pharmacodynamic or exposure-response data for mercaptopurine. |
| popPK | Meyer_1979 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study of prodrugs of thioinosinic acid, with mercaptopurine serving only as a comparator for cytotoxicity time courses, and no pharmacokinetic parameters are reported. |
| popPK | Rosario_2017_2 | irrelevant | 0 | 0 | Mercaptopurine is only mentioned as concomitant therapy; the quantitative PK values shown are for vedolizumab, not mercaptopurine. |
| popPK | Ruel_2022 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of transporter-mediated uptake and cytotoxicity in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Tanaka_1989 | irrelevant | 0 | 0 | The paper is an electrophysiology study on photoreceptor channels using mercaptopurine derivatives as ligands, not a pharmacokinetic study of mercaptopurine. |
| PD | Tanaka_1989 | not_relevant | 0 | 0 | The paper studies the electrophysiological effects of nucleotide derivatives on photoreceptor channels, not the pharmacodynamics of the drug mercaptopurine. |
| popPK | Tsukamoto_2017 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of drug resistance (EC50 values) in cell lines, not a pharmacokinetic study reporting disposition parameters like clearance or volume for mercaptopurine. |
| popPK | Tsukamoto_2019 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of ABC transporter drug resistance (EC50 values) and does not report pharmacokinetic disposition parameters for mercaptopurine. |
| PD | Tsukamoto_2019 | not_relevant | 3 | 2 | The paper reports EC50 values for 6-mercaptopurine in an in vitro cell line study (genetic resistance profile), which is not a pharmacokinetic/pharmacodynamic (exposure-response) relationship in a biological system. |
| popPK | Vitale_2009 | irrelevant | 0 | 0 | The paper is an in-vitro antiviral/antiproliferative study where mercaptopurine is used only as a reference drug, with no pharmacokinetic parameters reported. |
| PD | Vitale_2009 | not_relevant | 0 | 0 | The paper reports in vitro antiviral and cytotoxicity data for new benzimidazole compounds, using mercaptopurine only as a reference drug without providing specific numeric PD parameters or exposure-response analysis for mercaptopurine itself. |
| popPK | Wierzba_1983 | relevant | 8 | 0 | The study reports a compartmental model for mercaptopurine in rabbits, but no specific numeric parameter values (CL, V, t1/2) are present in the provided evidence. |

---
<sub>Generated by `docs.py` (scholarv2) from `knowledgebase/drugs/drug_mercaptopurine`. Every value traces to an artifact field; `not captured` = absent from the KB.</sub>
