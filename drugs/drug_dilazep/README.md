<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;C01D&quot;,&quot;href&quot;:&quot;atc/C01D.md&quot;},{&quot;label&quot;:&quot;dilazep&quot;}]"></div>

# dilazep

- **generic name:** dilazep
- **ATC codes:** `C01DX10`
- **DrugBank:** [DB13715](https://go.drugbank.com/drugs/DB13715) · **PubChem:** not captured
- **molar mass:** 604.697 g/mol (C31H44N2O10) — DrugBank
- **groups:** experimental

## About

Dilazep is a vasodilator classified among vasodilators used in cardiac diseases. It appears only as an experimental agent in drug databases, with no marketing authorisation recorded, so its current use is unclear.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5276700](https://www.wikidata.org/wiki/Q5276700) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-06 09:59 | 2:31 | 0/0/0 | 1/1/0 | 0/0/0 | 98,285/3,240 | ollama / qwen3.8:27b-mtp-q8_0 | 7 | 6/1 | 7/0 | 0 |

## popPK records

_not available_

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Data from bacteria, fungi or plants, not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">other organism</span> | [Endres_2004_3H_adenosine_transport](drugs/drug_dilazep/pd_Endres_2004_3H_adenosine_transport.md) | [3H]adenosine transport ← dilazep · direct Emax (saturable) effect | — | Endres CJ et al., Mutation of leucine-92 selectively redu…, The Biochemical journal 380… (2004) | [10.1042/BJ20031880](https://doi.org/10.1042/BJ20031880) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8:27b-mtp-q8_0, p(non-human) 1.00).">in vitro</span> | [Shuralyova_2004_glucose_uptake](drugs/drug_dilazep/pd_Shuralyova_2004_glucose_uptake.md) | glucose uptake ← dilazep · direct sigmoid Emax (Hill) effect | — | Shuralyova I et al., Inhibition of glucose uptake in murine…, American journal of physiol… (2004) | [10.1152/ajpheart.00639.2003](https://doi.org/10.1152/ajpheart.00639.2003) |

## ADME sites

Where this drug is handled, from DrugBank's curated enzymes / transporters / carriers and the KB's PGx genes, mapped to tissue through the ADME gene table. Compare it with other drugs on the [Sites & interactions](sites?drugs=dilazep) page (add drugs there; the set becomes a link).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| distribution | blood | `SLC29A1` inhibitor | DrugBank actor |
| distribution | liver | `SLC29A1` inhibitor | DrugBank actor |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>the data come from an animal (or in-vitro) study, not from people. The record, its model and its simulation are kept — they describe that species.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 70 matched, 57 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full text wanted

_13 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sambhi_1989.pdf` | Sambhi MP et al., Therapeutic tolerance, hemodynamic effe…, Journal of pharmaceutical s… (1989) | popPK | 9 | [10.1002/jps.2600780404](https://doi.org/10.1002/jps.2600780404) | [2724090](https://pubmed.ncbi.nlm.nih.gov/2724090) | The study reports quantitative PK parameters (elimination rate constant, half-life, tmax) for dilazep in humans, with values explicitly stated in the text. |
| `Wiemer_1982.pdf` | Wiemer G et al., Energy-dependent extrusion of cyclic 3'…, Naunyn-Schmiedeberg's archi… (1982) | pd | 5 | [10.1007/BF00498507](https://doi.org/10.1007/BF00498507) | [6300698](https://www.ncbi.nlm.nih.gov/pubmed/6300698) | metadata signals extractable PD data (EC50) |
| `Balcar_1995.pdf` | Balcar VJ et al., Autoradiography of P2x ATP receptors in…, British journal of pharmaco… (1995) | pd | 4 | [10.1111/j.1476-5381.1995.tb15877.x](https://doi.org/10.1111/j.1476-5381.1995.tb15877.x) | [7670731](https://www.ncbi.nlm.nih.gov/pubmed/7670731) | metadata signals extractable PD data (IC50) |
| `Bendayan_1997.pdf` | Bendayan R, Interaction of dipyridamole, a nucleosi…, Canadian journal of physiol… (1997) | pd | 4 | not captured | [9101065](https://www.ncbi.nlm.nih.gov/pubmed/9101065) | metadata signals extractable PD data (IC50) |
| `Borgland_1997.pdf` | Borgland SL et al., Uptake and release of [3H]formycin B vi…, The Journal of pharmacology… (1997) | pd | 4 | not captured | [9103516](https://www.ncbi.nlm.nih.gov/pubmed/9103516) | metadata signals extractable PD data (EC50) |
| `Chiba_1995.pdf` | Chiba K et al., Dilazep inhibits binding of batrachotox…, Archives internationales de… (1995) | pd | 4 | not captured | [8861708](https://www.ncbi.nlm.nih.gov/pubmed/8861708) | metadata signals extractable PD data (IC50) |
| `Foga_1996.pdf` | Foga IO et al., Nucleoside transporter-mediated uptake…, European journal of pharmac… (1996) | pd | 4 | [10.1016/s0014-2999(96)00720-0](https://doi.org/10.1016/s0014-2999(96)00720-0) | [9016938](https://www.ncbi.nlm.nih.gov/pubmed/9016938) | metadata signals extractable PD data (IC50) |
| `Gu_1996.pdf` | Gu JG et al., Characterization of inhibitor-sensitive…, Journal of neurochemistry (1996) | pd | 4 | [10.1046/j.1471-4159.1996.67030972.x](https://doi.org/10.1046/j.1471-4159.1996.67030972.x) | [8752102](https://www.ncbi.nlm.nih.gov/pubmed/8752102) | metadata signals extractable PD data (IC50) |
| `Okamura_1992.pdf` | Okamura N et al., Inhibitory action of dilazep on histami…, Japanese journal of pharmac… (1992) | pd | 4 | [10.1254/jjp.59.183](https://doi.org/10.1254/jjp.59.183) | [1434114](https://www.ncbi.nlm.nih.gov/pubmed/1434114) | metadata signals extractable PD data (IC50) |
| `Paproski_2008.pdf` | Paproski RJ et al., Mutation of Trp29 of human equilibrativ…, The Biochemical journal (2008) | pd | 4 | [10.1042/BJ20080074](https://doi.org/10.1042/BJ20080074) | [18462193](https://www.ncbi.nlm.nih.gov/pubmed/18462193) | metadata signals extractable PD data (IC50) |
| `Parkinson_1996.pdf` | Parkinson FE et al., [3H]adenosine transport in DDT1 MF-2 sm…, European journal of pharmac… (1996) | pd | 4 | [10.1016/0014-2999(96)00259-2](https://doi.org/10.1016/0014-2999(96)00259-2) | [8836637](https://www.ncbi.nlm.nih.gov/pubmed/8836637) | metadata signals extractable PD data (IC50) |
| `Sundaram_1998.pdf` | Sundaram M et al., Chimeric constructs between human and r…, The Journal of biological c… (1998) | pd | 4 | [10.1074/jbc.273.34.21519](https://doi.org/10.1074/jbc.273.34.21519) | [9705281](https://www.ncbi.nlm.nih.gov/pubmed/9705281) | metadata signals extractable PD data (IC50) |
| `Yao_1997.pdf` | Yao SY et al., Molecular cloning and functional charac…, The Journal of biological c… (1997) | pd | 4 | [10.1074/jbc.272.45.28423](https://doi.org/10.1074/jbc.272.45.28423) | [9353301](https://www.ncbi.nlm.nih.gov/pubmed/9353301) | metadata signals extractable PD data (IC50) |

<sub>queue written 2026-10-06T09:58:33.515508+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PD | Agarwal_1989 | not_relevant | 3 | 2 | The paper reports IC50 values for forskolin (the primary drug) under conditions where dilazep is used as a tool to block adenosine uptake, but it does not provide a dose-response curve or numeric PD parameters (Emax, EC50) for dilazep itself. |
| PD | Agarwal_1994 | not_relevant | 0 | 0 | The paper reports PD parameters (IC50) for adenosine and theophylline, but dilazep is only mentioned as a collection additive to prevent adenosine metabolism, not as the subject of a dose-response or exposure-response analysis. |
| PGx | Alkafaas_2024 | not_relevant | 0 | 0 | The paper reports in silico molecular docking scores for dilazep as an inhibitor of acid sphingomyelinase, not pharmacogenomic effects on its PK/PD parameters. |
| PD | Balcar_1995 | not_relevant | 0 | 0 | The paper describes autoradiography of P2x ATP receptors in rat brain and does not mention dilazep or report any pharmacodynamic or exposure-response data. |
| PD | Bendayan_1997 | not_relevant | 0 | 0 | The paper investigates the interaction of dipyridamole with renal transport in cell lines and does not contain any pharmacodynamic or exposure-response data for dilazep. |
| popPK | Borgland_1997 | irrelevant | 0 | 0 | no_text gate: only 118 chars of text extracted (&lt; 400) |
| PD | Borgland_1997 | not_relevant | 0 | 0 | The paper investigates the transport kinetics of [3H]formycin B in L1210 cells and does not contain any data, analysis, or mention of dilazep or its pharmacodynamic/exposure-response relationship. |
| popPK | Brown_1982 | irrelevant | 0 | 0 | The study is a pharmacological investigation of adenosine receptors in guinea-pig trachea where dilazep is used only as a transport inhibitor, with no pharmacokinetic parameters reported. |
| popPK | Clark_1988 | irrelevant | 0 | 0 | Dilazep is used as a pharmacological tool (adenosine uptake blocker) in a behavioral study of ethanol effects, not as the subject of a pharmacokinetic analysis. |
| PD | Foga_1996 | not_relevant | 0 | 0 | The paper studies adenosine transport in smooth muscle cells and does not mention dilazep or report any pharmacodynamic or exposure-response data for it. |
| PD | Griffiths_1997 | not_relevant | 3 | 2 | The paper reports qualitative inhibition data (percent inhibition at specific concentrations) for dilazep on hENT2 transport, but does not provide numeric PD parameters (IC50, Ki) or a fitted dose-response curve for dilazep specifically. |
| PD | Gu_1996 | not_relevant | 0 | 0 | The paper focuses on adenosine transporters in astrocytes and does not mention dilazep or report any pharmacodynamic or exposure-response data for it. |
| PD | Hoque_2008 | not_relevant | 0 | 0 | The paper mentions dilazep only to state that the transporter is resistant to it, providing no numeric PD parameters or exposure-response relationship for dilazep. |
| popPK | Izumo_1999 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effect of dilazep on regional cerebral blood flow in rats, not its pharmacokinetic parameters. |
| popPK | Jarvis_1986 | irrelevant | 0 | 0 | The study investigates nucleoside transport mechanisms in rat erythrocytes, and dilazep is only mentioned as a competitive inhibitor in a binding assay, not as the subject of a pharmacokinetic study. |
| PD | Jiménez_2000 | not_relevant | 1 | 0 | The paper reports a qualitative ranking of inhibitors (Dilazep &gt; dipyridamole) but provides no numeric IC50, Ki, or dose-response curve parameters for dilazep. |
| popPK | Kawabata_2002 | irrelevant | 0 | 0 | The study investigates the renal hemodynamic and microcirculatory effects of dilazep (GFR, RPF, TGF) in rats, not its pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Kondo_1981 | irrelevant | 0 | 0 | The study measures cerebral blood flow (hemodynamics) rather than pharmacokinetic disposition parameters (CL, V, ka) for dilazep. |
| popPK | Lee_1988 | irrelevant | 0 | 0 | The study investigates nucleoside transport in rat synaptosomes where dilazep is used only as a transport inhibitor, not as the subject drug for pharmacokinetic analysis. |
| popPK | Lee_1988_2 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of adenosine transport in guinea pig synaptosomes where dilazep is used only as a transport inhibitor, not as the subject drug for PK analysis. |
| popPK | Lee_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transport inhibition in HL-60 cells, not a pharmacokinetic study of dilazep disposition. |
| popPK | Lee_1995 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of nucleoside transporters in murine cells where dilazep is used only as a probe inhibitor, not as the subject of pharmacokinetic analysis. |
| popPK | Molina-Arcas_2009 | irrelevant | 0 | 0 | The paper is a review of nucleoside transporters and mentions dilazep only as a pharmacological target, without reporting any pharmacokinetic parameters. |
| PGx | Molina-Arcas_2009 | not_relevant | 0 | 0 | The text is a general review of nucleoside transporters and mentions dilazep only as a target drug, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| popPK | Nilsson_2010 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of adenosine activity in guinea-pig ileum where dilazep is used as a tool compound (uptake inhibitor), not as the subject of pharmacokinetic analysis. |
| PD | Paproski_2008 | not_relevant | 0 | 0 | The paper focuses on the molecular mechanism of a transporter mutation affecting drug affinity and selectivity, not on pharmacodynamic exposure-response or dose-response relationships in a biological system. |
| PD | Parkinson_1996 | not_relevant | 0 | 0 | The paper investigates the inhibition of adenosine transport by propentofylline metabolites, not dilazep, and does not report any pharmacodynamic or exposure-response relationship for dilazep. |
| PD | Plagemann_1987 | not_relevant | 0 | 0 | The paper mentions dilazep only in a qualitative comparison regarding binding site dissociation kinetics, without providing any numeric PD parameters or exposure-response data for it. |
| popPK | Schaumlöffel_1972 | irrelevant | 0 | 0 | no_text gate: only 83 chars of text extracted (&lt; 400) |
| popPK | Schaumlöffel_1972_2 | irrelevant | 0 | 0 | no_text gate: only 79 chars of text extracted (&lt; 400) |
| popPK | Schaumlöffel_1976 | irrelevant | 2 | 0 | The study reports qualitative comparisons of bioavailability and serum concentrations but does not provide quantitative PK parameters (CL, V, ka) or a compartmental model for dilazep. |
| PD | Sundaram_1998 | not_relevant | 0 | 0 | The paper focuses on structural biology and transporter interactions of equilibrative nucleoside transporters, not on the pharmacodynamic or exposure-response modeling of dilazep. |
| popPK | Tanaka_1996 | irrelevant | 0 | 0 | The paper is a clinical case report of glomerulonephritis where dilazep is only mentioned as part of the treatment regimen, with no pharmacokinetic data reported. |
| popPK | Thompson_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of gemcitabine, using dilazep only as a transporter inhibitor (probe) rather than the subject drug. |
| popPK | Thorn_1996 | irrelevant | 0 | 0 | The paper is a review of adenosine transporters where dilazep is mentioned only as a transport inhibitor, not as the subject of a pharmacokinetic study. |
| popPK | Ver_1991 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of nucleoside transport inhibition and does not report pharmacokinetic parameters for dilazep. |
| PD | Vickers_1999 | not_relevant | 3 | 3 | The paper reports in vitro binding inhibition constants (IC50) for dilazep, which are pharmacological potency parameters, but does not report a pharmacodynamic exposure-response or dose-response relationship (e.g., effect vs. plasma concentration or dose) for the drug in a biological system. |
| popPK | Wiemer_1982 | irrelevant | 0 | 0 | no_text gate: only 172 chars of text extracted (&lt; 400) |
| PD | Wiemer_1982 | not_relevant | 0 | 0 | The paper studies the extrusion of cAMP in rat erythrocytes and does not mention dilazep or report any pharmacodynamic parameters for it. |
| popPK | Yamamoto_1995 | irrelevant | 0 | 0 | The study investigates the histological and pathological effects of dilazep on the glomerular basement membrane in diabetic rats, not its pharmacokinetic parameters. |
| PD | Yao_1997 | not_relevant | 0 | 0 | The paper focuses on the molecular cloning and functional characterization of nucleoside transporters (rENT1 and rENT2) and does not contain any pharmacodynamic or exposure-response data for dilazep. |
| popPK | Zhang_1991 | irrelevant | 0 | 0 | The study investigates the pharmacodynamic effects of dilazep on adenosine-mediated vasodilation and does not report any pharmacokinetic parameters (CL, V, ka, etc.) for dilazep. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
