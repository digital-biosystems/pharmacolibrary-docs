<div class="pk-crumbs" data-crumbs="[{&quot;label&quot;:&quot;Drugs&quot;,&quot;href&quot;:&quot;README.md&quot;},{&quot;label&quot;:&quot;A06A&quot;,&quot;href&quot;:&quot;atc/A06A.md&quot;},{&quot;label&quot;:&quot;mannitol&quot;}]"></div>
<div class="pk-recnav" data-items="[{&quot;id&quot;:&quot;Mannitol_Wei2022_reference&quot;,&quot;label&quot;:&quot;Wei_2022_reference&quot;,&quot;group&quot;:&quot;popPK&quot;,&quot;href&quot;:&quot;drugs/drug_mannitol/Mannitol_Wei2022_reference.md&quot;,&quot;status&quot;:&quot;reviewed \u2014 candidate&quot;,&quot;css&quot;:&quot;pk-badge--green&quot;,&quot;here&quot;:false},{&quot;id&quot;:&quot;pd_Wahab_2025_cough&quot;,&quot;label&quot;:&quot;Wahab_2025 \u00b7 cough&quot;,&quot;group&quot;:&quot;PD&quot;,&quot;href&quot;:&quot;drugs/drug_mannitol/pd_Wahab_2025_cough.md&quot;,&quot;status&quot;:&quot;needs review&quot;,&quot;css&quot;:&quot;pk-badge--orange&quot;,&quot;here&quot;:false}]"></div>

# mannitol

