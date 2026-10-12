<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;N02C&quot;,&quot;href&quot;:&quot;atc/N02C.md&quot;},{&quot;label&quot;:&quot;almotriptan&quot;}]"></div>

# almotriptan

- **generic name:** almotriptan
- **ATC codes:** `N02CC05`
- **DrugBank:** [DB00918](https://go.drugbank.com/drugs/DB00918) · **PubChem:** [CID 123606](https://pubchem.ncbi.nlm.nih.gov/compound/123606)
- **molar mass:** 335.464 g/mol (C17H25N3O2S) — DrugBank
- **groups:** approved

## About

Almotriptan is a serotonin receptor agonist used to treat migraine attacks. It is an approved medicine, classified as a selective serotonin agonist antimigraine drug.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q409729](https://www.wikidata.org/wiki/Q409729) and the WHO ATC classification; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| almotriptan | parent | 335.464 | C17H25N3O2S | DrugBank | [123606](https://pubchem.ncbi.nlm.nih.gov/compound/123606) | Jansat_2002 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-07 06:23 | 0:59 | 0/1/0 | 0/0/0 | 0/0/0 | 80,155/6,292 | einfracz / qwen3.8-27b | 3 | 2/1 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.417). The first reading is what the record holds.">cross-check: disputed</span><br><sub>blocking: no distribution volume and no clearance/elimination — not a compartmental popPK…</sub><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Jansat_2002_reference](drugs/drug_almotriptan/Almotriptan_Jansat2002_reference.md) | — | 1-compartment (no model) | 5 | Jansat JM et al., Absolute bioavailability, pharmacokinet…, Journal of clinical pharmac… (2002) | [10.1177/0091270002042012006](https://doi.org/10.1177/0091270002042012006) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=almotriptan).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| metabolism | brain | `CYP2D6` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | liver | `CYP2C19` substrate, `CYP2C8` substrate, `CYP2D6` substrate, `CYP2E1` substrate, `CYP3A4` substrate, `FMO3` substrate, `MAOA` substrate | DrugBank actor |
| metabolism | small intestine | `CYP3A4` substrate, `MAOA` substrate | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | prose |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | prose |

<sub>Actors without a tissue in the table: HTR1B (target), HTR1D (target).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 25 matched, 25 returned
- **screened:** 2  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** True

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Jansat_2002.pdf` | Jansat JM et al., Absolute bioavailability, pharmacokinet…, Journal of clinical pharmac… (2002) | popPK | 9 | [10.1177/0091270002042012006](https://doi.org/10.1177/0091270002042012006) | [12463724](https://pubmed.ncbi.nlm.nih.gov/12463724) | The paper reports PK parameters for almotriptan in humans, including half-life, bioavailability, and clearance percentages, but lacks specific numeric values for absolute clearance (L/hr) and volume (L) in the provided text. |
| `Nirogi_2013.pdf` | Nirogi R et al., LC-MS/MS method for the quantification…, Journal of pharmaceutical a… (2013) | pd | 5 | [10.1016/j.jpba.2013.04.008](https://doi.org/10.1016/j.jpba.2013.04.008) | [23666253](https://www.ncbi.nlm.nih.gov/pubmed/23666253) | metadata signals extractable PD data (PK/PD) |
| `Fleishaker_2000.pdf` | Fleishaker JC et al., Pharmacokinetic interaction between ver…, Clinical pharmacology and t… (2000) | pgx | 7 | [10.1067/mcp.2000.106292](https://doi.org/10.1067/mcp.2000.106292) | [10824628](https://www.ncbi.nlm.nih.gov/pubmed/10824628) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `Fleishaker_2003.pdf` | Fleishaker JC et al., Interaction between ketoconazole and al…, Journal of clinical pharmac… (2003) | pgx | 7 | [10.1177/0091270003252242](https://doi.org/10.1177/0091270003252242) | [12723463](https://www.ncbi.nlm.nih.gov/pubmed/12723463) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |
| `McEnroe_2005.pdf` | McEnroe JD et al., Clinical pharmacokinetics of almotripta…, Clinical pharmacokinetics (2005) | pgx | 7 | [10.2165/00003088-200544030-00002](https://doi.org/10.2165/00003088-200544030-00002) | [15762767](https://www.ncbi.nlm.nih.gov/pubmed/15762767) | metadata signals extractable PGX data (CYP3A4, PK/PD-context) |

<sub>queue written 2026-10-07T06:22:32.497886+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belvis_2014 | irrelevant | 0 | 0 | The paper is a narrative review discussing migraine treatment strategies and does not report original quantitative pharmacokinetic parameters for almotriptan. |
| PD | Belvis_2014 | not_relevant | 1 | 0 | The text is a general review discussing the clinical use and profiles of triptans, including almotriptan, but does not present any specific pharmacokinetic or pharmacodynamic data, models, or numeric parameters. |
| popPK | Belvís_2009 | irrelevant | 0 | 0 | The paper is a review discussing triptan selection and does not report original quantitative pharmacokinetic parameters for almotriptan. |
| PD | Belvís_2009 | not_relevant | 1 | 0 | The text is a qualitative review of triptan selection and does not report any specific numeric pharmacodynamic parameters or exposure-response data for almotriptan. |
| popPK | Bou_2000 | irrelevant | 0 | 0 | The paper is a pharmacological study focusing on receptor binding affinity and functional vascular responses (vasoconstriction), reporting no pharmacokinetic disposition parameters (CL, V, t1/2) for almotriptan. |
| popPK | Bou_2001 | irrelevant | 0 | 0 | The study reports in vitro pharmacodynamic data (contractile EC50) rather than quantitative pharmacokinetic disposition parameters. |
| PGx | Buzzi_2008 | not_relevant | 5 | 0 | The paper is a qualitative review discussing general pharmacogenetic pathways for triptans and does not report specific quantitative PK/PD effects for almotriptan. |
| popPK | Chryssafidis_2022 | irrelevant | 2 | 0 | The paper models almotriptan data using a general equation but explicitly states that parameter uncertainties prevent reliable determination of any pharmacokinetic parameters, and no numeric values are provided in the text. |
| popPK | Dowson_2004 | irrelevant | 1 | 0 | The paper is a clinical review of efficacy and tolerability that mentions pharmacokinetic properties qualitatively but provides no quantitative disposition parameters. |
| PD | Dowson_2004 | not_relevant | 2 | 1 | The text is a qualitative review summarizing clinical efficacy and PK properties without providing specific numeric PD parameters (e.g., EC50, Emax) or concentration-effect curves. |
| PGx | Fleishaker_2000 | not_relevant | 0 | 0 | The study investigates a drug-drug interaction with verapamil, not the effect of a specific gene variant or genotype on almotriptan pharmacokinetics. |
| PGx | Fleishaker_2003 | not_relevant | 0 | 0 | The paper reports a drug-drug interaction (ketoconazole) rather than a pharmacogenomic effect based on gene variants or genotypes. |
| popPK | McEnroe_2005 | irrelevant | 0 | 0 | no_text gate: only 112 chars of text extracted (&lt; 400) |
| PD | McEnroe_2005 | not_relevant | 0 | 0 | The paper focuses on the clinical pharmacokinetics of almotriptan and does not report any pharmacodynamic, exposure-response, or dose-response analysis with numeric PD parameters. |
| PGx | McEnroe_2005 | not_relevant | 0 | 0 | The title indicates a general clinical pharmacokinetics study without specific mention of a pharmacogenomic effect (gene variant influencing PK). |
| popPK | Negro_2013 | irrelevant | 2 | 0 | The paper is a review article discussing pharmacokinetic aspects of almotriptan but does not present original quantitative disposition parameters or numeric values in the provided evidence. |
| PD | Negro_2013 | not_relevant | 2 | 0 | The text is a review summary that qualitatively discusses pharmacodynamic aspects but does not provide specific numeric PD parameters or concentration-effect data. |
| popPK | Nirogi_2013 | irrelevant | 0 | 0 | no_text gate: only 123 chars of text extracted (&lt; 400) |
| PD | Nirogi_2013 | not_relevant | 0 | 0 | The paper describes an LC-MS/MS method and a microdialysis study for quantifying almotriptan, but does not report any pharmacodynamic or exposure-response analysis. |
| popPK | Ou_2024 | irrelevant | 0 | 0 | The paper concerns optical imaging and tissue clearing in mice, not the pharmacokinetics of almotriptan. |
| PD | Ou_2024 | not_relevant | 0 | 0 | The paper discusses optical physics and tissue clearing in mice, containing no pharmacological data, PK/PD analysis, or mention of almotriptan. |
| PGx | Salva_2003 | not_relevant | 1 | 0 | The paper identifies the enzymes involved in almotriptan metabolism using in vitro methods and confirms their role in vivo but does not report pharmacogenomic effects of specific genetic variants on PK or PD parameters. |
| popPK | Tfelt-Hansen_2000 | irrelevant | 1 | 0 | The paper is a comparative review of triptans that discusses efficacy and general pharmacokinetic properties (like bioavailability and half-life) but does not report specific quantitative disposition parameters (CL, V, Q, ka) for almotriptan. |
| PD | Tfelt-Hansen_2000 | not_relevant | 2 | 1 | The text is a comparative review that lists therapeutic gains (efficacy outcomes) for various triptans, including almotriptan, but does not report any pharmacodynamic parameters (e.g., Emax, EC50) or exposure-response/dose-response curves. |
| popPK | Tfelt-Hansen_2011 | irrelevant | 1 | 0 | The paper is a clinical review of dose-response and tolerability, not a pharmacokinetic study, and it does not report quantitative disposition parameters (CL, V, ka, etc.) for almotriptan. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-07 06:22 UTC</sub>
