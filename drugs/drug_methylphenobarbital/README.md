<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N03A&quot;,&quot;href&quot;:&quot;atc/N03A.md&quot;},{&quot;label&quot;:&quot;methylphenobarbital&quot;}]"></div>

# methylphenobarbital

- **generic name:** methylphenobarbital
- **ATC codes:** `N03AA01`
- **DrugBank:** [DB00849](https://go.drugbank.com/drugs/DB00849) · **PubChem:** [CID 8271](https://pubchem.ncbi.nlm.nih.gov/compound/8271)
- **molar mass:** 246.2619 g/mol (C13H14N2O3) — DrugBank
- **groups:** approved

## About

Methylphenobarbital (mephobarbital) is a barbiturate anticonvulsant used to treat epilepsy, including tonic–clonic and childhood absence seizures, and has also been used for anxiety and as a sedative. It remains an approved medicine, though it is not authorised in the European Union and is now only rarely used.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q411697](https://www.wikidata.org/wiki/Q411697) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 19:32 | 0:24 | 0/0/0 | 0/0/0 | 0/0/0 | 41,795/2,369 | einfracz / qwen3.8-27b | 2 | 3/1 | 1/1 | 0 |

## popPK records

_not available_

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=methylphenobarbital).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate | DrugBank actor |

