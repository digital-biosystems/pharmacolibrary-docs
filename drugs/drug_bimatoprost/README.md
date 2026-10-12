<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;S01E&quot;,&quot;href&quot;:&quot;atc/S01E.md&quot;},{&quot;label&quot;:&quot;bimatoprost&quot;}]"></div>

# bimatoprost

- **generic name:** bimatoprost
- **ATC codes:** `S01EE03`
- **DrugBank:** [DB00905](https://go.drugbank.com/drugs/DB00905) · **PubChem:** [CID 5311027](https://pubchem.ncbi.nlm.nih.gov/compound/5311027)
- **molar mass:** 415.5656 g/mol (C25H37NO4) — DrugBank
- **groups:** approved, investigational

## About

Bimatoprost is a prostaglandin analogue used to treat glaucoma and ocular hypertension, and also to grow eyelashes (hypotrichosis). It is authorised in the European Union and widely used as an eye drop for these eye conditions.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q2393348](https://www.wikidata.org/wiki/Q2393348) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 18:55 | 3:36 | 0/1/0 | 3/1/0 | 0/0/6 | 115,849/5,006 | einfracz / qwen3.8-27b | 11 | 0/2 | 11/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="The paper reports both human and animal data (from the LLM relevance screen, p(non-human) 0.50).">human + animal</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Kompella_2022_reference](drugs/drug_bimatoprost/Bimatoprost_Kompella2022_reference.md) | — | 1-compartment (no model) | 0 | Kompella R et al., Pharmacokinetic-pharmacodynamic model t…, European journal of ophthal… (2022) | [10.1177/11206721221135910](https://doi.org/10.1177/11206721221135910) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.6). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by qwen3.8-27b, p(non-human) 1.00).">in vitro</span> | [Moschos_2016_PAF_induced_aggregation](drugs/drug_bimatoprost/pd_Moschos_2016_PAF_induced_aggregation.md) | PAF-induced aggregation ← bimatoprost · inhibition effect | — | Moschos MM et al., Impact of prostaglandin glaucoma drops…, Drug design, development an… (2016) | [10.2147/DDDT.S117806](https://doi.org/10.2147/DDDT.S117806) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.8). The first reading is what the record holds.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 0.00).">in vitro</span> | [Sharif_2003_4_PI_turnover](drugs/drug_bimatoprost/pd_Sharif_2003_4_PI_turnover.md) | [(3)H]-IPs ← bimatoprost acid · direct sigmoid Emax (Hill) effect | — | Sharif NA et al., Human trabecular meshwork cell response…, Investigative ophthalmology… (2003) | [10.1167/iovs.02-0323](https://doi.org/10.1167/iovs.02-0323) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--orange" title="re-read by einfracz:gpt-oss-120b (?, agreement 0.0). The first reading is what the record holds.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Sharif_2008_2_contraction](drugs/drug_bimatoprost/pd_Sharif_2008_2_contraction.md) | contraction ← bimatoprost · direct Emax (saturable) effect | — | Sharif NA, Synthetic FP-prostaglandin-induced cont…, Prostaglandins, leukotriene… (2008) | [10.1016/j.plefa.2008.01.005](https://doi.org/10.1016/j.plefa.2008.01.005) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.5). The first reading is what the record holds.">cross-check: disputed</span> | [Raber_2015_IOP](drugs/drug_bimatoprost/pd_Raber_2015_IOP.md) | IOP change from baseline ← dose · direct Emax (saturable) effect | — | Raber S et al., A model-based dose-response meta-analys…, Journal of ocular pharmacol… (2015) | [10.1089/jop.2014.0106](https://doi.org/10.1089/jop.2014.0106) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.667). The first reading is what the record holds.">cross-check: disputed</span> | [Raber_2015_hyperemia](drugs/drug_bimatoprost/pd_Raber_2015_hyperemia.md) | incidence of hyperemia ← dose · direct Emax (saturable) effect | — | Raber S et al., A model-based dose-response meta-analys…, Journal of ocular pharmacol… (2015) | [10.1089/jop.2014.0106](https://doi.org/10.1089/jop.2014.0106) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Zhou_2022](drugs/drug_bimatoprost/pgx_Zhou_2022_ABCB1_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **GMDS** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Zhou_2022](drugs/drug_bimatoprost/pgx_Zhou_2022_GMDS_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **MRP4** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Zhou_2022](drugs/drug_bimatoprost/pgx_Zhou_2022_MRP4_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **PTGFR** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | target | [Zhou_2022](drugs/drug_bimatoprost/pgx_Zhou_2022_PTGFR_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **PTGS1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | unknown | [Zhou_2022](drugs/drug_bimatoprost/pgx_Zhou_2022_PTGS1_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |
| <span class="pk-badge pk-badge--neutral" title="the paper links the gene to the drug but states no effect size on a model parameter, so it changes no model.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). The first reading is what the record holds.">cross-check: partial</span> | **SLCO2A1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Zhou_2022](drugs/drug_bimatoprost/pgx_Zhou_2022_SLCO2A1_Q100.md) | Zhou L et al., Clinical pharmacology and pharmacogenet…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1015338](https://doi.org/10.3389/fphar.2022.1015338) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=bimatoprost).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | paper PGx gene |
| absorption | kidney | `ABCB1` transport | paper PGx gene |
| absorption | liver | `ABCB1` transport | paper PGx gene |
| absorption | placenta | `ABCB1` transport | paper PGx gene |
| absorption | small intestine | `ABCB1` transport | paper PGx gene |
| absorption | testis | `ABCB1` transport | paper PGx gene |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: GMDS (unknown), MRP4 (transport), PTGER1 (target), PTGER3 (target), PTGFR (target), PTGS1 (unknown), SLCO2A1 (transport).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 49 matched, 48 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Kompella_2022.pdf` | Kompella R et al., Pharmacokinetic-pharmacodynamic model t…, European journal of ophthal… (2022) | popPK | 9 | [10.1177/11206721221135910](https://doi.org/10.1177/11206721221135910) | [36397720](https://pubmed.ncbi.nlm.nih.gov/36397720) | The paper provides a PK-PD model for bimatoprost with specific quantitative parameters such as aqueous humor elimination rate constants (0.9 and 0.68 h-1) and drug release rates. |

<sub>queue written 2026-10-07T18:54:23.796447+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Ansari_2004 | irrelevant | 0 | 0 | The study is an in vitro pharmacological and mechanistic investigation of signaling pathways in bovine tissue, not a pharmacokinetic study reporting quantitative disposition parameters for bimatoprost. |
| popPK | Impagnatiello_2011 | irrelevant | 0 | 0 | The study focuses on the pharmacodynamic effects of a novel compound (NCX 139) and uses bimatoprost only as a comparator agent without reporting its pharmacokinetic parameters. |
| popPK | Impagnatiello_2015 | irrelevant | 2 | 0 | The study reports pharmacodynamic efficacy (IOP lowering) and tissue concentration comparisons without providing quantitative pharmacokinetic parameters like clearance, volume, or half-life. |
| popPK | Kelly_2003 | irrelevant | 0 | 0 | The study evaluates receptor binding and functional agonist activity (pharmacodynamics) rather than pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Olevson_2025 | irrelevant | 0 | 0 | The study is a clinical outcome analysis of the bimatoprost SR implant's efficacy (IOP reduction and medication burden) and does not report quantitative pharmacokinetic parameters such as clearance, volume of distribution, or half-life. |
| popPK | Romano_2007 | irrelevant | 0 | 0 | The study is an in-vitro pharmacodynamic/mechanistic study of ciliary muscle contraction and does not report pharmacokinetic parameters (CL, V, ka, etc.). |
| popPK | Sharif_2001 | irrelevant | 0 | 0 | The paper is an in vitro pharmacodynamic study of receptor binding and calcium mobilization, containing no pharmacokinetic parameters. |
| popPK | Sharif_2002 | irrelevant | 0 | 0 | The study reports in-vitro receptor binding/agonist activity (EC50) rather than pharmacokinetic disposition parameters (CL, V, ka). |
| popPK | Sharif_2003 | irrelevant | 0 | 0 | The study reports receptor binding and functional agonism data (in vitro mechanistic), not pharmacokinetic disposition parameters. |
| popPK | Sharif_2003_2 | irrelevant | 0 | 0 | The paper reports in-vitro receptor binding affinities and functional potencies (Ki, EC50), not pharmacokinetic disposition parameters. |
| popPK | Sharif_2003_3 | irrelevant | 0 | 0 | The study is an in-vitro pharmacological assessment of receptor signaling (phosphoinositide hydrolysis, calcium mobilization) in human ciliary muscle cells, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Sharif_2003_4 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic pharmacology study measuring receptor agonist potency (EC50) in cell lines, not a pharmacokinetic study reporting disposition parameters. |
| popPK | Sharif_2008 | irrelevant | 0 | 0 | This is an in vitro pharmacodynamic study reporting receptor potency (EC50), not pharmacokinetic disposition parameters. |
| popPK | Sharif_2008_2 | irrelevant | 0 | 0 | The study reports in-vitro pharmacodynamic data (EC50) for uterine contraction, not quantitative pharmacokinetic disposition parameters. |
| PGx | Silvestri_2013 | not_relevant | 0 | 0 | The paper describes the biological mechanism of bimatoprost on adipogenesis but does not investigate the impact of gene variants or genotypes on its pharmacokinetic or pharmacodynamic parameters. |
| popPK | Stamer_2010 | irrelevant | 0 | 0 | This is an in-vitro mechanistic study examining receptor activation and cell contractility, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| popPK | Woodward_2003 | irrelevant | 3 | 0 | The paper describes a pharmacological characterization and qualitative distribution/metabolism study without reporting quantitative population PK parameters (CL, V, Q, ka, t1/2) or a compartmental model. |
| PGx | Zhou_2022 | not_relevant | 5 | 1 | The paper is a review of pharmacogenetics for prostaglandin analogues, mentions bimatoprost efficacy but attributes the pharmacogenomic variation to a class effect and does not provide specific quantitative genotype-PK/PD parameters for bimatoprost in the text. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 18:54 UTC</sub>
