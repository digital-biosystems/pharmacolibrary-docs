<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01B&quot;,&quot;href&quot;:&quot;atc/L01B.md&quot;},{&quot;label&quot;:&quot;clofarabine&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Clofarabine_Bonate2011_reference&quot;,&quot;label&quot;:&quot;Bonate_2011_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md&quot;,&quot;status&quot;:&quot;rejected&quot;,&quot;css&quot;:&quot;pk-badge--red&quot;,&quot;here&quot;:false}]"></div>

# clofarabine

- **generic name:** clofarabine
- **ATC codes:** `L01BB06`
- **DrugBank:** [DB00631](https://go.drugbank.com/drugs/DB00631) · **PubChem:** [CID 119182](https://pubchem.ncbi.nlm.nih.gov/compound/119182)
- **molar mass:** 303.677 g/mol (C10H11ClFN5O3) — DrugBank
- **groups:** approved, investigational

## About

Clofarabine is a purine analogue anticancer drug used to treat acute lymphoblastic leukemia and acute myeloid leukemia. It is approved and used in a limited, specialist setting, mainly for relapsed or refractory childhood leukemia, with one authorised product in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q5134875](https://www.wikidata.org/wiki/Q5134875) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| clofarabine | parent | 303.677 | C10H11ClFN5O3 | DrugBank | [119182](https://pubchem.ncbi.nlm.nih.gov/compound/119182) | Bonate_2004, Bonate_2011, Nijstad_2021 |
| 6-ketoclofarabine | metabolite | — (mass units only) | — | — | — | — |
| clofarabine triphosphate | metabolite | 543.615 | C10H14ClFN5O12P3 | PubChem | [22921618](https://pubchem.ncbi.nlm.nih.gov/compound/22921618) | Bonate_2004 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 03:21 | 11:56 | 0/3/1 | 0/0/0 | 0/0/1 | 144,373/36,839 | ollama / qwen3.8:27b-mtp-q8_0 | 3 | 0/3 | 3/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--orange">needs review</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.833), gpt-oss-120b (not confirmed, agreement 0.125). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: disposition incomplete — only volume extracted — the engineer needs clearance/e…</sub><br><sub>route_to: `human_review`</sub> | [Nijstad_2021_reference](drugs/drug_clofarabine/Clofarabine_Nijstad2021_reference.md) | — | 1-compartment (no model) | 3 | Nijstad AL et al., Population pharmacokinetics of clofarab…, British journal of clinical… (2021) | [10.1111/bcp.14738](https://doi.org/10.1111/bcp.14738) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.308), gpt-oss-120b (partly confirmed, agreement 0.615). Primary extraction retained.">cross-check: disputed 0/2</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Bonate_2004_reference](drugs/drug_clofarabine/Clofarabine_Bonate2004_reference.md) | — | parent + metabolite (no model) | 5 | Bonate PL et al., Population pharmacokinetics of clofarab…, Journal of clinical pharmac… (2004) | [10.1177/0091270004269236](https://doi.org/10.1177/0091270004269236) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.714), gpt-oss-120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial 0/2</span><br><sub>blocking: T3_output_variable</sub><br><sub>blocking: T3_topology_template</sub><br><sub>route_to: `engineer`</sub> | [Bonate_2011_reference](drugs/drug_clofarabine/Clofarabine_Bonate2011_reference.md) | ▶ model + simulator | 1-compartment, IV | 4 | Bonate PL et al., Population pharmacokinetics of clofarab…, Cancer chemotherapy and pha… (2011) | [10.1007/s00280-010-1376-z](https://doi.org/10.1007/s00280-010-1376-z) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0), gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓ 2/2</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Wang_2019_reference](drugs/drug_clofarabine/Clofarabine_Wang2019_reference.md) | — | 1-compartment (no model) | 0 | Wang H et al., Population Pharmacokinetics of Clofarab…, Biology of blood and marrow… (2019) | [10.1016/j.bbmt.2019.04.017](https://doi.org/10.1016/j.bbmt.2019.04.017) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.75). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from an LLM reading of the title and abstract by gpt-6-luna, p(non-human) 1.00).">in vitro</span> | **DCK** | `Q322` · IC50 | metabolism | [Huang_2018](drugs/drug_clofarabine/pgx_Huang_2018_DCK_Q322.md) | Huang M et al., Clofarabine exerts antileukemic activit…, Cancer medicine (2018) | [10.1002/cam4.1323](https://doi.org/10.1002/cam4.1323) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=clofarabine).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCG2` substrate | DrugBank actor |
| absorption | liver | `ABCG2` substrate | DrugBank actor |
| absorption | mammary gland | `ABCG2` substrate | DrugBank actor |
| absorption | small intestine | `ABCG2` substrate | DrugBank actor |
| absorption | testis | `ABCG2` substrate | DrugBank actor |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: DCK (metabolism), DCK (substrate), DNA (other/unknown), POLA1 (inhibitor), RRM1 (inhibitor), RRM2 (inhibitor), RRM2B (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 4  ·  **relevant:** 4
- **records:** 4  ·  extracted 0  ·  needs_review 1  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Bonate_2004.pdf` | Bonate PL et al., Population pharmacokinetics of clofarab…, Journal of clinical pharmac… (2004) | popPK | 10 | [10.1177/0091270004269236](https://doi.org/10.1177/0091270004269236) | [15496649](https://pubmed.ncbi.nlm.nih.gov/15496649) | The paper reports a population PK model for clofarabine in pediatric patients with explicit numeric values for clearance, volumes, and intercompartmental clearance. |
| `Bonate_2011.pdf` | Bonate PL et al., Population pharmacokinetics of clofarab…, Cancer chemotherapy and pha… (2011) | popPK | 10 | [10.1007/s00280-010-1376-z](https://doi.org/10.1007/s00280-010-1376-z) | [20582417](https://pubmed.ncbi.nlm.nih.gov/20582417) | The paper reports a population PK model for clofarabine with specific numeric values for clearance, volume of distribution, and half-life for both pediatric and adult patients. |
| `Wang_2019.pdf` | Wang H et al., Population Pharmacokinetics of Clofarab…, Biology of blood and marrow… (2019) | popPK | 10 | [10.1016/j.bbmt.2019.04.017](https://doi.org/10.1016/j.bbmt.2019.04.017) | [31002993](https://pubmed.ncbi.nlm.nih.gov/31002993) | The paper reports a population PK model for clofarabine with explicit numeric values for clearance, volumes, and intercompartmental clearance in the abstract. |
| `Patel_2015.pdf` | Patel YT et al., Preclinical examination of clofarabine…, Cancer chemotherapy and pha… (2015) | popPK | 9 | [10.1007/s00280-015-2713-z](https://doi.org/10.1007/s00280-015-2713-z) | [25724157](https://pubmed.ncbi.nlm.nih.gov/25724157) | The study reports a population PK model for clofarabine in mice, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only derived partition coefficients and unbound fractions. |
| `Beach_2014.pdf` | Beach LB et al., Novel inhibitors of human immunodeficie…, The Journal of general viro… (2014) | pd | 4 | [10.1099/vir.0.069864-0](https://doi.org/10.1099/vir.0.069864-0) | [25103850](https://www.ncbi.nlm.nih.gov/pubmed/25103850) | metadata signals extractable PD data (EC50) |

<sub>queue written 2026-10-15T03:09:37.533458+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Beach_2014 | irrelevant | 0 | 0 | no_text gate: only 67 chars of text extracted (&lt; 400) |
| PD | Beach_2014 | not_relevant | 0 | 0 | The paper focuses on HIV-2 inhibitors and does not contain any pharmacodynamic or exposure-response data for clofarabine. |
| PGx | Ben_2021 | not_relevant | 0 | 0 | The paper is a review discussing conditioning regimens and mentions clofarabine only as a potential agent for future optimization, without reporting any specific pharmacogenomic effects on its PK or PD parameters. |
| PGx | Contreras_2020 | not_relevant | 0 | 0 | The paper reports clinical outcomes of a conditioning regimen and mentions clofarabine only as an occasional add-on, without analyzing any pharmacogenomic effects on its PK or PD parameters. |
| PGx | Fukuda_2012 | not_relevant | 2 | 0 | The text is a review discussing the general role of ABC transporters in nucleoside drug resistance and mentions clofarabine as a substrate, but it does not report specific pharmacogenomic effects (gene variant -&gt; PK/PD change) for clofarabine. |
| popPK | Inaba_2019 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of sorafenib, with clofarabine serving only as a co-administered drug or covariate. |
| PGx | Koh_2016 | not_relevant | 0 | 0 | The study evaluates PK and safety in a small cohort but does not report any association between specific gene variants/genotypes and pharmacokinetic or pharmacodynamic parameters. |
| PGx | Lamba_2007 | not_relevant | 2 | 5 | The paper reports pharmacogenomic effects on DCK enzyme activity and ara-C metabolite levels, but does not report PK/PD parameters for clofarabine. |
| PGx | Lamba_2009 | not_relevant | 0 | 0 | The paper discusses pharmacogenomics for cytarabine and only mentions clofarabine as a related drug in the same metabolic pathway, without reporting specific PK/PD data for clofarabine. |
| popPK | Lindemalm_2003 | irrelevant | 0 | 0 | The study is an in-vitro cytotoxicity and cellular metabolism analysis, not a pharmacokinetic study reporting disposition parameters like clearance or volume. |
| PGx | Marrero_2024 | not_relevant | 0 | 0 | The paper reports associations between a pharmacogenomic score and clinical outcomes (survival), not changes in pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | Mondesir_2019 | not_relevant | 0 | 0 | The paper reports on the prognostic impact of AML gene mutations on clinical outcomes (survival/response) rather than the pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | Nagai_2011 | not_relevant | 2 | 5 | The paper investigates the interaction between dCK and ABCG2 expression levels (not specific genetic variants) on drug cytotoxicity and efflux in cell lines, rather than reporting a pharmacogenomic effect of a specific genotype on a PK/PD parameter in humans. |
| PGx | Parekh_2024 | not_relevant | 0 | 0 | The paper reports clinical response rates and correlations with BRAFV600E variant allele frequency, but does not report pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| popPK | Patel_2015 | relevant | 9 | 2 | The study reports a population PK model for clofarabine in mice, but specific numeric values for clearance, volume, or half-life are not explicitly listed in the provided text, only derived partition coefficients and unbound fractions. |
| PGx | Robak_2012 | not_relevant | 0 | 0 | The paper is a general review of purine nucleoside analogs and does not report specific pharmacogenomic effects on clofarabine PK/PD parameters. |
| PGx | Selukar_2025 | not_relevant | 0 | 0 | The paper reports on survival outcomes (OS/EFS) and software visualization, not pharmacokinetic or pharmacodynamic parameters of clofarabine. |
| PGx | de_2008 | not_relevant | 2 | 5 | The paper reports in vitro transporter function and cellular resistance mechanisms, not a pharmacogenomic effect on PK/PD parameters in humans. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 03:10 UTC</sub>