- **generic name:** mannitol
- **ATC codes:** `A06AD16`, `B05BC01`, `B05CX04`, `R05CB16`, `V04CX04`
- **DrugBank:** [DB00742](https://go.drugbank.com/drugs/DB00742) · **PubChem:** [CID 6251](https://pubchem.ncbi.nlm.nih.gov/compound/6251)
- **molar mass:** 182.1718 g/mol (C6H14O6) — DrugBank
- **groups:** approved, investigational

## About

Mannitol is an osmotic diuretic used for conditions such as anuria, oliguria, cerebral edema, and ocular hypertension, and is also used as a laxative, irrigating solution, mucolytic in cystic fibrosis, and diagnostic agent. It remains widely used and is included on the WHO essential medicines list, with an authorised product in the European Union for cystic fibrosis.

<small>Summary written by `glm-5.3-flash` from [Wikidata Q407646](https://www.wikidata.org/wiki/Q407646) and the WHO ATC classification and the EMA medicines list; not checked by a person.</small>

## Molecular properties

> Molar masses support mass–molar conversion and metabolite stoichiometry. Sources: DrugBank (parent), reported values or identity-matched PubChem entries (metabolites).

| molecule | role | molar mass (g/mol) | formula | source | PubChem | records |
|---|---|---|---|---|---|---|
| mannitol | parent | 182.172 | C6H14O6 | DrugBank | [6251](https://pubchem.ncbi.nlm.nih.gov/compound/6251) | Noorani_2022 |

## Extraction summary

| extracted at | time | popPK e/r/o | PD e/r/o (paper) | PGx e/r/o | tokens in/out | LLM | papers | GROBID/JATS | OA/non-OA | NONMEM |
|---|---|---|---|---|---|---|---|---|---|---|
| 2026-10-15 00:54 | 2:50 | 1/2/0 | 2/0/1 | 0/0/0 | 267,446/12,258 | einfracz / qwen3.8-27b | 9 | 0/9 | 9/0 | 0 |

## popPK records

| status | detail | model | model structure | params | citation | doi |
|---|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">reviewed — candidate</span> <span class="pk-badge pk-badge--red" title="re-read by gpt-oss:120b (not confirmed, agreement 0.714). Primary extraction retained.">cross-check: disputed</span> | [Wei_2022_reference](drugs/drug_mannitol/Mannitol_Wei2022_reference.md) | ▶ model + simulator | 1-compartment, IV | 2 | Wei S et al., Population pharmacokinetic model of van…, Frontiers in pharmacology (2022) | [10.3389/fphar.2022.1005791](https://doi.org/10.3389/fphar.2022.1005791) |
| <span class="pk-badge pk-badge--red">rejected</span><br><sub>blocking: C8 unreachable/orphan compartment or unlinked metabolite</sub><br><sub>route_to: `human_review`</sub> | [Chu_2022_reference](drugs/drug_mannitol/Mannitol_Chu2022_reference.md) | — | 2-compartment (no model) | 3 | Chu WY et al., Semi-mechanistic Modeling of Hypoxanthi…, Clinical pharmacokinetics (2022) | [10.1007/s40262-022-01164-9](https://doi.org/10.1007/s40262-022-01164-9) |
| <span class="pk-badge pk-badge--red">rejected</span> <span class="pk-badge pk-badge--orange" title="re-read by gpt-oss:120b (partly confirmed, agreement 0.714). Primary extraction retained.">cross-check: partial</span> <span class="pk-badge pk-badge--species" title="Animal study (mouse), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">mouse</span><br><sub>blocking: C5 dimension mismatch on a structural parameter</sub><br><sub>route_to: `human_review`</sub> | [Noorani_2022_reference](drugs/drug_mannitol/Mannitol_Noorani2022_reference.md) | — | 1-compartment (no model) | 2 | Noorani B et al., A Semi-Physiological Three-Compartment…, Pharmaceutical research (2022) | [10.1007/s11095-022-03175-4](https://doi.org/10.1007/s11095-022-03175-4) |

## Pharmacodynamics (PD)

| status | detail | about | model | citation | doi |
|---|---|---|---|---|---|
| <span class="pk-badge pk-badge--green">extracted</span> | [Säfholm_2019_bronchoconstriction](drugs/drug_mannitol/pd_S_fholm_2019_bronchoconstriction.md) | bronchoconstriction ← mannitol · stimulation effect | — | Säfholm J et al., Mannitol triggers mast cell-dependent c…, The Journal of allergy and… (2019) | [10.1016/j.jaci.2019.04.031](https://doi.org/10.1016/j.jaci.2019.04.031) |
| <span class="pk-badge pk-badge--green">extracted</span> <span class="pk-badge pk-badge--species" title="Animal study (other animal), not measured in people (from the LLM relevance screen, p(non-human) 1.00).">other animal</span> | [Takada_2017_inward_current](drugs/drug_mannitol/pd_Takada_2017_inward_current.md) | inward current ← mannitol · direct sigmoid Emax (Hill) effect | — | Takada T et al., A mannitol/sorbitol receptor stimulates…, PloS one (2017) | [10.1371/journal.pone.0186420](https://doi.org/10.1371/journal.pone.0186420) |
| <span class="pk-badge pk-badge--orange">needs review</span> | [Wahab_2025_cough](drugs/drug_mannitol/pd_Wahab_2025_cough.md) | cough ← mannitol · direct Emax (saturable) effect | ▶ model + simulator | Wahab M et al., Mannitol-evoked cough response is reduc…, ERJ open research (2025) | [10.1183/23120541.00815-2024](https://doi.org/10.1183/23120541.00815-2024) |

## ADME sites

Tissue mappings from DrugBank molecular actors and paper-derived PGx genes. Compare drugs in [Sites & interactions](sites?drugs=mannitol).

| process | tissue | actors (role) | evidence |
|---|---|---|---|
| absorption | small intestine | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| metabolism | liver | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |
| excretion | kidney | <sub>named in DrugBank's ADME text</sub> | DrugBank ADME |

<details class="legend">
<summary>Status and cross-check definitions</summary>
<table><thead><tr><th>Badge</th><th>Definition</th></tr></thead><tbody><tr><td><span class="pk-badge pk-badge--green">curated</span></td><td>Human-authored reference record or exemplar.</td></tr><tr><td><span class="pk-badge pk-badge--green">extracted</span></td><td>Accepted extraction; applicable closed-form checks passed.</td></tr><tr><td><span class="pk-badge pk-badge--green">reviewed — candidate</span></td><td>Generated-model predictions agree with reported reference values; not human-verified.</td></tr><tr><td><span class="pk-badge pk-badge--green">accepted (caveats)</span></td><td>Replication accepted with unresolved advisory checks.</td></tr><tr><td><span class="pk-badge pk-badge--orange">needs review</span></td><td>Incomplete, inconsistent, or implausible extraction; values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--orange">built, not shipped</span></td><td>Model withheld because a core parameter uses a library default.</td></tr><tr><td><span class="pk-badge pk-badge--red">rejected</span></td><td>Unaccepted record; displayed values remain unverified.</td></tr><tr><td><span class="pk-badge pk-badge--neutral">not modelled</span></td><td>Model generation pending or unavailable; not a validation verdict.</td></tr><tr><td><span class="pk-badge pk-badge--stale">stale</span></td><td>Review predates the current extraction.</td></tr><tr><td><span class="pk-badge pk-badge--green">cross-checked ✓</span></td><td>All responding readers agree on all compared fields; fractions indicate agreeing/total readers.</td></tr><tr><td><span class="pk-badge pk-badge--orange">cross-check: partial</span></td><td>At least one non-structural discrepancy or incomplete reader agreement.</td></tr><tr><td><span class="pk-badge pk-badge--red">cross-check: disputed</span></td><td>At least one structural-parameter discrepancy; primary extraction retained pending review.</td></tr><tr><td><span class="pk-badge pk-badge--species">rat</span></td><td>Non-human or in-vitro evidence; parameters and simulations describe the stated experimental system.</td></tr></tbody></table>
<p><small><b>Status</b> reports validation and review outcomes; <b>cross-check</b> reports agreement between independent extractions. Agreement does not establish plausibility, model validity, or clinical applicability.</small></p>
</details>

## Coverage

- **PubMed hits:** 98 matched, 20 returned
- **screened:** 2  ·  **relevant:** 2
- **records:** 3  ·  extracted 1  ·  needs_review 0  ·  rejected 2  ·  stale 0
- **scholar-agent fallback query used:** not captured

## Full-text requests

_2 abstract-screened relevant papers lack full text. Retrieve via the DOI, save to `papers/` as `&lt;save as&gt;.pdf`, and rerun extraction._

| save as | citation | domain | score | DOI | PubMed | why wanted |
|---|---|---|---|---|---|---|
| `Cloyd_1986.pdf` | Cloyd JC et al., Mannitol pharmacokinetics and serum osm…, The Journal of pharmacology… (1986) | popPK | 10 | not captured | [3080582](https://pubmed.ncbi.nlm.nih.gov/3080582) | The study reports specific quantitative pharmacokinetic parameters (half-lives, volume, clearance) for mannitol in both humans and dogs. |
| `Noorani_2022.pdf` | Noorani B et al., A Semi-Physiological Three-Compartment…, Pharmaceutical research (2022) | popPK | 10 | [10.1007/s11095-022-03175-4](https://doi.org/10.1007/s11095-022-03175-4) | [35146590](https://pubmed.ncbi.nlm.nih.gov/35146590) | The study reports specific quantitative pharmacokinetic parameters (Kin and efflux clearance) for mannitol in mice, and these numeric values are explicitly stated in the text. |

<sub>queue written 2026-10-15T00:52:11.936912+00:00</sub>

## Screened and excluded

| domain | paper | verdict | relevance | extractability | reason |
|---|---|---|---|---|---|
| popPK | Belikova_2026 | irrelevant | 0 | 0 | The study uses mannitol as a diagnostic/challenge agent (hyperosmolar challenge) to induce bronchoconstriction, not as the subject of a pharmacokinetic disposition study. |
| popPK | Chu_2022 | irrelevant | 0 | 0 | Mannitol is used solely as the placebo vehicle for allopurinol; the study reports PK parameters for allopurinol, oxypurinol, and purine metabolites, not for mannitol itself. |
| popPK | Dai_2010 | irrelevant | 0 | 0 | The paper studies ion channel pharmacology (Slo2.1 channels) where mannitol is used only as a non-conducting osmotic agent/substitute in the experimental bath solution, providing no pharmacokinetic parameters. |
| popPK | Doolittle_2014 | irrelevant | 0 | 0 | Mannitol is used as a BBB-opening agent in a review of delivery challenges, not as the subject drug for PK parameter estimation. |
| popPK | Fan_2025 | irrelevant | 0 | 0 | The study reports population pharmacokinetic parameters for levetiracetam, not mannitol, which is only a covariate affecting levetiracetam clearance. |
| popPK | Fukushima_2018 | irrelevant | 0 | 0 | The study reports the pharmacokinetics of cisplatin, with mannitol used only as a co-administered diuretic agent, not the subject of the PK analysis. |
| popPK | Herbert-Doctor_2023 | irrelevant | 0 | 0 | The paper investigates the vasorelaxant pharmacodynamics of Salvia hispanica extracts (identifying mannitol as a constituent) in an ex-vivo aortic ring model, but does not report any pharmacokinetic disposition parameters (CL, V, ka, etc.) for mannitol. |
| popPK | Li_2023 | irrelevant | 0 | 0 | The paper focuses on the antifungal effects of carvacrol on red grapes, where mannitol is mentioned only as a carbon source for fungal growth media, not as a drug for pharmacokinetic study. |
| popPK | Lu_1997 | irrelevant | 0 | 0 | This is a mechanistic in vitro study of mitochondrial permeability where mannitol is used as a probe to track transport, not a pharmacokinetic study of mannitol's disposition. |
| popPK | Manta_2023 | irrelevant | 0 | 0 | The study focuses on the pharmacokinetics of quercetin, with mannitol used only as an excipient for microparticles. |
| popPK | Permeisari_2022 | irrelevant | 1 | 0 | This is a review article that discusses mannitol as a renal protective agent in the context of AKI prevention but does not provide any original quantitative pharmacokinetic parameter values for mannitol. |
| popPK | Poole_2020 | irrelevant | 0 | 0 | The paper is a meta-analysis of mannitol's clinical efficacy in reducing intracranial pressure and does not report pharmacokinetic parameters (CL, V, t1/2) for the drug. |
| popPK | Riedel_2025 | irrelevant | 0 | 0 | Mannitol is used only as a diagnostic marker for intestinal permeability (Lactulose/Mannitol test) and not as the subject of pharmacokinetic analysis. |
| popPK | Säfholm_2019 | irrelevant | 0 | 0 | The study is an ex vivo mechanistic investigation of bronchial contraction and mediator release, not a pharmacokinetic study of mannitol. |
| popPK | Takada_2017 | irrelevant | 0 | 0 | The study investigates the gustatory receptor (TcGr20) and feeding behavior in Tribolium castaneum, reporting no pharmacokinetic parameters (CL, V, t1/2) for mannitol. |
| popPK | Wahab_2025 | irrelevant | 0 | 0 | The study uses inhaled mannitol as a diagnostic challenge agent to induce cough and bronchoconstriction, rather than measuring its pharmacokinetic parameters. |
| popPK | Wei_2022 | irrelevant | 0 | 0 | This is a population pharmacokinetic study for vancomycin, where mannitol is only included as a covariate (concomitant drug) affecting vancomycin clearance, not as the subject drug. |
| popPK | de_2019 | irrelevant | 0 | 0 | Mannitol is used only as a cryoprotectant/excipient in the liposome formulation, and the pharmacokinetic focus is on lidocaine. |

---
<sub>Generated by `docs.py` (scholarv2) · newest extraction 2026-10-15 00:52 UTC</sub>
