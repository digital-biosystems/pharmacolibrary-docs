<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L04A&quot;,&quot;href&quot;:&quot;atc/L04A.md&quot;},{&quot;label&quot;:&quot;anakinra&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Anakinra_Urien2013_reference&quot;,&quot;label&quot;:&quot;Urien_2013_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_anakinra/Anakinra_Urien2013_reference.md&quot;,&quot;status&quot;:&quot;accepted (caveats)&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false}]"></div>

# anakinra

- **generic name:** anakinra
- **ATC codes:** `L04AC03`
- **DrugBank:** [DB00026](https://go.drugbank.com/drugs/DB00026) · **PubChem:** not captured
- **groups:** approved, investigational

## About

Anakinra, an interleukin-1 receptor antagonist, is used to treat rheumatoid arthritis, systemic-onset juvenile idiopathic arthritis, and pericarditis, and has also been used for COVID-19. It is an approved medicine with an authorised product in the European Union, and is also being studied for other uses.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q415411](https://www.wikidata.org/wiki/Q415411) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:28 | 3:06 | 1/1/0 | 2/0/0 | 0/0/0 | 162,291/10,157 | einfracz / qwen3.8-27b | 8 | 0/8 | 8/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">accepted (caveats)</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.667). Primary extraction retained.">cross-check: disputed</span><br><sub>caveat: Reference-individual predictions reproduce the source; covariate scenarios were not evaluated.</sub> | [Urien_2013_reference](drugs/drug_anakinra/Anakinra_Urien2013_reference.md) | ▶ model + simulator | 1-compartment, oral | 3 (+1 cov.) | Urien S et al., Anakinra pharmacokinetics in children a…, BMC pharmacology & toxicolo… (2013) | [10.1186/2050-6511-14-40](https://doi.org/10.1186/2050-6511-14-40) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss-120b (partly confirmed, agreement 0.6). Primary extraction retained.">cross-check: partial</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Ngo_2020_reference](drugs/drug_anakinra/Anakinra_Ngo2020_reference.md) | — | 2-compartment (no model) | 9 | Ngo L et al., Development of a Pharmacokinetic Model…, CPT: pharmacometrics & syst… (2020) | [10.1002/psp4.12555](https://doi.org/10.1002/psp4.12555) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--red" title="re-read by einfracz:gpt-oss-120b (not confirmed, agreement 0.2). Primary extraction retained.">cross-check: disputed</span> <span class="pk-badge pk-badge--species" title="In-vitro data (cells, tissue or microsomes), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">in vitro</span> | [Ge_2003_TSM_tension](drugs/drug_anakinra/pd_Ge_2003_TSM_tension.md) | tension of isolated trachea ← anakinra · inhibition effect | — | Ge XQ et al., [Effects of human recombinant interleuk…, Yao xue xue bao = Acta phar… (2003) | — |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Liu_2011_paw_swelling](drugs/drug_anakinra/pd_Liu_2011_paw_swelling.md) | paw swelling ← anakinra · indirect response — drug inhibits the production of paw swelling | — | Liu D et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | [10.1007/s10928-011-9219-z](https://doi.org/10.1007/s10928-011-9219-z) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=anakinra).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<sub>Actors without a tissue in the table: IL1R1 (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 34 matched, 19 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 2  ·  extracted 1  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_1 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Liu_2011.pdf` | Liu D et al., Population pharmacokinetic-pharmacodyna…, Journal of pharmacokinetics… (2011) | popPK | 9 | [10.1007/s10928-011-9219-z](https://doi.org/10.1007/s10928-011-9219-z) | [22002845](https://pubmed.ncbi.nlm.nih.gov/22002845) | The study reports a population PK model for anakinra in rats, but the specific numeric parameter values are not present in the provided evidence text. |

<sub>queue written 2026-10-15T00:26:24.277110+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Arends_2015 | irrelevant | 0 | 0 | The study evaluates the pharmacokinetics of TMX-101 (imiquimod), not anakinra. |
| popPK | Fofie_2003 | irrelevant | 0 | 0 | The study investigates the febrile response to bacterial endotoxin in rats and does not involve anakinra or pharmacokinetic modeling. |
| popPK | Gabrielsson_2015 | irrelevant | 1 | 0 | Anakinra is only used as a comparator agent in a pharmacodynamic challenge study (Case Study 2 in mice) to reverse an IL-6 response, and no quantitative pharmacokinetic parameters (CL, V, etc.) for anakinra are reported. |
| popPK | Ge_2003 | irrelevant | 0 | 0 | This is an in vitro mechanistic study of IL-1ra (anakinra) on guinea pig tracheal smooth muscle, reporting pharmacodynamic potency values (EC50, pD'2, IC50) rather than pharmacokinetic disposition parameters. |
| popPK | Green_2022 | relevant | 9 | 2 | The paper describes a pharmacokinetic study and includes a table with PK parameters (CL, V), but the specific numeric values for the reference population are not clearly readable in the provided evidence text. |
| popPK | Guo_2020 | irrelevant | 0 | 0 | The study assesses the temporal reproducibility of cytokine levels in an elderly population and does not involve the drug anakinra or pharmacokinetic parameters. |
| popPK | Hannani_2026 | irrelevant | 0 | 0 | The study analyzes cytokine profiles (including IL-1ra, a natural analog of anakinra) in an osteoarthritis cohort but contains no pharmacokinetic modeling or disposition parameters (CL, V, etc.) for the drug anakinra. |
| popPK | Horgan_2024 | irrelevant | 0 | 0 | The study investigates the effects of exercise and water immersion on inflammatory markers in athletes and does not report pharmacokinetic parameters for anakinra. |
| popPK | Kelly_2020 | irrelevant | 0 | 0 | The paper studies inflammatory biomarkers and arterial stiffness in HIV patients and does not report any pharmacokinetic parameters for anakinra. |
| popPK | Leoni_2015 | irrelevant | 0 | 0 | The study investigates formyl peptide receptor phosphorylation in neutrophils and does not involve anakinra pharmacokinetics. |
| popPK | Liu_2011 | relevant | 9 | 2 | The study reports a population PK model for anakinra in rats, but the specific numeric parameter values are not present in the provided evidence text. |
| popPK | Slim_2024 | irrelevant | 0 | 0 | The study is a pharmacodynamic biomarker analysis of immunomodulatory treatments in critically ill COVID-19 patients and does not report any pharmacokinetic parameters for anakinra. |
| popPK | Spiekstra_2009 | irrelevant | 0 | 0 | The paper describes an in-vitro method for determining skin irritant potency of surfactants and chemicals, with no mention of anakinra or pharmacokinetics. |
| popPK | Takahashi_2026 | irrelevant | 0 | 0 | The paper is a methodological study on NCA sampling windows using various drugs as case studies, does not identify anakinra as the subject drug, and provides no specific anakinra parameters. |
| popPK | Todd_1996 | irrelevant | 0 | 0 | The study investigates in vitro cytokine effects on prostaglandin production and does not report any pharmacokinetic parameters for anakinra. |
| popPK | Towne_2011 | irrelevant | 0 | 0 | The paper describes in vitro molecular mechanisms of IL-36 ligands and receptors and does not report pharmacokinetic parameters for anakinra. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:26 UTC</sub>
