<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;J01M&quot;,&quot;href&quot;:&quot;atc/J01M.md&quot;},{&quot;label&quot;:&quot;gemifloxacin&quot;}]"></div>

# gemifloxacin

- **generic name:** gemifloxacin
- **ATC codes:** `J01MA15`
- **DrugBank:** [DB01155](https://go.drugbank.com/drugs/DB01155) · **PubChem:** [CID 9571107](https://pubchem.ncbi.nlm.nih.gov/compound/9571107)
- **molar mass:** 389.3809 g/mol (C18H20FN5O4) — DrugBank
- **groups:** approved, investigational

## About

Gemifloxacin is a fluoroquinolone antibiotic used to treat bacterial infections such as urinary tract infections, acute bronchitis, and gram-negative bacterial infections. It is an approved antibacterial, though fluoroquinolones carry a boxed warning and are generally reserved for situations where other antibiotics are not suitable.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q1639595](https://www.wikidata.org/wiki/Q1639595) and the WHO ATC classification; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 23:09 | 0:44 | 0/1/0 | 1/0/0 | 0/0/0 | 36,683/2,017 | einfracz / qwen3.8-27b | 2 | 0/2 | 2/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--green" title="re-read by gpt-oss:120b (confirmed, agreement 1.0). Primary extraction retained.">cross-checked ✓</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Landersdorfer_2009_reference](drugs/drug_gemifloxacin/Gemifloxacin_Landersdorfer2009_reference.md) | — | 1-compartment (no model) | 0 | Landersdorfer CB et al., Competitive inhibition of renal tubular…, Antimicrobial agents and ch… (2009) | [10.1128/AAC.01200-08](https://doi.org/10.1128/AAC.01200-08) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (rat), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">rat</span> | [Roy_2010_EEG](drugs/drug_gemifloxacin/pd_Roy_2010_EEG.md) | electroencephalogram (EEG) ← gemifloxacin · delayed effect through an effect compartment | — | Roy B et al., Convulsant activity and pharmacokinetic…, Journal of pharmaceutical s… (2010) | [10.1002/jps.21888](https://doi.org/10.1002/jps.21888) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=gemifloxacin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | `CYP1A2` inhibitor | DrugBank actor |
| excretion | bile duct | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 17 matched, 17 returned
- **screened:** 3  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_5 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Landersdorfer_2009.pdf` | Landersdorfer CB et al., Competitive inhibition of renal tubular…, Antimicrobial agents and ch… (2009) | popPK | 10 | [10.1128/AAC.01200-08](https://doi.org/10.1128/AAC.01200-08) | [19564368](https://pubmed.ncbi.nlm.nih.gov/19564368) | The study reports specific quantitative PK parameters for gemifloxacin in humans, including nonrenal clearance values (25.2 and 21.0 L/h) and renal elimination model parameters (Km, Vmax). |
| `Blondeau_2004.pdf` | Blondeau JM et al., The role of PK/PD parameters to avoid s…, Journal of chemotherapy (Fl… (2004) | pd | 5 | [10.1080/1120009x.2004.11782371](https://doi.org/10.1080/1120009x.2004.11782371) | [15334827](https://www.ncbi.nlm.nih.gov/pubmed/15334827) | metadata signals extractable PD data (PK/PD) |
| `Owens_2005.pdf` | Owens RC et al., Assessment of pharmacokinetic-pharmacod…, Diagnostic microbiology and… (2005) | pd | 5 | [10.1016/j.diagmicrobio.2004.08.019](https://doi.org/10.1016/j.diagmicrobio.2004.08.019) | [15629228](https://www.ncbi.nlm.nih.gov/pubmed/15629228) | metadata signals extractable PD data (PK-PD) |
| `unknown_2012.pdf` | unknown, Retraction. Roy B, Bose A, Bhaumik U, D…, Journal of pharmaceutical s… (2012) | pd | 5 | [10.1002/jps.23012](https://doi.org/10.1002/jps.23012) | [22319775](https://www.ncbi.nlm.nih.gov/pubmed/22319775) | metadata signals extractable PD data (pharmacodynamicmodel) |
| `Allen_2004.pdf` | Allen GP et al., In vitro activities of mutant preventio…, International journal of an… (2004) | pd | 4 | [10.1016/j.ijantimicag.2004.03.011](https://doi.org/10.1016/j.ijantimicag.2004.03.011) | [15288314](https://www.ncbi.nlm.nih.gov/pubmed/15288314) | metadata signals extractable PD data (pharmacodynamicmodel) |

<sub>queue written 2026-10-14T23:09:14.475498+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Abidullah_2021 | irrelevant | 0 | 0 | This is an in-vitro bioassay study investigating the antispasmodic mechanism of action, not a pharmacokinetic study. |
| popPK | Allen_2004 | irrelevant | 1 | 1 | This is an in vitro pharmacodynamic study simulating antibiotic concentrations, not a pharmacokinetic study reporting disposition parameters for gemifloxacin. |
| popPK | Blondeau_2004 | irrelevant | 0 | 0 | This is a review on mutant prevention concentration (MPC) and resistance mechanisms, not a pharmacokinetic study reporting quantitative disposition parameters for gemifloxacin. |
| PGx | Garrison_2003 | not_relevant | 0 | 0 | The paper describes bacterial pharmacodynamics and resistance mutations in Streptococcus pneumoniae, not human pharmacogenomics or host genetic variants affecting drug PK/PD. |
| PGx | Hekmatpour_2026 | not_relevant | 0 | 0 | The study investigates antibacterial resistance mechanisms in Mycobacterium tuberculosis, not pharmacogenomic effects of human gene variants on the drug's PK or PD parameters. |
| popPK | MacGowan_2001 | irrelevant | 1 | 0 | This is an in vitro pharmacodynamic study simulating human exposure, and it does not report population pharmacokinetic parameters (CL, V, etc.) for gemifloxacin. |
| popPK | Nagy_2015 | irrelevant | 0 | 0 | The study investigates the mechanical effects of omecamtiv mecarbil on rat muscles and does not involve gemifloxacin. |
| popPK | Noreddin_2007 | irrelevant | 2 | 0 | The paper is a Monte Carlo simulation comparing pharmacodynamic targets of three fluoroquinolones and explicitly states that PK data were derived from previously described population models, so no original quantitative PK parameters for gemifloxacin are reported. |
| popPK | Owens_2005 | irrelevant | 2 | 0 | This is a Monte Carlo PK-PD target attainment study that utilizes a PK model derived from previous trials, but it does not report the quantitative PK parameter values (CL, V, etc.) in the provided evidence. |
| popPK | Roy_2010 | relevant | 4 | 0 | The study involves PK-PD modeling of gemifloxacin in rats, implying the existence of quantitative PK parameters, but no specific numeric values (CL, V, ka, etc.) are present in the provided evidence. |
| PGx | Shams_2005 | not_relevant | 0 | 0 | The paper reviews the selection and clinical use of fluoroquinolones, discussing resistance and standard PK/PD ratios without reporting pharmacogenomic effects of gene variants on these parameters. |
| popPK | Vallet_2011 | irrelevant | 1 | 0 | The study is an in-vitro mechanistic investigation of intracellular accumulation and activity in macrophages, not a population-pharmacokinetic study reporting quantitative disposition parameters (CL, V, half-life) for the subject drug. |
| PGx | Zhanel_2003 | not_relevant | 0 | 0 | The study characterizes bacterial resistance mechanisms in Streptococcus pneumoniae and does not investigate human pharmacogenomic effects on the pharmacokinetics or pharmacodynamics of gemifloxacin. |
| popPK | unknown_2012 | irrelevant | 0 | 0 | no_text gate: only 264 chars of text extracted (&lt; 400) |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 23:09 UTC</sub>
