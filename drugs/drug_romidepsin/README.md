<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;L01X&quot;,&quot;href&quot;:&quot;atc/L01X.md&quot;},{&quot;label&quot;:&quot;romidepsin&quot;}]"></div>

# romidepsin

- **generic name:** romidepsin
- **ATC codes:** `L01XH02`, `L01XX39`
- **DrugBank:** [DB06176](https://go.drugbank.com/drugs/DB06176) · **PubChem:** [CID 57515973](https://pubchem.ncbi.nlm.nih.gov/compound/57515973)
- **molar mass:** 540.69 g/mol (C24H36N4O6S2) — DrugBank
- **groups:** approved, investigational

## About

Romidepsin is an anticancer drug used to treat lymphoma, including cutaneous T-cell lymphoma (mycosis fungoides) and other mature T-cell lymphomas. It is approved for use, mainly in the treatment of T-cell lymphomas, though a marketing application was refused in the European Union.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q7363205](https://www.wikidata.org/wiki/Q7363205) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-14 20:54 | 1:41 | 0/1/0 | 0/0/0 | 0/0/0 | 86,476/6,602 | einfracz / qwen3.8-27b | 3 | 3/0 | 2/1 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss-120b (not confirmed, agreement 0.333). Primary extraction retained.">cross-check: disputed</span><br><sub>blocking: missing key parameters — none reported by this paper</sub><br><sub>route_to: `human_review`</sub> | [Woo_2009_reference](drugs/drug_romidepsin/Romidepsin_Woo2009_reference.md) | — | 1-compartment (no model) | 0 | Woo S et al., Population pharmacokinetics of romideps…, Clinical cancer research :… (2009) | [10.1158/1078-0432.CCR-08-1215](https://doi.org/10.1158/1078-0432.CCR-08-1215) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=romidepsin).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | blood-brain barrier | `ABCB1` substrate | DrugBank actor |
| absorption | kidney | `ABCB1` substrate | DrugBank actor |
| absorption | liver | `ABCB1` substrate | DrugBank actor |
| absorption | placenta | `ABCB1` substrate | DrugBank actor |
| absorption | small intestine | `ABCB1` substrate | DrugBank actor |
| absorption | testis | `ABCB1` substrate | DrugBank actor |
| metabolism | kidney | `CYP3A5` substrate | DrugBank actor |
| metabolism | liver | `CYP2B6` substrate, `CYP2C19` substrate, `CYP3A4` substrate, `CYP3A5` substrate, `SLCO1B1` inhibitor, `SLCO1B3` inhibitor | DrugBank actor |
| metabolism | lung | `CYP1A1` substrate | DrugBank actor |
| metabolism | small intestine | `CYP1A1` substrate, `CYP3A4` substrate, `CYP3A5` substrate | DrugBank actor |
| excretion | kidney | `SLC22A2` inhibitor, `SLC22A6` inhibitor | DrugBank actor |
| excretion | liver | `ABCB11` inhibitor | DrugBank actor |

<sub>Actors without a tissue in the table: HDAC1 (inhibitor), HDAC1 (target), HDAC2 (inhibitor), HDAC2 (target), HDAC4 (inhibitor), HDAC6 (inhibitor).</sub>

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 7 matched, 7 returned
- **screened:** 1  ·  **relevant:** 1
- **records:** 1  ·  extracted 0  ·  needs_review 0  ·  rejected 1  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Moltó_2021.pdf` | Moltó J et al., Pharmacokinetic/pharmacodynamic analysi…, The Journal of antimicrobia… (2021) | popPK | 10 | [10.1093/jac/dkaa523](https://doi.org/10.1093/jac/dkaa523) | [33367767](https://pubmed.ncbi.nlm.nih.gov/33367767) | The paper describes a population PK model for romidepsin in humans, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| `Woo_2009.pdf` | Woo S et al., Population pharmacokinetics of romideps…, Clinical cancer research :… (2009) | popPK | 10 | [10.1158/1078-0432.CCR-08-1215](https://doi.org/10.1158/1078-0432.CCR-08-1215) | [19228751](https://pubmed.ncbi.nlm.nih.gov/19228751) | The paper reports population pharmacokinetic parameters for romidepsin, with clearance (15.9 L/h) explicitly provided in the abstract, though other specific model parameters like volume and clearance are only mentioned generally or not numerically listed in the provided text. |

<sub>queue written 2026-10-14T20:52:39.396180+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Mejia_2014 | irrelevant | 0 | 0 | The paper is a natural product chemistry study on HIV-1 latency reactivation where romidepsin is used only as an in-vitro positive control for potency (EC50), not as a subject for pharmacokinetic analysis. |
| popPK | Moltó_2021 | relevant | 10 | 0 | The paper describes a population PK model for romidepsin in humans, but no specific numeric parameter values (CL, V, etc.) are present in the provided evidence. |
| popPK | Peer_2018 | irrelevant | 0 | 0 | The paper analyzes the pharmacokinetics and pharmacodynamics of belinostat, not romidepsin. |
| popPK | Tseng_2015 | irrelevant | 0 | 0 | The study investigates a novel HDAC inhibitor (AR-42) in mouse models of cachexia, using romidepsin only as a comparator, and does not report any pharmacokinetic parameters for romidepsin. |
| popPK | Wei_2014 | irrelevant | 0 | 0 | The study is an in vitro/ex vivo mechanistic investigation of romidepsin's ability to activate latent HIV expression, reporting pharmacodynamic parameters (EC50 for HIV induction, fold-change in RNA) rather than pharmacokinetic disposition parameters (CL, Vd, ka, t1/2). |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-14 20:52 UTC</sub>