<sub>Actors without a tissue in the table: CHRNA4 (target), CHRNA7 (target), GABRA1 (potentiator), GABRA2 (potentiator), GABRA3 (potentiator), GABRA4 (potentiator), GABRA5 (potentiator), GABRA6 (potentiator), GRIA2 (target), GRIK2 (target), NR1I2 (activator).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 27 matched, 27 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 0  ·  extracted 0  ·  needs_review 0  ·  rejected 0  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_6 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Verpooten_1982.pdf` | Verpooten GA et al., Prediction of the efficacy of hemoperfu…, Archives of toxicology. Sup… (1982) | popPK | 8 | [10.1007/978-3-642-68511-8_54](https://doi.org/10.1007/978-3-642-68511-8_54) | [6954915](https://pubmed.ncbi.nlm.nih.gov/6954915) | The paper describes a pharmacokinetic study involving methylphenobarbital, but the specific numeric parameter values are not present in the provided evidence text. |
| `Matsumoto_1988.pdf` | Matsumoto K et al., Action of polychlorocycloalkane insecti…, Toxicology and applied phar… (1988) | pd | 5 | [10.1016/0041-008x(88)90158-5](https://doi.org/10.1016/0041-008x(88)90158-5) | [2458634](https://www.ncbi.nlm.nih.gov/pubmed/2458634) | metadata signals extractable PD data (IC50) |
| `Daniell_1994.pdf` | Daniell LC, Effect of anesthetic and convulsant bar…, Pharmacology (1994) | pd | 4 | [10.1159/000139246](https://doi.org/10.1159/000139246) | [7862741](https://www.ncbi.nlm.nih.gov/pubmed/7862741) | metadata signals extractable PD data (IC50) |
| `Kobayashi_2004.pdf` | Kobayashi K et al., Pharmacogenetic roles of CYP2C19 and CY…, Pharmacogenetics (2004) | pgx | 8 | [10.1097/01.fpc.0000114764.78957.22](https://doi.org/10.1097/01.fpc.0000114764.78957.22) | [15284537](https://www.ncbi.nlm.nih.gov/pubmed/15284537) | metadata signals extractable PGX data (CYP2C19, PK/PD-context) |
| `Kobayashi_2001.pdf` | Kobayashi K et al., Role of CYP2C19 in stereoselective hydr…, Drug metabolism and disposi… (2001) | pgx | 5 | not captured | [11124227](https://www.ncbi.nlm.nih.gov/pubmed/11124227) | metadata signals extractable PGX data (CYP2C19) |
| `Morita_2004.pdf` | Morita J et al., A novel single nucleotide polymorphism…, Drug metabolism and pharmac… (2004) | pgx | 5 | [10.2133/dmpk.19.236](https://doi.org/10.2133/dmpk.19.236) | [15499191](https://www.ncbi.nlm.nih.gov/pubmed/15499191) | metadata signals extractable PGX data (CYP2C19) |

<sub>queue written 2026-10-14T19:32:22.104469+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Bialer_2025 | irrelevant | 0 | 0 | The paper is a review of chirality in antiseizure medications and does not report original quantitative pharmacokinetic parameters for methylphenobarbital. |
| PD | Bialer_2025 | not_relevant | 1 | 0 | The paper is a qualitative review of chirality in antiseizure medications and does not report specific numeric PD parameters or exposure-response data for methylphenobarbital. |
| PGx | Chang_2006 | not_relevant | 0 | 0 | The paper describes catalytic assays for P450 enzymes and does not mention methylphenobarbital or any pharmacogenomic effects on its PK/PD. |
| popPK | Chernev_1984 | irrelevant | 0 | 0 | The provided evidence contains only a title regarding drug interactions with oral contraceptives and lacks any pharmacokinetic data or parameters for methylphenobarbital. |
| PD | Chernev_1984 | not_relevant | 0 | 0 | The paper discusses drug interactions with oral contraceptives and does not report any pharmacodynamic or exposure-response analysis for methylphenobarbital. |
| popPK | Daniell_1994 | irrelevant | 0 | 0 | The study is an in-vitro mechanistic investigation of NMDA receptor function in brain membrane vesicles and does not report pharmacokinetic parameters for methylphenobarbital. |
| popPK | Fletcher_1994 | irrelevant | 0 | 0 | The paper is a review discussing gender differences in pharmacokinetics and mentions mephobarbital (not methylphenobarbital) only as a qualitative example without providing any quantitative PK parameters. |
| PD | Fletcher_1994 | not_relevant | 0 | 0 | The text is a general review of gender differences in pharmacokinetics and pharmacodynamics and does not report any specific study, data, or numeric PD parameters for methylphenobarbital. |
| PGx | Hall_1987 | not_relevant | 0 | 0 | The paper studies mephenytoin metabolism and inhibition, not methylphenobarbital. |
| popPK | Hamouda_2014 | irrelevant | 0 | 0 | The study characterizes the binding of a photoreactive barbiturate analog to nicotinic acetylcholine receptors in vitro and contains no pharmacokinetic parameters for methylphenobarbital. |
| PGx | Jacqz_1986 | not_relevant | 0 | 0 | The study investigates mephobarbital (phenobarbital), not methylphenobarbital, and focuses on its interaction with mephenytoin rather than the direct pharmacogenomic effect on methylphenobarbital PK. |
| PGx | Kalow_1989 | not_relevant | 0 | 0 | The paper discusses general drug-metabolizing enzyme polymorphisms (debrisoquine/mephenytoin) and lists various substrates, but does not report data on methylphenobarbital. |
| popPK | Kent_2019 | irrelevant | 0 | 0 | The study is a pharmacodynamic analysis of GABA receptor binding and anaesthetic potency in tadpoles, not a pharmacokinetic study of methylphenobarbital. |
| PD | Kent_2019 | not_relevant | 0 | 0 | The paper focuses on the interaction of anaesthetic binding sites on GABA receptors using isobolographic analysis of mixtures, and does not report a pharmacokinetic or pharmacodynamic exposure-response model for methylphenobarbital. |
| PGx | Kobayashi_1999 | not_relevant | 0 | 0 | The study identifies CYP2B6 as the enzyme responsible for S-mephobarbital metabolism but does not report specific genotype-phenotype associations or pharmacokinetic parameter changes. |
| PD | Lim_1989 | not_relevant | 0 | 0 | The paper reports stereoselective pharmacokinetics (clearance, half-life, metabolism) but explicitly states that pharmacodynamic implications are unclear and provides no concentration-effect or dose-response data. |
| popPK | Matsumoto_1988 | irrelevant | 0 | 0 | The paper is an in-vitro binding study on Torpedo membranes involving insecticides and barbiturates, not a pharmacokinetic study of methylphenobarbital. |
| PD | Matsumoto_1988 | not_relevant | 0 | 0 | The paper studies the binding of insecticides to Torpedo membranes and does not report any pharmacodynamic or exposure-response data for methylphenobarbital. |
| PGx | Niu_2011 | not_relevant | 0 | 0 | The paper uses computational docking to predict drug-enzyme interactions for CYP2B6 substrates (including mephobarbital, not methylphenobarbital) and does not report clinical pharmacogenomic data (genotype/PK/PD changes). |
| popPK | Pressler_2024 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of brivaracetam, not methylphenobarbital. |
| PD | Pressler_2024 | not_relevant | 0 | 0 | The paper reports pharmacokinetics (PK) and safety of brivaracetam, not methylphenobarbital, and contains no pharmacodynamic (PD) or exposure-response analysis. |
| popPK | Sato_1983 | irrelevant | 0 | 0 | The provided evidence contains only software metadata and no scientific content or pharmacokinetic data for methylphenobarbital. |
| PD | Sato_1983 | not_relevant | 0 | 0 | The provided text is metadata for the GROBID software and does not contain any scientific content regarding methylphenobarbital or pharmacodynamics. |
| popPK | Savechenkov_2012 | irrelevant | 0 | 0 | The study focuses on the synthesis, pharmacology, and photolabeling of a novel barbiturate analog, not on the population pharmacokinetics or disposition parameters of methylphenobarbital. |
| popPK | Verpooten_1982 | relevant | 8 | 0 | The paper describes a pharmacokinetic study involving methylphenobarbital, but the specific numeric parameter values are not present in the provided evidence text. |

---
<sub>Generated by `docs.py` (scholarv2)</sub>
