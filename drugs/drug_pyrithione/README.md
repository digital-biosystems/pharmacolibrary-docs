<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;D11A&quot;,&quot;href&quot;:&quot;atc/D11A.md&quot;},{&quot;label&quot;:&quot;Pyrithione&quot;}]"></div>

# Pyrithione

- **generic name:** Pyrithione
- **ATC codes:** `D11AX12`
- **DrugBank:** [DB06815](https://go.drugbank.com/drugs/DB06815) · **PubChem:** not captured
- **groups:** approved

## About

Pyrithione (as zinc pyrithione) is used to treat seborrhoeic dermatitis and other scalp skin conditions, acting as a keratolytic agent. It is an approved dermatological medicine, widely used in over-the-counter anti-dandruff shampoos and skin preparations.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q204602](https://www.wikidata.org/wiki/Q204602) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:21 | 0:50 | 0/0/0 | 0/0/0 | 0/0/0 | 54,826/1,441 | einfracz / qwen3.8-27b | 7 | 1/6 | 6/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=pyrithione).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | skin | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: KCNQ1 (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 85 matched, 30 returned
- **screened:** 0  ·  **relevant:** 0
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Diamond_2017.pdf` | Diamond GL et al., A physiologically based pharmacokinetic…, Journal of toxicology and e… (2017) | popPK | 10 | [10.1080/15287394.2016.1245123](https://doi.org/10.1080/15287394.2016.1245123) | [28085645](https://pubmed.ncbi.nlm.nih.gov/28085645) | The paper describes a physiologically based pharmacokinetic (PBPK) model for pyrithione in rats, but no numeric parameter values are provided in the extracted evidence. |
| `Diamond_2021.pdf` | Diamond GL et al., A Physiological-Based Pharmacokinetic M…, Journal of toxicology and e… (2021) | popPK | 9 | [10.1080/15287394.2021.1912678](https://doi.org/10.1080/15287394.2021.1912678) | [33886436](https://pubmed.ncbi.nlm.nih.gov/33886436) | The paper describes a PBPK model for zinc pyrithione in rats, but the specific numeric parameter values are not present in the provided text. |
| `Bellas_2005.pdf` | Bellas J et al., Embryotoxicity of the antifouling bioci…, Marine pollution bulletin (2005) | pd | 5 | [10.1016/j.marpolbul.2005.06.010](https://doi.org/10.1016/j.marpolbul.2005.06.010) | [16023145](https://www.ncbi.nlm.nih.gov/pubmed/16023145) | metadata signals extractable PD data (EC50) |
| `Goka_1999.pdf` | Goka K, Embryotoxicity of zinc pyrithione, an a…, Environmental research (1999) | pd | 4 | [10.1006/enrs.1998.3944](https://doi.org/10.1006/enrs.1998.3944) | [10361029](https://www.ncbi.nlm.nih.gov/pubmed/10361029) | metadata signals extractable PD data (EC50) |
| `Na_2016.pdf` | Na YR et al., Pyrithione Zn selectively inhibits hypo…, Biochemical and biophysical… (2016) | pd | 4 | [10.1016/j.bbrc.2016.02.115](https://doi.org/10.1016/j.bbrc.2016.02.115) | [26940742](https://www.ncbi.nlm.nih.gov/pubmed/26940742) | metadata signals extractable PD data (IC50) |
| `Wang_2011.pdf` | Wang H et al., Toxicity evaluation of single and mixed…, Environmental toxicology an… (2011) | pd | 4 | [10.1002/etc.440](https://doi.org/10.1002/etc.440) | [21154844](https://www.ncbi.nlm.nih.gov/pubmed/21154844) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-14T23:21:14.110482+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bellas_2005 | irrelevant | 0 | 0 | The study reports embryotoxicity (EC50) in marine invertebrates, not pharmacokinetic disposition parameters for pyrithione. |
| popPK | Brueggemann_2014 | irrelevant | 0 | 0 | The study is a mechanistic in vitro/pharmacological investigation of KCNQ potassium channels in rat airways where zinc pyrithione is used only as a probe agonist, with no pharmacokinetic parameters reported. |
| popPK | Carbajo_2015 | irrelevant | 0 | 0 | The study assesses aquatic toxicity (EC50 values) of zinc pyrithione in bacteria and protozoa, not pharmacokinetic disposition parameters in a physiological model. |
| popPK | Carucci_2023 | irrelevant | 0 | 0 | The paper studies malaria transmission-blocking compounds (NITD609, TD-6450), and while Zinc Pyrithione is mentioned as a screening hit, the reported PK parameters belong to TD-6450 and no quantitative PK data are provided for pyrithione. |
| popPK | Diamond_2017 | relevant | 10 | 0 | The paper describes a physiologically based pharmacokinetic (PBPK) model for pyrithione in rats, but no numeric parameter values are provided in the extracted evidence. |
| popPK | Diamond_2021 | relevant | 9 | 0 | The paper describes a PBPK model for zinc pyrithione in rats, but the specific numeric parameter values are not present in the provided text. |
| popPK | Figueroa_2021 | irrelevant | 0 | 0 | The paper is a mechanistic study on ion channels in vitro and does not report pharmacokinetic parameters for pyrithione. |
| popPK | Goka_1999 | irrelevant | 0 | 0 | The paper is an embryotoxicity study in fish and does not report pharmacokinetic parameters for pyrithione. |
| popPK | Islam_2022 | irrelevant | 0 | 0 | The paper is a review on immune system measures against coronavirus and does not contain pharmacokinetic data for pyrithione. |
| popPK | Kljun_2016 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic evaluation of pyrithione-based complexes as enzyme inhibitors and cytotoxic agents, reporting no pharmacokinetic parameters such as clearance, volume, or half-life. |
| popPK | Knox_2008 | irrelevant | 0 | 0 | The study is an in vitro mechanistic investigation of intracellular calcium effects, not a pharmacokinetic study reporting quantitative disposition parameters. |
| popPK | Maraldo_2004 | irrelevant | 0 | 0 | The study is an ecological toxicity assessment of zinc pyrithione on phytoplankton, not a pharmacokinetic study. |
| popPK | Mejdrová_2023 | irrelevant | 0 | 0 | The paper describes the discovery of human constitutive androstane receptor (CAR) agonists and reports pharmacodynamic/efficacy data (EC50, selectivity) for these novel compounds, but it does not report pharmacokinetic parameters for the drug pyrithione. |
| popPK | Sepcić_2006 | irrelevant | 0 | 0 | The paper is a review of biological activities of sponge-derived 3-alkylpyridinium compounds and does not involve the drug pyrithione or any pharmacokinetic parameters. |
| popPK | Silva-Mendonça_2026 | irrelevant | 0 | 0 | The paper is a computational drug design study for SARS-CoV-2 3CLpro inhibitors and contains no pharmacokinetic data for pyrithione. |
| popPK | Sánchez-Bayo_2006 | irrelevant | 0 | 0 | The study is an acute toxicity bioassay in crustaceans and does not report any pharmacokinetic parameters for pyrithione. |
| popPK | Teotia_2024 | irrelevant | 0 | 0 | The paper describes the in silico discovery of CDK1 inhibitors and does not study the pharmacokinetics of pyrithione. |
| popPK | Wang_2011 | irrelevant | 0 | 0 | The study evaluates the toxicity (EC50) of copper pyrithione in sea urchin embryos and does not report any pharmacokinetic disposition parameters for pyrithione. |
| popPK | Williamson_2018 | irrelevant | 0 | 0 | The paper is a microbiology study on sulfate-reducing bacteria and mentions zinc pyrithione only as a test compound for antimicrobial efficacy (IC50), not as a subject of pharmacokinetic analysis. |
| popPK | Yang_2019 | irrelevant | 0 | 0 | The study investigates the in vitro mechanism of action of zinc pyrithione on sperm motility, not pharmacokinetic disposition parameters. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
