<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D08A&quot;,&quot;href&quot;:&quot;atc/D08A.md&quot;},{&quot;label&quot;:&quot;mercuric chloride&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;MercuricChloride_KomstaSzumska1984_reference&quot;,&quot;label&quot;:&quot;Komsta-Szumska_1984_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mercuric_chloride/MercuricChloride_KomstaSzumska1984_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;MercuricChloride_Sundberg1998_reference&quot;,&quot;label&quot;:&quot;Sundberg_1998_reference&quot;,&quot;href&quot;:&quot;drugs/drug_mercuric_chloride/MercuricChloride_Sundberg1998_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# mercuric chloride

- **generic name:** mercuric chloride
- **ATC codes:** `D08AK03`
- **DrugBank:** [DB13765](https://go.drugbank.com/drugs/DB13765) · **PubChem:** not captured
- **molar mass:** 271.5 g/mol (Cl2Hg) — DrugBank
- **groups:** experimental

## About

**Description.** Mercury chloride (HgCl2) is a highly toxic compound that volatizes slightly at ordinary temperature and appreciably at 100 degrees C. It is corrosive to mucous membranes and used as a topical antiseptic and disinfectant. Mercuric chloride was used to disinfect wounds by Arab physicians in the Middle Ages but modern medicine has since deemed it unsafe for use. [T112]

## Molecules and molar masses

> The molar mass each model uses to convert mass to molar concentration and to form a metabolite molecule for molecule. Looked up, never estimated: DrugBank for the drug, the paper's own value or the PubChem entry matched to the paper's name for a metabolite.

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mercuric chloride | parent | 271.5 | Cl2Hg | DrugBank | — | Sundberg_1998 |
| mercuric_chloride | metabolite | 271.5 | Cl2Hg | DrugBank | — | Komsta-Szumska_1984, Sundberg_1998 |
| mercury | metabolite | 200.59 | Hg | PubChem | [23931](https://pubchem.ncbi.nlm.nih.gov/compound/23931) | Komsta-Szumska_1984 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-09-29 20:39 | 7:01 | 0/2/0 | 0/0/0 | 0/0/0 | 43,128/11,183 | ollama / qwen3.8:27b-mtp-q8_0 | 1 | 0/1 | 1/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Komsta-Szumska_1984_reference](drugs/drug_mercuric_chloride/MercuricChloride_KomstaSzumska1984_reference.md) | — | 1-compartment (no model) | 1 | Komsta-Szumska E et al., A kinetic analysis of the interaction b…, Toxicology (1984) | [10.1016/0300-483x(84)90039-8](https://doi.org/10.1016/0300-483x(84)90039-8) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.333). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>route_to: `human_review`</sub> | [Sundberg_1998_reference](drugs/drug_mercuric_chloride/MercuricChloride_Sundberg1998_reference.md) | — | parent + metabolite (no model) | 1 | Sundberg J et al., Kinetics of methylmercury and inorganic…, Toxicology and applied phar… (1998) | [10.1006/taap.1998.8456](https://doi.org/10.1006/taap.1998.8456) |

<details class="legend">
<summary>Badge legend — what each badge means</summary>
<table><thead><tr><th>badge</th><th>what it means</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>hand-authored by a person — an exemplar, not an extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>the pipeline accepted the record: every closed-form check it could run passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>the reviewer ran the built model against the paper's own reported values and they agree — the best automatic verdict there is.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>the model replicates the paper, but an advisory check failed — the record page names the caveat under the badge and the drug page shows it under the status.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>extracted, then a check failed or a value looks implausible. The numbers are shown as read, not endorsed.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>a model was built, but a core parameter fell back to a library default, so it is not shipped.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted — the record is not a compartmental model, or nothing usable was extracted.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>pipeline state, not a judgement: no model has been built for this record yet (likewise `not simulated`).</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>the reviewer's verdict predates the latest re-run of the paper — treat the status as out of date, not as current.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>every independent reader agreed on every compared field. With more than one reader the badge counts them, e.g. 'cross-checked ✓ 2/2'.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>a reader differs on a non-structural field (a population label, a flag), or the readers do not all agree with each other.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>at least one reader differs on a structural parameter — a clearance, a volume, ka, a lag. The record still holds the FIRST reading; the disagreement is a signal for a reviewer, never an automatic correction.</td></tr></tbody></table>
<p><small>The first badge is the record's <b>status</b> — what the pipeline and the reviewer concluded. A second badge, when present, is the <b>cross-check</b>: whether a model of another family, re-reading the same paper, extracted the same numbers. They are independent — a rejected record can be cross-checked, and a confirmed reading can still fail a plausibility check.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 17 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 0  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full text wanted

_6 paper(s) judged relevant from the abstract, with no full text on disk — paywalled, or the resolver could not reach them. Follow the DOI, then save the PDF into `papers/` as `&lt;save as&gt;.pdf` and re-run the extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Sundberg_1998.pdf` | Sundberg J et al., Kinetics of methylmercury and inorganic…, Toxicology and applied phar… (1998) | popPK | 10 | [10.1006/taap.1998.8456](https://doi.org/10.1006/taap.1998.8456) | [9707508](https://pubmed.ncbi.nlm.nih.gov/9707508) | The study reports quantitative PK parameters (clearance, volume, half-life) for mercuric chloride (inorganic mercury) in mice, with specific values provided for methylmercury and qualitative confirmation of no difference for inorganic mercury. |
| `Komsta-Szumska_1984.pdf` | Komsta-Szumska E et al., A kinetic analysis of the interaction b…, Toxicology (1984) | popPK | 9 | [10.1016/0300-483x(84)90039-8](https://doi.org/10.1016/0300-483x(84)90039-8) | [6515657](https://pubmed.ncbi.nlm.nih.gov/6515657) | The study reports quantitative pharmacokinetic parameters (half-lives and compartmental models) for methylmercury (administered as methylmercuric chloride) in guinea pigs, with specific numeric values provided in the text. |
| `Dunn_1981.pdf` | Dunn JD et al., Interaction of ethanol and inorganic me…, The Journal of pharmacology… (1981) | pd | 4 | not captured | [7452505](https://www.ncbi.nlm.nih.gov/pubmed/7452505) | metadata signals extractable PD data (EC50) |
| `Gassó_2000.pdf` | Gassó S et al., Pharmacological characterization of the…, Life sciences (2000) | pd | 4 | [10.1016/s0024-3205(00)00715-3](https://doi.org/10.1016/s0024-3205(00)00715-3) | [10954055](https://www.ncbi.nlm.nih.gov/pubmed/10954055) | metadata signals extractable PD data (EC50) |
| `de-Carvalho_2022.pdf` | de-Carvalho RR et al., Evaluation of the developmental toxicit…, Journal of toxicology and e… (2022) | pd | 4 | [10.1080/15287394.2022.2089413](https://doi.org/10.1080/15287394.2022.2089413) | [35723169](https://www.ncbi.nlm.nih.gov/pubmed/35723169) | metadata signals extractable PD data (EC50) |
| `Bošnjak_2013.pdf` | Bošnjak I et al., Quantification and in situ localisation…, Environmental science and p… (2013) | pgx | 7 | [10.1007/s11356-013-1819-2](https://doi.org/10.1007/s11356-013-1819-2) | [23690080](https://www.ncbi.nlm.nih.gov/pubmed/23690080) | metadata signals extractable PGX data (abcb1, PK/PD-context) |

<sub>queue written 2026-09-29T20:36:00.627130+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bernard_1984 | irrelevant | 2 | 0 | The paper discusses compartmental models for mercury generally but does not report specific quantitative PK parameter values (CL, V, etc.) for mercuric chloride in the provided text. |
| PGx | Bošnjak_2013 | not_relevant | 0 | 0 | The paper studies the induction of transporter gene expression in sea urchin embryos by mercuric chloride, not the effect of a human gene variant on the PK/PD of mercuric chloride. |
| popPK | Dunn_1981 | irrelevant | 2 | 0 | The study focuses on the mechanism of mercury exhalation and ethanol interaction rather than reporting standard quantitative pharmacokinetic parameters like clearance, volume of distribution, or compartmental model parameters for mercuric chloride. |
| popPK | Fonfría_2001 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mercury's interaction with GABA(A) receptors, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Gassó_2000 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological investigation of neurotransmitter release mechanisms, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Ibrahim_2026 | irrelevant | 0 | 0 | The study is an ex-vivo mechanistic investigation of vascular signaling pathways and does not report pharmacokinetic parameters for mercuric chloride. |
| PD | Ibrahim_2026 | not_relevant | 4 | 2 | The study reports qualitative changes in Emax and pD2 for Ang1-8 reactivity in ex-vivo rings but does not provide the specific numeric values or concentration-response curves required to extract PD parameters. |
| popPK | Kehe_2001 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay reporting EC50 values, not a pharmacokinetic study with disposition parameters. |
| popPK | Kim_2004 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of mercury-induced cell death in macrophages and does not report pharmacokinetic parameters. |
| popPK | Mason_1976 | irrelevant | 2 | 1 | The study is an environmental toxicology/accumulation study in oysters, not a pharmacokinetic study reporting standard disposition parameters (CL, V, ka) for mercuric chloride in a relevant biological context. |
| popPK | Mirzoian_2002 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on receptor modulation and does not report pharmacokinetic disposition parameters for mercuric chloride. |
| popPK | Parran_2001 | irrelevant | 0 | 0 | The paper is an in-vitro mechanistic study on cell differentiation and viability, not a pharmacokinetic study, and reports no disposition parameters. |
| popPK | Reichl_2001 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity assay measuring LDH release and EC50 values, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Robinson_1986 | not_relevant | 0 | 0 | The paper studies the genetic basis of an immune response (ANA induction) to mercuric chloride toxicity, not a pharmacokinetic or pharmacodynamic parameter of the drug itself. |
| PGx | Singh_2024 | not_relevant | 0 | 0 | The paper studies the toxicological effects of mercuric chloride on fish liver, not pharmacogenomic effects on PK/PD parameters. |
| popPK | de-Carvalho_2022 | irrelevant | 0 | 0 | The study is an ecotoxicological assessment of embryotoxicity in freshwater snails, not a pharmacokinetic study, and reports toxicity metrics (LC50, EC50) rather than PK parameters. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-09-29 20:36 UTC</sub>
