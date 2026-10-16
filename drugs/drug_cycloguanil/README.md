<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;P01B&quot;,&quot;href&quot;:&quot;atc/P01B.md&quot;},{&quot;label&quot;:&quot;Cycloguanil&quot;}]"></div>

# Cycloguanil

- **generic name:** Cycloguanil
- **ATC codes:** `P01BB02`
- **DrugBank:** [DB14763](https://go.drugbank.com/drugs/DB14763) · **PubChem:** not captured
- **groups:** approved

## About

Cycloguanil is an antimalarial agent belonging to the biguanide class, used to treat malaria. It is an approved drug, but it is not widely used on its own; it is mainly known as the active metabolite of proguanil.

<small>⚠️ **Unverified** — written by `glm-5.3-flash` from general knowledge (no Wikidata entry found) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| cycloguanil | parent | 251.718 | C11H14ClN5 | PubChem | [9049](https://pubchem.ncbi.nlm.nih.gov/compound/9049) | Khwarg_2024, Na-Bangchang_2005 |
| chlorcycloguanil | metabolite | — (mass units only) | — | — | — | — |
| proguanil | metabolite | 253.734 | C11H16ClN5 | PubChem | [6178111](https://pubchem.ncbi.nlm.nih.gov/compound/6178111) | Na-Bangchang_2005 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:43 | 5:12 | 0/3/0 | 0/0/0 | 2/0/9 | 362,740/24,302 | einfracz / qwen3.8-27b | 21 | 1/18 | 21/0 | 1 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Khwarg_2024_reference](drugs/drug_cycloguanil/Cycloguanil_Khwarg2024_reference.md) | — | nonlinear / manual (no model) | 0 | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (primary re-run, agreement 0.091). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Na-Bangchang_2005_reference](drugs/drug_cycloguanil/Cycloguanil_NaBangchang2005_reference.md) | — | parent + metabolite (no model) | 0 | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.5). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Watkins_1987_reference](drugs/drug_cycloguanil/Cycloguanil_Watkins1987_reference.md) | — | general linear (no model) | 0 | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) |

## Pharmacogenomics (PGx)

| status | gene | affects | mechanism | detail | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green" title="Phenotype/genotype-specific effect on a named model parameter (θ).">quantitative</span> | **SLC22A1** | `Q375` · CLm,norm/F | transport | [Khwarg_2024](drugs/drug_cycloguanil/pgx_Khwarg_2024_SLC22A1_Q375.md) | Khwarg J et al., Effect of SLC22A1 polymorphism on the p…, Clinical and translational… (2024) | [10.1111/cts.70103](https://doi.org/10.1111/cts.70103) |
| <span class="pk-badge pk-badge--neutral" title="Adverse-reaction risk allele; no quantitative PK/PD parameter effect.">safety allele</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.75). Primary extraction retained.">cross-check: partial</span> | **CYP2C9** | `safety` — adverse-reaction risk (HLA / safety allele) — no parameter shift | safety_allele | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2C9_safety.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **ABCB1** | `Q40` · Fab | transport | [Hsin_2020](drugs/drug_cycloguanil/pgx_Hsin_2020_ABCB1_Q40.md) | Hsin CH et al., Combinations of common SNPs of the tran…, Scientific reports (2020) | [10.1038/s41598-020-69326-y](https://doi.org/10.1038/s41598-020-69326-y) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from an LLM reading of the title and abstract by glm-5.3-flash, p(non-human) 0.90).">mouse</span> | **OCT1** | `Q410` · Kp | transport | [Morse_2021](drugs/drug_cycloguanil/pgx_Morse_2021_OCT1_Q410.md) | Morse BL et al., Expansion of Knowledge on OCT1 Variant…, Frontiers in pharmacology (2021) | [10.3389/fphar.2021.631793](https://doi.org/10.3389/fphar.2021.631793) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP3A5** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Park_2019](drugs/drug_cycloguanil/pgx_Park_2019_CYP3A5_Q100.md) | Park JY et al., Influence of midazolam-related genetic…, Scientific reports (2019) | [10.1038/s41598-019-52517-7](https://doi.org/10.1038/s41598-019-52517-7) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **MDR1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Park_2019](drugs/drug_cycloguanil/pgx_Park_2019_MDR1_Q100.md) | Park JY et al., Influence of midazolam-related genetic…, Scientific reports (2019) | [10.1038/s41598-019-52517-7](https://doi.org/10.1038/s41598-019-52517-7) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **ABCB1** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | transport | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_ABCB1_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2B6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2B6_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP2C19** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2C19_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss-120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span> | **CYP2D6** | `Q100` — no parameter target — an association/risk finding, not a parameter shift | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP2D6_Q100.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |
| <span class="pk-badge pk-badge--neutral" title="Gene–drug association without a quantitative parameter effect.">qualitative</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (?, agreement 0.25). Primary extraction retained.">cross-check: partial</span> | **CYP3A4** | `Q34` · Css | metabolism | [Ramli_2021](drugs/drug_cycloguanil/pgx_Ramli_2021_CYP3A4_Q34.md) | Ramli FF, Pharmacogenomics biomarkers for persona…, Bosnian journal of basic me… (2021) | [10.17305/bjbms.2020.4897](https://doi.org/10.17305/bjbms.2020.4897) |

<details class="pk-legend"><summary>PGx evidence and model availability</summary><table><tbody><tr><td><span class="pk-badge pk-badge--green">quantitative</span></td><td>Phenotype/genotype-specific effect on a named model parameter (θ).</td></tr><tr><td><span class="pk-badge pk-badge--neutral">qualitative</span></td><td>Gene–drug association without a quantitative parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">guideline estimate</span></td><td>CPIC/DPWG-derived estimate, not a primary-paper estimate.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">safety allele</span></td><td>Adverse-reaction risk allele; no quantitative PK/PD parameter effect.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>the extraction is incomplete or inconsistent.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>not accepted.</td></tr><tr><td><span class="pk-badge pk-badge--green">▶ simulatable</span></td><td>Phenotype-specific browser simulation and downloadable PGx model available.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">model only</span></td><td>PGx model available; browser simulation unavailable.</td></tr></tbody></table></details>

<details class="legend">
<summary>PGx field definitions</summary>
<table><thead><tr><th>Field</th><th>Definition</th></tr></thead><tbody><tr><td><code>gene</code></td><td>Associated gene; papers with multiple genes contribute multiple records.</td></tr><tr><td><code>affects</code></td><td>Target PK/PD parameter (Q-code and name); θ scales its baseline value. Q100 denotes a non-parameter association; safety denotes adverse-reaction risk. PA identifiers indicate ClinPGx/PharmGKB guideline-derived records.</td></tr><tr><td><code>mechanism</code></td><td>Metabolism, transport, target, formation, safety_allele, or unknown.</td></tr><tr><td><code>detail</code></td><td>Source-paper identifier and full-record link.</td></tr><tr><th colspan="2" style="text-align:left;padding-top:10px">placeholders</th></tr><tr><td><code>not captured</code></td><td>Not recorded; not equivalent to zero.</td></tr><tr><td><code>—</code></td><td>Not applicable or not displayed.</td></tr><tr><td><code>not verified</code></td><td>Record not accepted; displayed estimates remain unverified.</td></tr></tbody></table>
</details>

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=cycloguanil).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` transport | PGx paper |
| absorption | kidney | `ABCB1` transport | PGx paper |
| absorption | liver | `ABCB1` transport | PGx paper |
| absorption | placenta | `ABCB1` transport | PGx paper |
| absorption | small intestine | `ABCB1` transport | PGx paper |
| absorption | testis | `ABCB1` transport | PGx paper |
| metabolism | brain | `CYP2D6` metabolism | PGx paper |
| metabolism | kidney | `CYP3A5` metabolism | PGx paper |
| metabolism | liver | `CYP2B6` metabolism, `CYP2C19` metabolism, `CYP2C9` safety_allele, `CYP2D6` metabolism, `CYP3A4` metabolism, `CYP3A5` metabolism, `SLC22A1` transport | PGx paper |
| metabolism | small intestine | `CYP3A4` metabolism, `CYP3A5` metabolism | PGx paper |

<sub>Actors without a tissue in the table: MDR1 (transport), OCT1 (transport), PDF (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 233 matched, 85 returned
- **screened:** 3  ·  **relevant:** 2
- **records:** 3  ·  extracted 0  ·  needs_review 0  ·  rejected 3  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_16 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Na-Bangchang_2005.pdf` | Na-Bangchang K et al., The pharmacokinetics and pharmacodynami…, European journal of clinica… (2005) | popPK | 10 | [10.1007/s00228-005-0969-7](https://doi.org/10.1007/s00228-005-0969-7) | [16041597](https://pubmed.ncbi.nlm.nih.gov/16041597) | The paper reports quantitative pharmacokinetic parameters (CL, t1/2) for cycloguanil in humans, with numeric ranges present in the text. |
| `Watkins_1987.pdf` | Watkins WM et al., A preliminary pharmacokinetic study of…, The Journal of pharmacy and… (1987) | popPK | 8 | [10.1111/j.2042-7158.1987.tb06263.x](https://doi.org/10.1111/j.2042-7158.1987.tb06263.x) | [2884288](https://pubmed.ncbi.nlm.nih.gov/2884288) | Reports PK parameters for cycloguanil (metabolite of proguanil) in humans, but only lists rate constants (k_e, F) and not standard clearance/volume/half-life directly, though they are derivable. |
| `Lochner_2014.pdf` | Lochner M et al., The antimalarial drug proguanil is an a…, The Journal of pharmacology… (2014) | pd | 4 | [10.1124/jpet.114.218461](https://doi.org/10.1124/jpet.114.218461) | [25277140](https://www.ncbi.nlm.nih.gov/pubmed/25277140) | metadata signals extractable PD data (IC50) |
| `Thapar_2003.pdf` | Thapar MM et al., Pharmacodynamic interactions among atov…, Transactions of the Royal S… (2003) | pd | 4 | [10.1016/s0035-9203(03)90162-3](https://doi.org/10.1016/s0035-9203(03)90162-3) | [15228254](https://www.ncbi.nlm.nih.gov/pubmed/15228254) | metadata signals extractable PD data (EC50) |
| `Wang_2015.pdf` | Wang Y et al., Capitate glandular trichomes of Paragut…, Journal of agricultural and… (2015) | pd | 4 | [10.1021/acs.jafc.5b04113](https://doi.org/10.1021/acs.jafc.5b04113) | [26513276](https://www.ncbi.nlm.nih.gov/pubmed/26513276) | metadata signals extractable PD data (EC50) |
| `Brazeau_2021.pdf` | Brazeau D et al., Association of ABCC2 Haplotypes to Myco…, Journal of clinical pharmac… (2021) | pgx | 8 | [10.1002/jcph.1932](https://doi.org/10.1002/jcph.1932) | [34169529](https://www.ncbi.nlm.nih.gov/pubmed/34169529) | metadata signals extractable PGX data (ABCC2, PK/PD-context) |
| `Funakoshi_2019.pdf` | Funakoshi R et al., Effects of proton pump inhibitors, esom…, British journal of clinical… (2019) | pgx | 8 | [10.1111/bcp.13914](https://doi.org/10.1111/bcp.13914) | [30845361](https://www.ncbi.nlm.nih.gov/pubmed/30845361) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Somogyi_1996.pdf` | Somogyi AA et al., Pharmacokinetic evaluation of proguanil…, British journal of clinical… (1996) | pgx | 8 | [10.1111/j.1365-2125.1996.tb00179.x](https://doi.org/10.1111/j.1365-2125.1996.tb00179.x) | [8866915](https://www.ncbi.nlm.nih.gov/pubmed/8866915) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Thapar_2002.pdf` | Thapar MM et al., Time-dependent pharmacokinetics and dru…, European journal of clinica… (2002) | pgx | 8 | [10.1007/s00228-002-0426-9](https://doi.org/10.1007/s00228-002-0426-9) | [11956669](https://www.ncbi.nlm.nih.gov/pubmed/11956669) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Soyinka_2010.pdf` | Soyinka JO et al., Alteration of pharmacokinetics of progu…, European journal of pharmac… (2010) | pgx | 7 | [10.1016/j.ejps.2009.11.012](https://doi.org/10.1016/j.ejps.2009.11.012) | [19961932](https://www.ncbi.nlm.nih.gov/pubmed/19961932) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Birkett_1994.pdf` | Birkett DJ et al., In vitro proguanil activation to cyclog…, British journal of clinical… (1994) | pgx | 5 | [10.1111/j.1365-2125.1994.tb05707.x](https://doi.org/10.1111/j.1365-2125.1994.tb05707.x) | [8054246](https://www.ncbi.nlm.nih.gov/pubmed/8054246) | metadata signals extractable PGX data (CYP3A) |
| `Bolaji_2002.pdf` | Bolaji OO et al., Polymorphic oxidative metabolism of pro…, European journal of clinica… (2002) | pgx | 5 | [10.1007/s00228-002-0509-7](https://doi.org/10.1007/s00228-002-0509-7) | [12451432](https://www.ncbi.nlm.nih.gov/pubmed/12451432) | metadata signals extractable PGX data (CYP2C19) |
| `Brosen_2015.pdf` | Brosen K, Pharmacogenetics of drug oxidation via…, Drug metabolism and persona… (2015) | pgx | 5 | [10.1515/dmdi-2014-0029](https://doi.org/10.1515/dmdi-2014-0029) | [25719307](https://www.ncbi.nlm.nih.gov/pubmed/25719307) | metadata signals extractable PGX data (CYP2D6) |
| `Helsby_1998.pdf` | Helsby NA et al., Hepatic cytochrome P450 CYP2C activity…, Acta dermato-venereologica (1998) | pgx | 5 | [10.1080/000155598433359](https://doi.org/10.1080/000155598433359) | [9534880](https://www.ncbi.nlm.nih.gov/pubmed/9534880) | metadata signals extractable PGX data (CYP2C) |
| `Kaneko_1999.pdf` | Kaneko A et al., Intrinsic efficacy of proguanil against…, The Journal of infectious d… (1999) | pgx | 5 | [10.1086/314683](https://doi.org/10.1086/314683) | [10068594](https://www.ncbi.nlm.nih.gov/pubmed/10068594) | metadata signals extractable PGX data (CYP2C19) |
| `Partovian_1995.pdf` | Partovian C et al., Comparison of chloroguanide and mepheny…, Clinical pharmacology and t… (1995) | pgx | 5 | [10.1016/0009-9236(95)90241-4](https://doi.org/10.1016/0009-9236(95)90241-4) | [7554698](https://www.ncbi.nlm.nih.gov/pubmed/7554698) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-14T23:39:36.244643+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| PGx | Agomo_2016 | not_relevant | 0 | 0 | The study investigates Plasmodium falciparum resistance markers (Pfcrt, Pfmdr1, Pfdhfr) in the parasite, not human pharmacogenomic variants affecting the PK or PD of cycloguanil. |
| popPK | Aikio_2025 | irrelevant | 0 | 0 | The paper is a mechanistic study of TDP-43 phosphorylation and methylation in ALS, with no mention of the drug cycloguanil or any pharmacokinetic parameters. |
| PGx | Arfeen_2014 | not_relevant | 2 | 2 | The paper is a quantum chemical study of the reaction mechanism and does not report on gene variants affecting pharmacokinetic or pharmacodynamic parameters of cycloguanil. |
| popPK | Ariefta_2023 | irrelevant | 0 | 0 | The paper investigates the antimalarial activity of Phebestin, not the pharmacokinetics of cycloguanil. |
| PGx | Bapiro_2001 | not_relevant | 0 | 0 | The study reports cycloguanil's in vitro CYP inhibition properties but does not investigate how gene variants affect cycloguanil's PK or PD parameters. |
| PGx | Birkett_1994 | not_relevant | 2 | 0 | The study reports in vitro correlations between proguanil activation and CYP activity levels, but does not link a specific gene variant/genotype to a PK/PD parameter. |
| PGx | Brazeau_2021 | not_relevant | 0 | 0 | The paper investigates the pharmacogenomics of mycophenolic acid, not cycloguanil. |
| PGx | Brosen_2015 | not_relevant | 5 | 1 | The paper mentions the bioactivation of proguanil to cycloguanil is impaired in CYP2C19 poor metabolizers, but provides no quantitative effect sizes, PK/PD parameter data, or fitted models for cycloguanil itself. |
| PGx | Brøsen_1991 | not_relevant | 3 | 5 | The paper mentions that proguanil conversion to cycloguanil is reduced in mephenytoin-PM, but it is a general review without quantitative data, specific tables, or fitted effect sizes for cycloguanil PK. |
| popPK | Canevarolo_2026 | irrelevant | 0 | 0 | The paper is a genomic and epigenomic analysis of multiple myeloma disease progression and contains no pharmacokinetic data for cycloguanil. |
| popPK | Chotsiri_2021 | irrelevant | 0 | 0 | The study is a population pharmacokinetic analysis of piperaquine, and cycloguanil is only mentioned as a separate antimalarial drug with altered exposure in pregnancy, with no data reported for it. |
| PGx | Desta_2002 | not_relevant | 3 | 1 | Mentions cycloguanil as a CYP2C19 substrate, but explicitly states there are no clinical data regarding PK/PD effects in poor metabolisers. |
| PGx | Diekstra_2015 | not_relevant | 0 | 0 | The paper studies sunitinib, not cycloguanil. |
| PGx | Edstein_1996 | not_relevant | 7 | 0 | The study reports that pharmacogenomic phenotype (EM/PM) does not alter the pharmacodynamic outcome (antimalarial activity), effectively a null result, and no quantitative effect sizes are provided. |
| popPK | Elias_2026 | irrelevant | 0 | 0 | The paper is a review on gene editing strategies for neurological disorders and does not contain any pharmacokinetic data or mention of cycloguanil. |
| popPK | Ettema_2025 | irrelevant | 0 | 0 | The study is a rehabilitation study comparing gait training modalities in stroke and spinal cord injury patients, with no pharmacokinetic data for cycloguanil. |
| popPK | Farrar_2024 | irrelevant | 0 | 0 | The paper describes a method for antibiotic susceptibility testing in *E. coli* and does not involve cycloguanil or pharmacokinetics. |
| PGx | Ferraro_2014 | not_relevant | 0 | 0 | The paper discusses HCV genetic variability and resistance to protease inhibitors, not the pharmacogenomics of cycloguanil. |
| popPK | Francesconi_2018 | irrelevant | 0 | 0 | This is a medicinal chemistry paper describing the synthesis and antiviral activity (EC50) of new cycloguanil-like derivatives, not a pharmacokinetic study reporting disposition parameters for cycloguanil itself. |
| PGx | Funakoshi_2019 | not_relevant | 2 | 10 | The study reports a drug-drug interaction (proton pump inhibitors inhibiting CYP2C19), not a genetic variant-based pharmacogenomic effect on PK parameters. |
| popPK | Guilhaumou_2011 | irrelevant | 0 | 0 | The study investigates the population pharmacokinetics of vincristine, not cycloguanil. |
| PGx | Guilhaumou_2011 | not_relevant | 0 | 0 | The study investigates vincristine pharmacokinetics and genetics, not cycloguanil. |
| PGx | Helsby_1990 | not_relevant | 3 | 10 | The paper investigates in vitro metabolism kinetics and identifies a potential polymorphic enzyme (mephenytoin hydroxylase) but does not report specific genotype-to-PK parameter effects or fitted effect sizes for individual genetic variants. |
| PGx | Helsby_1998 | not_relevant | 2 | 1 | The paper reports phenotypic associations (poor metabolizer status) in psoriasis patients but does not identify specific gene variants/genotypes for CYP2C. |
| popPK | Hsin_2020 | irrelevant | 0 | 0 | The study reports pharmacokinetic parameters for digoxin, not cycloguanil. |
| PGx | Hsin_2020 | not_relevant | 0 | 0 | The paper investigates the pharmacokinetics of digoxin, not cycloguanil. |
| popPK | Li_2010 | irrelevant | 0 | 0 | The paper studies a bacterial enzyme (alpha-cyclodextrin glycosyltransferase) and contains no pharmacokinetic data for cycloguanil. |
| popPK | Lochner_2014 | irrelevant | 0 | 0 | The paper is a mechanistic in-vitro study of receptor binding, not a pharmacokinetic study of disposition parameters. |
| popPK | McGready_2003 | irrelevant | 1 | 0 | The study focuses on the PK of atovaquone and proguanil, and while cycloguanil was measured, no quantitative disposition parameters or model values for cycloguanil are reported in the evidence. |
| PGx | McGready_2003_2 | not_relevant | 0 | 0 | The paper investigates physiological changes (pregnancy/OCP use) affecting CYP2C19 activity, not the effect of a specific gene variant or genotype. |
| popPK | Nicco_2025 | irrelevant | 0 | 0 | The paper is a study protocol for acoziborole in gHAT and does not report pharmacokinetic parameters for cycloguanil. |
| PGx | Park_2012 | not_relevant | 0 | 0 | The study investigates GNLY polymorphisms in relation to Hepatitis B clearance, not the pharmacokinetics or pharmacodynamics of cycloguanil. |
| PGx | Park_2019 | not_relevant | 0 | 0 | The study focuses on midazolam, not cycloguanil. |
| PGx | Partovian_1995 | not_relevant | 2 | 5 | The study investigates drug-drug interactions and correlation of probe drugs in extensive metabolizers, but does not report genetic associations (variant-specific) for PK parameters of cycloguanil. |
| PGx | Ramli_2021 | not_relevant | 0 | 0 | The paper focuses exclusively on methadone pharmacogenomics and does not mention cycloguanil. |
| PGx | Rana_2022 | not_relevant | 0 | 0 | The paper reports the prevalence of malaria parasite resistance gene mutations (Pfdhfr/Pfdhps) in P. falciparum isolates, which is a measure of pathogen genomic surveillance, not a human pharmacogenomic effect on the pharmacokinetics or pharmacodynamics of the drug. |
| PGx | Rasmussen_1998 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction (fluvoxamine inhibiting CYP2C19) rather than a pharmacogenomic effect of a gene variant on cycloguanil's PK/PD. |
| PGx | Siame_2015 | not_relevant | 0 | 0 | The study assesses the prevalence of resistance mutations (dhfr/dhps) in the parasite population but does not report patient-level pharmacokinetic or pharmacodynamic parameter changes. |
| PGx | Soyinka_2010 | not_relevant | 0 | 0 | The study investigates drug-drug interactions (efavirenz effect on proguanil/cycloguanil PK) rather than the impact of genetic variants on pharmacokinetic or pharmacodynamic parameters. |
| popPK | Thapar_2003 | irrelevant | 0 | 0 | no_text gate: only 111 chars of text extracted (&lt; 400) |
| popPK | Tonelli_2017 | irrelevant | 0 | 0 | The study reports in vitro antiviral activity and DHFR inhibition of cycloguanil analogues, not pharmacokinetic disposition parameters like clearance or volume. |
| popPK | Vaubel_2025 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of navtemadlin, not cycloguanil. |
| popPK | Wang_2015 | irrelevant | 0 | 0 | The paper is a botanical chemistry study investigating phytotoxic diterpenoids in plant trichomes and contains no pharmacokinetic data for cycloguanil. |
| popPK | Watkins_1987 | relevant | 8 | 4 | Reports PK parameters for cycloguanil (metabolite of proguanil) in humans, but only lists rate constants (k_e, F) and not standard clearance/volume/half-life directly, though they are derivable. |
| PGx | Wright_1995 | not_relevant | 3 | 10 | The study investigates drug-drug inhibition of CYP2C19 by other substrates, not a genetic variant effect on pharmacokinetics or pharmacodynamics. |
| PGx | Yang_2023 | not_relevant | 5 | 4 | The study investigates CYP2C19-mediated drug-drug interactions (co-administration of acid-reducing agents) rather than genetic pharmacogenomic effects (e.g., comparing *1/*2 vs *1/*1), despite restricting the population to EMs. |
| popPK | Youssef_2026 | irrelevant | 0 | 0 | The paper is a review of pharmacovigilance in cell and gene therapy and does not contain any pharmacokinetic data for cycloguanil. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:39 UTC</sub>
